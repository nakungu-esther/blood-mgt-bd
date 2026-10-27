import {
  Injectable,
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
import {
  BloodUnitStatus,
  TransferStatus,
} from '../generated/prisma/enums.js';

import { CreateBloodTransferDto } from './dto/create-blood-transfer.dto.js';

@Injectable()
export class BloodTransfersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateBloodTransferDto) {
    if (dto.sourceFacilityId === dto.destinationFacilityId) {
      throw new BadRequestException(
        'Source and destination must be different',
      );
    }

    const [unit, source, destination] = await Promise.all([
      this.prisma.bloodUnit.findUnique({
        where: { id: dto.bloodUnitId },
      }),
      this.prisma.facility.findUnique({
        where: { id: dto.sourceFacilityId },
      }),
      this.prisma.facility.findUnique({
        where: { id: dto.destinationFacilityId },
      }),
    ]);

    if (!unit) {
      throw new NotFoundException('Blood unit not found');
    }

    if (!source?.isActive || !destination?.isActive) {
      throw new BadRequestException(
        'Both facilities must be active',
      );
    }

    if (unit.facilityId !== dto.sourceFacilityId) {
      throw new BadRequestException(
        'Blood unit does not belong to the source facility',
      );
    }

    if (unit.status !== BloodUnitStatus.AVAILABLE) {
      throw new BadRequestException(
        'Only available blood units may enter transfer review',
      );
    }

    if (unit.expiresAt <= new Date()) {
      throw new BadRequestException('Blood unit has expired');
    }

    const existing = await this.prisma.bloodTransfer.findFirst({
      where: {
        bloodUnitId: dto.bloodUnitId,
        status: {
          in: [
            TransferStatus.REQUESTED,
            TransferStatus.APPROVED,
            TransferStatus.IN_TRANSIT,
          ],
        },
      },
    });

    if (existing) {
      throw new ConflictException(
        'Blood unit already has an active transfer',
      );
    }

    try {
      return await this.prisma.bloodTransfer.create({
        data: {
          transferCode: dto.transferCode,
          bloodUnitId: dto.bloodUnitId,
          sourceFacilityId: dto.sourceFacilityId,
          destinationFacilityId: dto.destinationFacilityId,
          notes: dto.notes,
          status: TransferStatus.REQUESTED,
        },
      });
    } catch (error: unknown) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Transfer code already exists');
      }
      throw error;
    }
  }

  findAll() {
    return this.prisma.bloodTransfer.findMany({
      orderBy: { requestedAt: 'desc' },
      take: 100,
    });
  }

  async findOne(id: string) {
    const transfer = await this.prisma.bloodTransfer.findUnique({
      where: { id },
    });

    if (!transfer) {
      throw new NotFoundException('Transfer not found');
    }

    return transfer;
  }

  private async changeStatus(
    id: string,
    expected: TransferStatus,
    next: TransferStatus,
  ) {
    return this.prisma.$transaction(async (tx) => {
      const transfer = await tx.bloodTransfer.findUnique({
        where: { id },
      });

      if (!transfer) {
        throw new NotFoundException('Transfer not found');
      }

      if (transfer.status !== expected) {
        throw new BadRequestException(
          `Transfer must be ${expected} before changing to ${next}`,
        );
      }

      const unit = await tx.bloodUnit.findUnique({
        where: { id: transfer.bloodUnitId },
      });

      if (!unit) {
        throw new NotFoundException('Blood unit not found');
      }

      if (unit.expiresAt <= new Date()) {
        throw new BadRequestException('Blood unit has expired');
      }

      if (
        next === TransferStatus.APPROVED &&
        unit.status !== BloodUnitStatus.AVAILABLE
      ) {
        throw new BadRequestException(
          'Blood unit is not available',
        );
      }

      if (
        next === TransferStatus.IN_TRANSIT &&
        unit.status !== BloodUnitStatus.AVAILABLE
      ) {
        throw new BadRequestException(
          'Blood unit is not available for dispatch',
        );
      }

      if (
        next === TransferStatus.RECEIVED &&
        unit.status !== BloodUnitStatus.IN_TRANSIT
      ) {
        throw new BadRequestException(
          'Blood unit is not marked in transit',
        );
      }

      const updated = await tx.bloodTransfer.update({
        where: { id },
        data: {
          status: next,
          ...(next === TransferStatus.APPROVED
            ? { approvedAt: new Date() }
            : {}),
          ...(next === TransferStatus.IN_TRANSIT
            ? { dispatchedAt: new Date() }
            : {}),
          ...(next === TransferStatus.RECEIVED
            ? { receivedAt: new Date() }
            : {}),
        },
      });

      if (next === TransferStatus.IN_TRANSIT) {
        await tx.bloodUnit.update({
          where: { id: unit.id },
          data: { status: BloodUnitStatus.IN_TRANSIT },
        });
      }

      if (next === TransferStatus.RECEIVED) {
        await tx.bloodUnit.update({
          where: { id: unit.id },
          data: {
            facilityId: transfer.destinationFacilityId,
            status: BloodUnitStatus.QUARANTINED,
          },
        });
      }

      await tx.bloodUnitEvent.create({
        data: {
          bloodUnitId: unit.id,
          eventType: `TRANSFER_${next}`,
          description: `Transfer ${transfer.transferCode} changed to ${next}`,
          facilityId:
            next === TransferStatus.RECEIVED
              ? transfer.destinationFacilityId
              : transfer.sourceFacilityId,
        },
      });

      return updated;
    });
  }

  approve(id: string) {
    return this.changeStatus(
      id,
      TransferStatus.REQUESTED,
      TransferStatus.APPROVED,
    );
  }

  dispatch(id: string) {
    return this.changeStatus(
      id,
      TransferStatus.APPROVED,
      TransferStatus.IN_TRANSIT,
    );
  }

  receive(id: string) {
    return this.changeStatus(
      id,
      TransferStatus.IN_TRANSIT,
      TransferStatus.RECEIVED,
    );
  }
}
