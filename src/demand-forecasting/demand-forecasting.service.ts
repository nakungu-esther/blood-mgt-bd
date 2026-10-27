import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
@Injectable()
export class DemandForecastingService {
  constructor(private readonly prisma: PrismaService) {}
  list(user: { id: string; role: string; facilityId?: string }) {
    return this.prisma.demandForecast.findMany({
      where: user.role === 'SUPER_ADMIN' ? {} : { facilityId: user.facilityId! },
      orderBy: { forecastDate: 'desc' }, take: 100,
      select: { id:true, facilityId:true, bloodGroup:true, component:true, forecastDate:true, predictedUnits:true, modelVersion:true, confidenceScore:true, createdAt:true },
    });
  }
}
