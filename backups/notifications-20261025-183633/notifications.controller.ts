import { Controller, Get, Req, UseGuards, ForbiddenException } from '@nestjs/common';
import { NotificationsService } from './notifications.service.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
@Controller('notifications')
@UseGuards(JwtAuthGuard)
export class NotificationsController {
  constructor(private readonly service: NotificationsService) {}
  @Get()
  list(@Req() req:any) {
    const user=req.user;
    if (!user?.id || !user?.role) throw new ForbiddenException('Authentication required');
    if (user.role!=='SUPER_ADMIN' && !user.facilityId) throw new ForbiddenException('Facility assignment required');
    return this.service.list();
  }
}
