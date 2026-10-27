var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
let AnalyticsService = class AnalyticsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async list(user) {
        const facilityFilter = user.role === 'SUPER_ADMIN' ? {} : { facilityId: user.facilityId };
        const [units, requests, donations, byStatus] = await Promise.all([
            this.prisma.bloodUnit.count({ where: facilityFilter }),
            this.prisma.hospitalRequest.count({ where: facilityFilter }),
            this.prisma.donation.count({ where: facilityFilter }),
            this.prisma.bloodUnit.groupBy({ by: ['status'], where: facilityFilter, _count: { _all: true } }),
        ]);
        return { bloodUnits: units, hospitalRequests: requests, donations, inventoryByStatus: byStatus.map(x => ({ status: x.status, count: x._count._all })) };
    }
};
AnalyticsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], AnalyticsService);
export { AnalyticsService };
//# sourceMappingURL=analytics.service.js.map