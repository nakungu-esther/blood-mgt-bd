import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
import { CreateHospitalRequestDto } from './dto/create-hospital-request.dto.js';

@Injectable()
export class HospitalRequestsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateHospitalRequestDto) {
    const facility = await this.prisma.facility.findUnique({
      where: { id: dto.facilityId },
    });

    if (!facility || !facility.isActive) {
      throw new NotFoundException(
        'Active requesting facility not found',
      );
    }

    if (facility.type !== 'HOSPITAL') {
      throw new BadRequestException(
        'Blood requests must originate from a hospital',
      );
    }

    const requiredBy = dto.requiredBy
      ? new Date(dto.requiredBy)
      : undefined;

    if (requiredBy && requiredBy < new Date()) {
      throw new BadRequestException(
        'Required-by date cannot be in the past',
      );
    }

    try {
      return await this.prisma.hospitalRequest.create({
        data: {
          requestCode: dto.requestCode,
          facilityId: dto.facilityId,
          bloodGroup: dto.bloodGroup,
          component: dto.component,
          quantity: dto.quantity,
          priority: dto.priority,
          requiredBy,
          notes: dto.notes,
          status: 'PENDING',
        },
        select: {
          id: true,
          requestCode: true,
          facilityId: true,
          bloodGroup: true,
          component: true,
          quantity: true,
          priority: true,
          status: true,
          requiredBy: true,
          createdAt: true,
        },
      });
    } catch (error: unknown) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          'Request code already exists',
        );
      }
      throw error;
    }
  }

  findAll() {
    return this.prisma.hospitalRequest.findMany({
      select: {
        id: true,
        requestCode: true,
        facilityId: true,
        bloodGroup: true,
        component: true,
        quantity: true,
        priority: true,
        status: true,
        requiredBy: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }

  async findOne(id: string) {
    const request = await this.prisma.hospitalRequest.findUnique({
      where: { id },
      select: {
        id: true,
        requestCode: true,
        facilityId: true,
        bloodGroup: true,
        component: true,
        quantity: true,
        priority: true,
        status: true,
        requiredBy: true,
        createdAt: true,
      },
    });

    if (!request) {
      throw new NotFoundException(
        'Hospital blood request not found',
      );
    }

    return request;
  }

  async findByFacility(facilityId: string) {
    return this.prisma.hospitalRequest.findMany({
      where: { facilityId },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }
}
