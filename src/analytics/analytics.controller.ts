import { Controller, Get, Req, UseGuards, ForbiddenException } from '@nestjs/common';
import { AnalyticsService } from './analytics.service.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
@Controller('analytics')
@UseGuards(JwtAuthGuard)
export class AnalyticsController {
  constructor(private readonly service: AnalyticsService) {}
  @Get()
  list(@Req() req: any) {
    const user = req.user;
    if (!user?.id || !user?.role) throw new ForbiddenException('Authentication required');
    if (user.role !== 'SUPER_ADMIN' && !user.facilityId) throw new ForbiddenException('Facility assignment required');
    return this.service.list(user);
  }
}
