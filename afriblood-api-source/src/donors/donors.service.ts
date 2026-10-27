import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
import { CreateDonorDto } from './dto/create-donor.dto.js';
import { UpdateDonorDto } from './dto/update-donor.dto.js';

@Injectable()
export class DonorsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateDonorDto) {
    const { dateOfBirth, ...data } = dto;

    try {
      return await this.prisma.donor.create({
        data: {
          ...data,
          ...(dateOfBirth && {
            dateOfBirth: new Date(dateOfBirth),
          }),
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Donor code already exists');
      }
      throw error;
    }
  }

  findAll() {
    return this.prisma.donor.findMany({
      select: {
        id: true,
        donorCode: true,
        firstName: true,
        lastName: true,
        bloodGroup: true,
        isActive: true,
        createdAt: true,
      },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }

  async findOne(id: string) {
    const donor = await this.prisma.donor.findUnique({
      where: { id },
      select: {
        id: true,
        donorCode: true,
        firstName: true,
        lastName: true,
        bloodGroup: true,
        isActive: true,
        createdAt: true,
      },
    });

    if (!donor) {
      throw new NotFoundException('Donor not found');
    }

    return donor;
  }

  async update(id: string, dto: UpdateDonorDto) {
    await this.findOne(id);

    const { dateOfBirth, ...data } = dto;

    try {
      return await this.prisma.donor.update({
        where: { id },
        data: {
          ...data,
          ...(dateOfBirth && {
            dateOfBirth: new Date(dateOfBirth),
          }),
        },
        select: {
          id: true,
          donorCode: true,
          firstName: true,
          lastName: true,
          bloodGroup: true,
          isActive: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException('Donor code already exists');
      }
      throw error;
    }
  }

  async remove(id: string) {
    await this.findOne(id);

    return this.prisma.donor.update({
      where: { id },
      data: { isActive: false },
      select: {
        id: true,
        donorCode: true,
        isActive: true,
      },
    });
  }
}
