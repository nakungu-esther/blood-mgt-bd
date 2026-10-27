import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import { CreateLabTestDto } from './dto/create-lab-test.dto.js';

@Injectable()
export class LaboratoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateLabTestDto) {
    const unit = await this.prisma.bloodUnit.findUnique({
      where: { id: dto.bloodUnitId },
    });

    if (!unit) {
      throw new NotFoundException('Blood unit not found');
    }

    if (unit.status !== 'QUARANTINED') {
      throw new BadRequestException(
        'Tests can only be recorded for quarantined units',
      );
    }

    if (unit.expiresAt <= new Date()) {
      throw new BadRequestException(
        'Cannot record screening for an expired unit',
      );
    }

    if (dto.testedAt && new Date(dto.testedAt) > new Date()) {
      throw new BadRequestException(
        'Testing date cannot be in the future',
      );
    }

    return this.prisma.labTest.create({
      data: {
        bloodUnitId: dto.bloodUnitId,
        testName: dto.testName,
        result: dto.result,
        testedAt: dto.testedAt
          ? new Date(dto.testedAt)
          : undefined,
        technicianId: dto.technicianId,
        notes: dto.notes,
      },
      select: {
        id: true,
        bloodUnitId: true,
        testName: true,
        result: true,
        testedAt: true,
        createdAt: true,
      },
    });
  }

  findAll() {
    return this.prisma.labTest.findMany({
      select: {
        id: true,
        bloodUnitId: true,
        testName: true,
        result: true,
        testedAt: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }

  async findByUnit(bloodUnitId: string) {
    const unit = await this.prisma.bloodUnit.findUnique({
      where: { id: bloodUnitId },
    });

    if (!unit) {
      throw new NotFoundException('Blood unit not found');
    }

    return this.prisma.labTest.findMany({
      where: { bloodUnitId },
      orderBy: { createdAt: 'desc' },
    });
  }
}
