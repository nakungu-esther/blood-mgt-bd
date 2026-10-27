import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
import { CreateBloodUnitDto } from './dto/create-blood-unit.dto.js';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateBloodUnitDto) {
    const donation = await this.prisma.donation.findUnique({
      where: { id: dto.donationId },
      include: { donor: true },
    });

    if (!donation) {
      throw new NotFoundException('Donation not found');
    }

    if (donation.status === 'REJECTED') {
      throw new BadRequestException(
        'Cannot register units from a rejected donation',
      );
    }

    if (donation.facilityId !== dto.facilityId) {
      throw new BadRequestException(
        'Facility must match the collection facility',
      );
    }

    const facility = await this.prisma.facility.findUnique({
      where: { id: dto.facilityId },
    });

    if (!facility || !facility.isActive) {
      throw new NotFoundException('Active facility not found');
    }

    if (
      donation.donor.bloodGroup &&
      donation.donor.bloodGroup !== dto.bloodGroup
    ) {
      throw new BadRequestException(
        'Blood group conflicts with donor record',
      );
    }

    const collectedAt = new Date(dto.collectedAt);
    const expiresAt = new Date(dto.expiresAt);

    if (
      !Number.isFinite(collectedAt.getTime()) ||
      !Number.isFinite(expiresAt.getTime()) ||
      expiresAt <= collectedAt
    ) {
      throw new BadRequestException(
        'Expiry must be after collection',
      );
    }

    if (expiresAt <= new Date()) {
      throw new BadRequestException(
        'Cannot register an already expired unit',
      );
    }

    try {
      return await this.prisma.bloodUnit.create({
        data: {
          unitCode: dto.unitCode,
          donationId: dto.donationId,
          facilityId: dto.facilityId,
          bloodGroup: dto.bloodGroup,
          component: dto.component,
          collectedAt,
          expiresAt,
          volumeMl: dto.volumeMl,
          status: 'QUARANTINED',
        },
        select: {
          id: true,
          unitCode: true,
          bloodGroup: true,
          component: true,
          status: true,
          expiresAt: true,
          facilityId: true,
          donationId: true,
        },
      });
    } catch (error: unknown) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          'Blood unit code already exists',
        );
      }
      throw error;
    }
  }

  findAll() {
    return this.prisma.bloodUnit.findMany({
      select: {
        id: true,
        unitCode: true,
        bloodGroup: true,
        component: true,
        status: true,
        collectedAt: true,
        expiresAt: true,
        facilityId: true,
        donationId: true,
      },
      orderBy: { expiresAt: 'asc' },
      take: 100,
    });
  }

  async findOne(id: string) {
    const unit = await this.prisma.bloodUnit.findUnique({
      where: { id },
      select: {
        id: true,
        unitCode: true,
        bloodGroup: true,
        component: true,
        status: true,
        collectedAt: true,
        expiresAt: true,
        facilityId: true,
        donationId: true,
      },
    });

    if (!unit) {
      throw new NotFoundException('Blood unit not found');
    }

    return unit;
  }
}
