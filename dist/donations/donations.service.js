var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, BadRequestException, ConflictException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
let DonationsService = class DonationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const donor = await this.prisma.donor.findUnique({
            where: { id: dto.donorId },
        });
        if (!donor || !donor.isActive) {
            throw new NotFoundException('Active donor not found');
        }
        const facility = await this.prisma.facility.findUnique({
            where: { id: dto.facilityId },
        });
        if (!facility || !facility.isActive) {
            throw new NotFoundException('Active facility not found');
        }
        if (!['COLLECTION_CENTER', 'BLOOD_BANK'].includes(facility.type)) {
            throw new BadRequestException('Facility is not a collection centre or blood bank');
        }
        const donatedAt = new Date(dto.donatedAt);
        if (Number.isNaN(donatedAt.getTime()) ||
            donatedAt.getTime() > Date.now()) {
            throw new BadRequestException('Donation date must be valid and not in the future');
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
        }
        catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
                throw new ConflictException('Donation code already exists');
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
    async findOne(id) {
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
};
DonationsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], DonationsService);
export { DonationsService };
//# sourceMappingURL=donations.service.js.map