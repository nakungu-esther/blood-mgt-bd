import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
@Injectable()
export class AnalyticsService {
  constructor(private readonly prisma: PrismaService) {}
  async list(user: { id: string; role: string; facilityId?: string }) {
    const facilityFilter = user.role === 'SUPER_ADMIN' ? {} : { facilityId:user.facilityId! };
    const [units, requests, donations, byStatus] = await Promise.all([
      this.prisma.bloodUnit.count({ where:facilityFilter }),
      this.prisma.hospitalRequest.count({ where:facilityFilter }),
      this.prisma.donation.count({ where:facilityFilter }),
      this.prisma.bloodUnit.groupBy({ by:['status'], where:facilityFilter, _count:{ _all:true } }),
    ]);
    return { bloodUnits:units, hospitalRequests:requests, donations, inventoryByStatus:byStatus.map(x=>({status:x.status,count:x._count._all})) };
  }
}
