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
import { LaboratoryService } from './laboratory.service.js';
import { CreateLabTestDto } from './dto/create-lab-test.dto.js';
let LaboratoryController = class LaboratoryController {
    laboratoryService;
    constructor(laboratoryService) {
        this.laboratoryService = laboratoryService;
    }
    create(dto) {
        return this.laboratoryService.create(dto);
    }
    findAll() {
        return this.laboratoryService.findAll();
    }
    findByUnit(id) {
        return this.laboratoryService.findByUnit(id);
    }
};
__decorate([
    Post('tests'),
    __param(0, Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [CreateLabTestDto]),
    __metadata("design:returntype", void 0)
], LaboratoryController.prototype, "create", null);
__decorate([
    Get('tests'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], LaboratoryController.prototype, "findAll", null);
__decorate([
    Get('units/:id/tests'),
    __param(0, Param('id', ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], LaboratoryController.prototype, "findByUnit", null);
LaboratoryController = __decorate([
    Controller('laboratory'),
    __metadata("design:paramtypes", [LaboratoryService])
], LaboratoryController);
export { LaboratoryController };
//# sourceMappingURL=laboratory.controller.js.map