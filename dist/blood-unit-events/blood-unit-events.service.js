var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable, NotFoundException, } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
let BloodUnitEventsService = class BloodUnitEventsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getUnitHistory(bloodUnitId) {
        const unit = await this.prisma.bloodUnit.findUnique({
            where: { id: bloodUnitId },
            select: {
                id: true,
                unitCode: true,
                bloodGroup: true,
                component: true,
                status: true,
                facilityId: true,
                collectedAt: true,
                expiresAt: true,
            },
        });
        if (!unit) {
            throw new NotFoundException('Blood unit not found');
        }
        const events = await this.prisma.bloodUnitEvent.findMany({
            where: { bloodUnitId },
            orderBy: [
                { occurredAt: 'asc' },
                { id: 'asc' },
            ],
        });
        return {
            bloodUnit: unit,
            eventCount: events.length,
            events,
        };
    }
    async getRecentEvents() {
        return this.prisma.bloodUnitEvent.findMany({
            orderBy: { occurredAt: 'desc' },
            take: 100,
        });
    }
};
BloodUnitEventsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], BloodUnitEventsService);
export { BloodUnitEventsService };
//# sourceMappingURL=blood-unit-events.service.js.map