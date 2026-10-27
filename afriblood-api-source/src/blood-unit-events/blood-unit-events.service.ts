import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class BloodUnitEventsService {
  constructor(private readonly prisma: PrismaService) {}

  async getUnitHistory(bloodUnitId: string) {
    const unit = await this.prisma.bloodUnit.findUnique({
      where: { id: bloodUnitId },
      select: {
        id: true,
        unitCode: true,
        bloodGroup: true,
        component: true,
        status: true,
        facilityId: true,
        collectedAt: true,
        expiresAt: true,
      },
    });

    if (!unit) {
      throw new NotFoundException('Blood unit not found');
    }

    const events = await this.prisma.bloodUnitEvent.findMany({
      where: { bloodUnitId },
      orderBy: [
        { occurredAt: 'asc' },
        { id: 'asc' },
      ],
    });

    return {
      bloodUnit: unit,
      eventCount: events.length,
      events,
    };
  }

  async getRecentEvents() {
    return this.prisma.bloodUnitEvent.findMany({
      orderBy: { occurredAt: 'desc' },
      take: 100,
    });
  }
}
