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
import { AuditLogsService } from './audit-logs.service.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { UserRole } from '../generated/prisma/enums.js';
let AuditLogsController = class AuditLogsController {
    service;
    constructor(service) {
        this.service = service;
    }
    findRecent() {
        return this.service.findRecent();
    }
    findByUser(userId) {
        return this.service.findByUser(userId);
    }
    findByEntity(entity, entityId) {
        return this.service.findByEntity(entity, entityId);
    }
};
__decorate([
    Get(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AuditLogsController.prototype, "findRecent", null);
__decorate([
    Get('user/:userId'),
    __param(0, Param('userId', ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuditLogsController.prototype, "findByUser", null);
__decorate([
    Get('entity/:entity/:entityId'),
    __param(0, Param('entity')),
    __param(1, Param('entityId', ParseUUIDPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], AuditLogsController.prototype, "findByEntity", null);
AuditLogsController = __decorate([
    Controller('audit-logs'),
    Roles(UserRole.SUPER_ADMIN),
    __metadata("design:paramtypes", [AuditLogsService])
], AuditLogsController);
export { AuditLogsController };
//# sourceMappingURL=audit-logs.controller.js.map