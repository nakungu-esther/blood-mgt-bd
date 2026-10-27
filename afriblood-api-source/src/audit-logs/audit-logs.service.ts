import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AuditLogsService {
  constructor(private readonly prisma: PrismaService) {}

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

  findByEntity(entity: string, entityId: string) {
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

  findByUser(userId: string) {
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
}
