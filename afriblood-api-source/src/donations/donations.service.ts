import {
  Injectable,
  NotFoundException,
  BadRequestException,
  ConflictException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
import { CreateDonationDto } from './dto/create-donation.dto.js';

@Injectable()
export class DonationsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateDonationDto) {
    const donor = await this.prisma.donor.findUnique({
      where: { id: dto.donorId },
    });

    if (!donor || !donor.isActive) {
      throw new NotFoundException(
        'Active donor not found',
      );
    }

    const facility = await this.prisma.facility.findUnique({
      where: { id: dto.facilityId },
    });

    if (!facility || !facility.isActive) {
      throw new NotFoundException(
        'Active facility not found',
      );
    }

    if (
      !['COLLECTION_CENTER', 'BLOOD_BANK'].includes(
        facility.type,
      )
    ) {
      throw new BadRequestException(
        'Facility is not a collection centre or blood bank',
      );
    }

    const donatedAt = new Date(dto.donatedAt);

    if (
      Number.isNaN(donatedAt.getTime()) ||
      donatedAt.getTime() > Date.now()
    ) {
      throw new BadRequestException(
        'Donation date must be valid and not in the future',
      );
    }

    try {
      return await this.prisma.donation.create({
        data: {
          donationCode: dto.donationCode,
          donorId: dto.donorId,
          facilityId: dto.facilityId,
          donatedAt,
          volumeMl: dto.volumeMl,
          notes: dto.notes,
        },
        select: {
          id: true,
          donationCode: true,
          donatedAt: true,
          volumeMl: true,
          status: true,
          donorId: true,
          facilityId: true,
          createdAt: true,
        },
      });
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        throw new ConflictException(
          'Donation code already exists',
        );
      }
      throw error;
    }
  }

  findAll() {
    return this.prisma.donation.findMany({
      select: {
        id: true,
        donationCode: true,
        donatedAt: true,
        volumeMl: true,
        status: true,
        donorId: true,
        facilityId: true,
        createdAt: true,
      },
      orderBy: { donatedAt: 'desc' },
      take: 100,
    });
  }

  async findOne(id: string) {
    const donation = await this.prisma.donation.findUnique({
      where: { id },
      select: {
        id: true,
        donationCode: true,
        donatedAt: true,
        volumeMl: true,
        status: true,
        donorId: true,
        facilityId: true,
        createdAt: true,
      },
    });

    if (!donation) {
      throw new NotFoundException('Donation not found');
    }

    return donation;
  }
}
