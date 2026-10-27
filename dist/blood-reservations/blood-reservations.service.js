var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BadRequestException, ConflictException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
let BloodReservationsService = class BloodReservationsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    scope(user) {
        if (!user?.id || !user?.role)
            throw new ForbiddenException('Authentication required');
        if (user.role === 'SUPER_ADMIN')
            return null;
        if (!user.facilityId)
            throw new ForbiddenException('Facility assignment required');
        return user.facilityId;
    }
    assertOfficer(user) {
        if (!['SUPER_ADMIN', 'FACILITY_ADMIN', 'BLOOD_BANK_OFFICER'].includes(user?.role)) {
            throw new ForbiddenException('Reservation management role required');
        }
    }
    list(user) {
        const facilityId = this.scope(user);
        return this.prisma.bloodReservation.findMany({
            where: facilityId ? { request: { facilityId } } : {},
            include: { request: true, bloodUnit: true },
            orderBy: { reservedAt: 'desc' }, take: 100,
        });
    }
    async detail(id, user) {
        const facilityId = this.scope(user);
        const reservation = await this.prisma.bloodReservation.findUnique({
            where: { id }, include: { request: true, bloodUnit: true },
        });
        if (!reservation || (facilityId && reservation.request.facilityId !== facilityId)) {
            throw new NotFoundException('Reservation not found');
        }
        return reservation;
    }
    async create(body, user) {
        this.assertOfficer(user);
        const facilityId = this.scope(user);
        if (!body?.requestId || !body?.bloodUnitId)
            throw new BadRequestException('requestId and bloodUnitId are required');
        let expiresAt;
        if (body.expiresAt !== undefined) {
            expiresAt = new Date(body.expiresAt);
            if (Number.isNaN(expiresAt.getTime()) || expiresAt <= new Date())
                throw new BadRequestException('expiresAt must be a future ISO date');
        }
        return this.prisma.$transaction(async (tx) => {
            const request = await tx.hospitalRequest.findUnique({ where: { id: body.requestId } });
            const unit = await tx.bloodUnit.findUnique({ where: { id: body.bloodUnitId } });
            if (!request || !unit)
                throw new NotFoundException('Request or blood unit not found');
            if (facilityId && request.facilityId !== facilityId)
                throw new ForbiddenException('Request belongs to another facility');
            if (unit.facilityId !== request.facilityId)
                throw new ConflictException('Unit must be at the requesting facility');
            if (!['APPROVED', 'PARTIALLY_FULFILLED'].includes(request.status))
                throw new ConflictException('Request is not approved');
            if (unit.status !== 'AVAILABLE')
                throw new ConflictException('Blood unit is not available');
            if (unit.expiresAt <= new Date())
                throw new ConflictException('Blood unit has expired');
            if (unit.bloodGroup !== request.bloodGroup || unit.component !== request.component) {
                throw new ConflictException('Blood group/component mismatch; clinical compatibility workflow required');
            }
            const existing = await tx.bloodReservation.count({ where: { bloodUnitId: unit.id, status: 'ACTIVE' } });
            if (existing)
                throw new ConflictException('Unit already has an active reservation');
            const allocated = await tx.bloodReservation.count({ where: { requestId: request.id, status: { in: ['ACTIVE', 'FULFILLED'] } } });
            if (allocated >= request.quantity)
                throw new ConflictException('Request quantity already reserved');
            const changed = await tx.bloodUnit.updateMany({ where: { id: unit.id, status: 'AVAILABLE' }, data: { status: 'RESERVED' } });
            if (changed.count !== 1)
                throw new ConflictException('Blood unit was reserved concurrently');
            const reservation = await tx.bloodReservation.create({
                data: { requestId: request.id, bloodUnitId: unit.id, status: 'ACTIVE', ...(expiresAt ? { expiresAt } : {}) },
            });
            await tx.bloodUnitEvent.create({ data: { bloodUnitId: unit.id, eventType: 'RESERVED', actorId: user.id, facilityId: unit.facilityId, description: 'Blood unit reserved for an approved hospital request' } });
            return reservation;
        });
    }
    async release(id, user) {
        this.assertOfficer(user);
        const facilityId = this.scope(user);
        return this.prisma.$transaction(async (tx) => {
            const reservation = await tx.bloodReservation.findUnique({ where: { id }, include: { request: true, bloodUnit: true } });
            if (!reservation || (facilityId && reservation.request.facilityId !== facilityId))
                throw new NotFoundException('Reservation not found');
            if (reservation.status !== 'ACTIVE')
                throw new ConflictException('Reservation is not active');
            if (reservation.bloodUnit.status !== 'RESERVED')
                throw new ConflictException('Unit is not in RESERVED state');
            const changed = await tx.bloodReservation.updateMany({ where: { id, status: 'ACTIVE' }, data: { status: 'RELEASED' } });
            if (changed.count !== 1)
                throw new ConflictException('Reservation state changed concurrently');
            const remaining = await tx.bloodReservation.count({ where: { bloodUnitId: reservation.bloodUnitId, status: 'ACTIVE' } });
            if (remaining === 0) {
                await tx.bloodUnit.updateMany({ where: { id: reservation.bloodUnitId, status: 'RESERVED' }, data: { status: 'AVAILABLE' } });
            }
            await tx.bloodUnitEvent.create({ data: { bloodUnitId: reservation.bloodUnitId, eventType: 'RESERVATION_RELEASED', actorId: user.id, facilityId: reservation.bloodUnit.facilityId, description: 'Reservation released; not a clinical blood issue' } });
            return tx.bloodReservation.findUnique({ where: { id } });
        });
    }
};
BloodReservationsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], BloodReservationsService);
export { BloodReservationsService };
//# sourceMappingURL=blood-reservations.service.js.map