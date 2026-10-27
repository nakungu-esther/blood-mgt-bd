var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, ConflictException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
let DonorsService = class DonorsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
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
        }
        catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
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
    async findOne(id) {
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
    async update(id, dto) {
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
        }
        catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
                throw new ConflictException('Donor code already exists');
            }
            throw error;
        }
    }
    async remove(id) {
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
};
DonorsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], DonorsService);
export { DonorsService };
//# sourceMappingURL=donors.service.js.map