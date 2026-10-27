import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
@Injectable()
export class RedistributionService {
  constructor(private readonly prisma: PrismaService) {}
  list(user: { id: string; role: string; facilityId?: string }) {
    return this.prisma.redistributionRecommendation.findMany({
      where: user.role === 'SUPER_ADMIN' ? {} : { OR: [ {sourceFacilityId:user.facilityId!}, {destinationFacilityId:user.facilityId!} ] },
      orderBy: { createdAt:'desc' }, take: 100,
      select: { id:true, sourceFacilityId:true, destinationFacilityId:true, bloodGroup:true, component:true, suggestedUnits:true, reason:true, confidenceScore:true, status:true, createdAt:true, reviewedAt:true },
    });
  }
}
