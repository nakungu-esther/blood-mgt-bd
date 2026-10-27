import { Controller, Get, Patch, Param, Req, UseGuards, ForbiddenException } from '@nestjs/common';
import { NotificationsService } from './notifications.service.js';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';

@Controller('notifications')
@UseGuards(JwtAuthGuard)
export class NotificationsController {
  constructor(private readonly service: NotificationsService) {}
  private userId(req: any): string {
    const id = req.user?.id ?? req.user?.userId;
    if (typeof id !== 'string' || !id) throw new ForbiddenException('Authentication required');
    return id;
  }
  @Get()
  list(@Req() req: any) { return this.service.list(this.userId(req)); }
  @Get('unread-count')
  unreadCount(@Req() req: any) { return this.service.unreadCount(this.userId(req)); }
  @Patch('read-all')
  readAll(@Req() req: any) { return this.service.readAll(this.userId(req)); }
  @Patch(':id/read')
  markRead(@Req() req: any, @Param('id') id: string) { return this.service.markRead(this.userId(req), id); }
}