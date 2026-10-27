import { Controller, Get, Req, UseGuards, ForbiddenException } from '@nestjs/common';
import { ReportsService } from './reports.service.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
@Controller('reports')
@UseGuards(JwtAuthGuard)
export class ReportsController {
  constructor(private readonly service: ReportsService) {}
  @Get()
  summary(@Req() req: any) {
    const user=req.user;
    if (!user?.id || !user?.role) throw new ForbiddenException('Authentication required');
    if (user.role!=='SUPER_ADMIN' && !user.facilityId) throw new ForbiddenException('Facility assignment required');
    return this.service.summary(user);
  }
}
