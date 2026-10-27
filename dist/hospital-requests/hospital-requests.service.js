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
let HospitalRequestsService = class HospitalRequestsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        const facility = await this.prisma.facility.findUnique({
            where: { id: dto.facilityId },
        });
        if (!facility || !facility.isActive) {
            throw new NotFoundException('Active requesting facility not found');
        }
        if (facility.type !== 'HOSPITAL') {
            throw new BadRequestException('Blood requests must originate from a hospital');
        }
        const requiredBy = dto.requiredBy
            ? new Date(dto.requiredBy)
            : undefined;
        if (requiredBy && requiredBy < new Date()) {
            throw new BadRequestException('Required-by date cannot be in the past');
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
        }
        catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
                throw new ConflictException('Request code already exists');
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
    async findOne(id) {
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
            throw new NotFoundException('Hospital blood request not found');
        }
        return request;
    }
    async findByFacility(facilityId) {
        return this.prisma.hospitalRequest.findMany({
            where: { facilityId },
            orderBy: { createdAt: 'desc' },
            take: 100,
        });
    }
};
HospitalRequestsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], HospitalRequestsService);
export { HospitalRequestsService };
//# sourceMappingURL=hospital-requests.service.js.map