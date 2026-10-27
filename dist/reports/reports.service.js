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
let ReportsService = class ReportsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async summary(user) {
        const where = user.role === 'SUPER_ADMIN' ? {} : { facilityId: user.facilityId };
        const [inventory, donations, requests, unitsByStatus, requestsByStatus] = await Promise.all([
            this.prisma.bloodUnit.count({ where }),
            this.prisma.donation.count({ where }),
            this.prisma.hospitalRequest.count({ where }),
            this.prisma.bloodUnit.groupBy({ by: ['status'], where, _count: { _all: true } }),
            this.prisma.hospitalRequest.groupBy({ by: ['status'], where, _count: { _all: true } }),
        ]);
        return { generatedAt: new Date().toISOString(), scope: user.role === 'SUPER_ADMIN' ? 'all-facilities' : user.facilityId,
            inventory, donations, requests,
            unitsByStatus: unitsByStatus.map(x => ({ status: x.status, count: x._count._all })),
            requestsByStatus: requestsByStatus.map(x => ({ status: x.status, count: x._count._all })) };
    }
};
ReportsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], ReportsService);
export { ReportsService };
//# sourceMappingURL=reports.service.js.map