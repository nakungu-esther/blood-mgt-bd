var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, BadRequestException, ConflictException, NotFoundException, } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
import { UserRole } from '../generated/prisma/enums.js';
const safeUserSelect = {
    id: true,
    firstName: true,
    lastName: true,
    email: true,
    role: true,
    facilityId: true,
    isActive: true,
    createdAt: true,
    updatedAt: true,
};
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async validateFacility(role, facilityId) {
        if (role !== UserRole.SUPER_ADMIN && !facilityId) {
            throw new BadRequestException('A facility is required for this role');
        }
        if (!facilityId)
            return;
        const facility = await this.prisma.facility.findUnique({
            where: { id: facilityId },
        });
        if (!facility || !facility.isActive) {
            throw new BadRequestException('Facility does not exist or is inactive');
        }
        if (role === UserRole.HOSPITAL_OFFICER &&
            facility.type !== 'HOSPITAL') {
            throw new BadRequestException('Hospital officers must belong to a hospital');
        }
        if (role === UserRole.BLOOD_BANK_OFFICER &&
            facility.type !== 'BLOOD_BANK') {
            throw new BadRequestException('Blood-bank officers must belong to a blood bank');
        }
        if (role === UserRole.LAB_TECHNICIAN &&
            facility.type !== 'LABORATORY') {
            throw new BadRequestException('Laboratory technicians must belong to a laboratory');
        }
    }
    async create(dto) {
        await this.validateFacility(dto.role, dto.facilityId);
        const passwordHash = await bcrypt.hash(dto.password, 12);
        try {
            return await this.prisma.user.create({
                data: {
                    firstName: dto.firstName.trim(),
                    lastName: dto.lastName.trim(),
                    email: dto.email.trim().toLowerCase(),
                    passwordHash,
                    role: dto.role,
                    facilityId: dto.facilityId,
                    isActive: true,
                },
                select: safeUserSelect,
            });
        }
        catch (error) {
            if (error instanceof Prisma.PrismaClientKnownRequestError &&
                error.code === 'P2002') {
                throw new ConflictException('A user with this email already exists');
            }
            throw error;
        }
    }
    findAll() {
        return this.prisma.user.findMany({
            select: safeUserSelect,
            orderBy: { createdAt: 'desc' },
            take: 100,
        });
    }
    async findOne(id) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: safeUserSelect,
        });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        return user;
    }
    async update(id, dto) {
        const current = await this.prisma.user.findUnique({
            where: { id },
        });
        if (!current) {
            throw new NotFoundException('User not found');
        }
        const nextRole = dto.role ?? current.role;
        const nextFacilityId = dto.facilityId ?? current.facilityId;
        await this.validateFacility(nextRole, nextFacilityId);
        if (current.role === UserRole.SUPER_ADMIN &&
            current.isActive &&
            ((dto.role && dto.role !== UserRole.SUPER_ADMIN) ||
                dto.isActive === false)) {
            const activeAdmins = await this.prisma.user.count({
                where: {
                    role: UserRole.SUPER_ADMIN,
                    isActive: true,
                },
            });
            if (activeAdmins <= 1) {
                throw new BadRequestException('Cannot remove the last active super administrator');
            }
        }
        return this.prisma.user.update({
            where: { id },
            data: {
                role: dto.role,
                facilityId: dto.facilityId,
                isActive: dto.isActive,
            },
            select: safeUserSelect,
        });
    }
    async resetPassword(id, newPassword) {
        const user = await this.prisma.user.findUnique({
            where: { id },
            select: { id: true },
        });
        if (!user) {
            throw new NotFoundException('User not found');
        }
        const passwordHash = await bcrypt.hash(newPassword, 12);
        await this.prisma.user.update({
            where: { id },
            data: { passwordHash },
        });
        return { message: 'Password updated successfully' };
    }
};
UsersService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map