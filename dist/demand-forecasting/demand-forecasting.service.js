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
let DemandForecastingService = class DemandForecastingService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    list(user) {
        return this.prisma.demandForecast.findMany({
            where: user.role === 'SUPER_ADMIN' ? {} : { facilityId: user.facilityId },
            orderBy: { forecastDate: 'desc' }, take: 100,
            select: { id: true, facilityId: true, bloodGroup: true, component: true, forecastDate: true, predictedUnits: true, modelVersion: true, confidenceScore: true, createdAt: true },
        });
    }
};
DemandForecastingService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], DemandForecastingService);
export { DemandForecastingService };
//# sourceMappingURL=demand-forecasting.service.js.map