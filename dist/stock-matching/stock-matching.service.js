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
let StockMatchingService = class StockMatchingService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAvailability() {
        const now = new Date();
        const units = await this.prisma.bloodUnit.groupBy({
            by: ['facilityId', 'bloodGroup', 'component'],
            where: {
                status: 'AVAILABLE',
                expiresAt: { gt: now },
                facility: { isActive: true },
            },
            _count: { id: true },
        });
        return units.map((unit) => ({
            facilityId: unit.facilityId,
            bloodGroup: unit.bloodGroup,
            component: unit.component,
            availableUnits: unit._count.id,
        }));
    }
    async matchRequest(requestId) {
        const request = await this.prisma.hospitalRequest.findUnique({
            where: { id: requestId },
        });
        if (!request) {
            throw new NotFoundException('Hospital blood request not found');
        }
        const now = new Date();
        const stock = await this.prisma.bloodUnit.groupBy({
            by: ['facilityId'],
            where: {
                bloodGroup: request.bloodGroup,
                component: request.component,
                status: 'AVAILABLE',
                expiresAt: { gt: now },
                facility: { isActive: true },
            },
            _count: { id: true },
        });
        const facilityIds = stock.map((item) => item.facilityId);
        const facilities = await this.prisma.facility.findMany({
            where: { id: { in: facilityIds } },
            select: {
                id: true,
                name: true,
                district: true,
                region: true,
            },
        });
        const facilityMap = new Map(facilities.map((facility) => [facility.id, facility]));
        const totalAvailable = stock.reduce((sum, item) => sum + item._count.id, 0);
        return {
            requestId: request.id,
            requestCode: request.requestCode,
            bloodGroup: request.bloodGroup,
            component: request.component,
            requestedUnits: request.quantity,
            totalAvailable,
            shortage: Math.max(0, request.quantity - totalAvailable),
            candidateFacilities: stock.map((item) => ({
                facilityId: item.facilityId,
                facilityName: facilityMap.get(item.facilityId)?.name ?? 'Unknown',
                district: facilityMap.get(item.facilityId)?.district ?? null,
                region: facilityMap.get(item.facilityId)?.region ?? null,
                availableUnits: item._count.id,
            })),
            note: 'Inventory lookup only. Requires clinical and operational verification before allocation.',
        };
    }
};
StockMatchingService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], StockMatchingService);
export { StockMatchingService };
//# sourceMappingURL=stock-matching.service.js.map