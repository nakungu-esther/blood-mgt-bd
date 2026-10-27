var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Controller, Get, Req, UseGuards, ForbiddenException } from '@nestjs/common';
import { DemandForecastingService } from './demand-forecasting.service.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
let DemandForecastingController = class DemandForecastingController {
    service;
    constructor(service) {
        this.service = service;
    }
    list(req) {
        const user = req.user;
        if (!user?.id || !user?.role)
            throw new ForbiddenException('Authentication required');
        if (user.role !== 'SUPER_ADMIN' && !user.facilityId)
            throw new ForbiddenException('Facility assignment required');
        return this.service.list(user);
    }
};
__decorate([
    Get(),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DemandForecastingController.prototype, "list", null);
DemandForecastingController = __decorate([
    Controller('demand-forecasting'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [DemandForecastingService])
], DemandForecastingController);
export { DemandForecastingController };
//# sourceMappingURL=demand-forecasting.controller.js.map