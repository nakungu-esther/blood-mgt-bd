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
import { Controller, Get, Post, Patch, Delete, Body, Param, ParseUUIDPipe, } from '@nestjs/common';
import { DonorsService } from '../donors/donors.service.js';
import { CreateDonorDto } from './dto/create-donor.dto.js';
import { UpdateDonorDto } from './dto/update-donor.dto.js';
let DonorsController = class DonorsController {
    donorsService;
    constructor(donorsService) {
        this.donorsService = donorsService;
    }
    create(dto) {
        return this.donorsService.create(dto);
    }
    findAll() {
        return this.donorsService.findAll();
    }
    findOne(id) {
        return this.donorsService.findOne(id);
    }
    update(id, dto) {
        return this.donorsService.update(id, dto);
    }
    remove(id) {
        return this.donorsService.remove(id);
    }
};
__decorate([
    Post(),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateDonorDto]),
    __metadata("design:returntype", void 0)
], DonorsController.prototype, "create", null);
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], DonorsController.prototype, "findAll", null);
__decorate([
    Get(':id'),
    __param(0, Param('id', ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DonorsController.prototype, "findOne", null);
__decorate([
    Patch(':id'),
    __param(0, Param('id', ParseUUIDPipe)),
    __param(1, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, UpdateDonorDto]),
    __metadata("design:returntype", void 0)
], DonorsController.prototype, "update", null);
__decorate([
    Delete(':id'),
    __param(0, Param('id', ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], DonorsController.prototype, "remove", null);
DonorsController = __decorate([
    Controller('donors'),
    __metadata("design:paramtypes", [DonorsService])
], DonorsController);
export { DonorsController };
//# sourceMappingURL=donors.controller.js.map