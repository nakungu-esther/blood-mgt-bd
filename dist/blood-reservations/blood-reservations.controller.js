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
import { Body, Controller, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { BloodReservationsService } from './blood-reservations.service.js';
let BloodReservationsController = class BloodReservationsController {
    service;
    constructor(service) {
        this.service = service;
    }
    list(req) { return this.service.list(req.user); }
    detail(id, req) { return this.service.detail(id, req.user); }
    create(body, req) {
        return this.service.create(body, req.user);
    }
    release(id, req) { return this.service.release(id, req.user); }
};
__decorate([
    Get(),
    __param(0, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BloodReservationsController.prototype, "list", null);
__decorate([
    Get(':id'),
    __param(0, Param('id')),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BloodReservationsController.prototype, "detail", null);
__decorate([
    Post(),
    __param(0, Body()),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], BloodReservationsController.prototype, "create", null);
__decorate([
    Patch(':id/release'),
    __param(0, Param('id')),
    __param(1, Req()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], BloodReservationsController.prototype, "release", null);
BloodReservationsController = __decorate([
    Controller('blood-reservations'),
    UseGuards(JwtAuthGuard),
    __metadata("design:paramtypes", [BloodReservationsService])
], BloodReservationsController);
export { BloodReservationsController };
//# sourceMappingURL=blood-reservations.controller.js.map