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
import { Controller, Get, Post, Body, Param, ParseUUIDPipe, } from '@nestjs/common';
import { HospitalRequestsService } from './hospital-requests.service.js';
import { CreateHospitalRequestDto } from './dto/create-hospital-request.dto.js';
let HospitalRequestsController = class HospitalRequestsController {
    service;
    constructor(service) {
        this.service = service;
    }
    create(dto) {
        return this.service.create(dto);
    }
    findAll() {
        return this.service.findAll();
    }
    findByFacility(facilityId) {
        return this.service.findByFacility(facilityId);
    }
    findOne(id) {
        return this.service.findOne(id);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateHospitalRequestDto]),
    __metadata("design:returntype", void 0)
], HospitalRequestsController.prototype, "create", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], HospitalRequestsController.prototype, "findAll", null);
__decorate([
    Get('facility/:facilityId'),
    __param(0, Param('facilityId', ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HospitalRequestsController.prototype, "findByFacility", null);
__decorate([
    Get(':id'),
    __param(0, Param('id', ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], HospitalRequestsController.prototype, "findOne", null);
HospitalRequestsController = __decorate([
    Controller('hospital-requests'),
    __metadata("design:paramtypes", [HospitalRequestsService])
], HospitalRequestsController);
export { HospitalRequestsController };
//# sourceMappingURL=hospital-requests.controller.js.map