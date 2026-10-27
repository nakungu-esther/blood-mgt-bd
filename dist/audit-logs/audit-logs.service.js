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
let AuditLogsService = class AuditLogsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findRecent() {
        return this.prisma.auditLog.findMany({
            select: {
                id: true,
                userId: true,
                action: true,
                entity: true,
                entityId: true,
                createdAt: true,
            },
            orderBy: { createdAt: 'desc' },
            take: 100,
        });
    }
    findByEntity(entity, entityId) {
        return this.prisma.auditLog.findMany({
            where: {
                entity,
                entityId,
            },
            select: {
                id: true,
                userId: true,
                action: true,
                entity: true,
                entityId: true,
                createdAt: true,
            },
            orderBy: { createdAt: 'desc' },
            take: 100,
        });
    }
    findByUser(userId) {
        return this.prisma.auditLog.findMany({
            where: { userId },
            select: {
                id: true,
                userId: true,
                action: true,
                entity: true,
                entityId: true,
                createdAt: true,
            },
            orderBy: { createdAt: 'desc' },
            take: 100,
        });
    }
};
AuditLogsService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [PrismaService])
], AuditLogsService);
export { AuditLogsService };
//# sourceMappingURL=audit-logs.service.js.map