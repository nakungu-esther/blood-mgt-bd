var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, BadRequestException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
let LaboratoryService = class LaboratoryService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const unit = await this.prisma.bloodUnit.findUnique({
            where: { id: dto.bloodUnitId },
        });
        if (!unit) {
            throw new NotFoundException('Blood unit not found');
        }
        if (unit.status !== 'QUARANTINED') {
            throw new BadRequestException('Tests can only be recorded for quarantined units');
        }
        if (unit.expiresAt <= new Date()) {
            throw new BadRequestException('Cannot record screening for an expired unit');
        }
        if (dto.testedAt && new Date(dto.testedAt) > new Date()) {
            throw new BadRequestException('Testing date cannot be in the future');
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
    async findByUnit(bloodUnitId) {
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
};
LaboratoryService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], LaboratoryService);
export { LaboratoryService };
//# sourceMappingURL=laboratory.service.js.map