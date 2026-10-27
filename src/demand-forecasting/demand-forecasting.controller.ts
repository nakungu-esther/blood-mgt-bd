import { Controller, Get, Req, UseGuards, ForbiddenException } from '@nestjs/common';
import { DemandForecastingService } from './demand-forecasting.service.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
@Controller('demand-forecasting')
@UseGuards(JwtAuthGuard)
export class DemandForecastingController {
  constructor(private readonly service: DemandForecastingService) {}
  @Get()
  list(@Req() req: any) {
    const user = req.user;
    if (!user?.id || !user?.role) throw new ForbiddenException('Authentication required');
    if (user.role !== 'SUPER_ADMIN' && !user.facilityId) throw new ForbiddenException('Facility assignment required');
    return this.service.list(user);
  }
}
