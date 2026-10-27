import { Controller, Get, Req, UseGuards, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
@Controller('traceability')
@UseGuards(JwtAuthGuard)
export class TraceabilityController {
  constructor(private readonly prisma: PrismaService) {}
  @Get()
  list(@Req() req:any) {
    const user=req.user;
    if (!user?.id || !user?.role) throw new ForbiddenException('Authentication required');
    if (user.role!=='SUPER_ADMIN' && !user.facilityId) throw new ForbiddenException('Facility assignment required');
    return this.prisma.bloodUnitEvent.findMany({
      where:user.role==='SUPER_ADMIN'?{}:{bloodUnit:{facilityId:user.facilityId}},
      orderBy:{occurredAt:'desc'},take:100,
      select:{id:true,bloodUnitId:true,eventType:true,description:true,facilityId:true,occurredAt:true,
        bloodUnit:{select:{unitCode:true,bloodGroup:true,component:true,status:true,facilityId:true}}}
    });
  }
}
