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
import { Controller, Get, Post, Body, Param, Patch, Delete, ParseUUIDPipe, } from '@nestjs/common';
import { FacilitiesService } from './facilities.service.js';
import { UpdateFacilityDto } from './dto/update-facility.dto.js';
let FacilitiesController = class FacilitiesController {
    facilitiesService;
    constructor(facilitiesService) {
        this.facilitiesService = facilitiesService;
    }
    create(dto) {
        return this.facilitiesService.create(dto);
    }
    findAll() {
        return this.facilitiesService.findAll();
    }
    findOne(id) {
        return this.facilitiesService.findOne(id);
    }
    update(id, dto) {
        return this.facilitiesService.update(id, dto);
    }
    remove(id) {
        return this.facilitiesService.remove(id);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FacilitiesController.prototype, "create", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FacilitiesController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id', ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacilitiesController.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id', ParseUUIDPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateFacilityDto]),
    __metadata("design:returntype", void 0)
], FacilitiesController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id', ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FacilitiesController.prototype, "remove", null);
FacilitiesController = __decorate([
    Controller('facilities'),
    __metadata("design:paramtypes", [FacilitiesService])
], FacilitiesController);
export { FacilitiesController };
//# sourceMappingURL=facilities.controller.js.map