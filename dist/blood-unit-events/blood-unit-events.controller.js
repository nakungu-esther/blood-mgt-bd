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
import { Controller, Get, Param, ParseUUIDPipe, } from '@nestjs/common';
import { BloodUnitEventsService } from './blood-unit-events.service.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { UserRole } from '../generated/prisma/enums.js';
let BloodUnitEventsController = class BloodUnitEventsController {
    service;
    constructor(service) {
        this.service = service;
    }
    getRecentEvents() {
        return this.service.getRecentEvents();
    }
    getUnitHistory(bloodUnitId) {
        return this.service.getUnitHistory(bloodUnitId);
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BloodUnitEventsController.prototype, "getRecentEvents", null);
__decorate([
    Get('unit/:bloodUnitId'),
    __param(0, Param('bloodUnitId', ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BloodUnitEventsController.prototype, "getUnitHistory", null);
BloodUnitEventsController = __decorate([
    Controller('blood-unit-events'),
    Roles(UserRole.SUPER_ADMIN),
    __metadata("design:paramtypes", [BloodUnitEventsService])
], BloodUnitEventsController);
export { BloodUnitEventsController };
//# sourceMappingURL=blood-unit-events.controller.js.map