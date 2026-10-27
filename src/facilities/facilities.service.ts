import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { PrismaService } from 
'../prisma/prisma.service.js';
import { CreateFacilityDto } from './dto/create-facility.dto.js';
import { UpdateFacilityDto } from './dto/update-facility.dto.js';
import { Prisma } from '../generated/prisma/client.js';

@Injectable()
export class FacilitiesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateFacilityDto) {
    try {
      return await this.prisma.facility.create({
        data: dto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('A facility with this code already exists');
      }
      throw error;
    }
  }

  async findAll() {
    return this.prisma.facility.findMany({
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const facility = await this.prisma.facility.findUnique({
      where: { id },
    });

    if (!facility) {
      throw new NotFoundException('Facility not found');
    }

    return facility;
  }

  async update(id: string, dto: UpdateFacilityDto) {
    await this.findOne(id);

    try {
      return await this.prisma.facility.update({
        where: { id },
        data: dto,
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('A facility with this code already exists');
      }
      throw error;
    }
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.facility.update({
      where: { id },
      data: { isActive: false },
    });
  }
}
