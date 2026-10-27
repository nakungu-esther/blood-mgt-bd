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
import { StockMatchingService } from './stock-matching.service.js';
let StockMatchingController = class StockMatchingController {
    service;
    constructor(service) {
        this.service = service;
    }
    getAvailability() {
        return this.service.getAvailability();
    }
    matchRequest(id) {
        return this.service.matchRequest(id);
    }
};
__decorate([
    Get('availability'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StockMatchingController.prototype, "getAvailability", null);
__decorate([
    Get('requests/:id'),
    __param(0, Param('id', ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StockMatchingController.prototype, "matchRequest", null);
StockMatchingController = __decorate([
    Controller('stock-matching'),
    __metadata("design:paramtypes", [StockMatchingService])
], StockMatchingController);
export { StockMatchingController };
//# sourceMappingURL=stock-matching.controller.js.map