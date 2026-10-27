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
let FacilitiesService = class FacilitiesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(dto) {
        try {
            return await this.prisma.facility.create({
                data: dto,
            });
        }
        catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
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
    async findOne(id) {
        const facility = await this.prisma.facility.findUnique({
            where: { id },
        });
        if (!facility) {
            throw new NotFoundException('Facility not found');
        }
        return facility;
    }
    async update(id, dto) {
        await this.findOne(id);
        try {
            return await this.prisma.facility.update({
                where: { id },
                data: dto,
            });
        }
        catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
                throw new ConflictException('A facility with this code already exists');
            }
            throw error;
        }
    }
    async remove(id) {
        await this.findOne(id);
        return this.prisma.facility.update({
            where: { id },
            data: { isActive: false },
        });
    }
};
FacilitiesService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], FacilitiesService);
export { FacilitiesService };
//# sourceMappingURL=facilities.service.js.map