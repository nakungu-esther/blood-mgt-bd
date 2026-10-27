import { Body, Controller, ForbiddenException, Get, Param, Patch, Post, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard.js';
import { BloodReservationsService } from './blood-reservations.service.js';

@Controller('blood-reservations')
@UseGuards(JwtAuthGuard)
export class BloodReservationsController {
  constructor(private readonly service: BloodReservationsService) {}
  @Get()
  list(@Req() req: any) { return this.service.list(req.user); }
  @Get(':id')
  detail(@Param('id') id: string, @Req() req: any) { return this.service.detail(id, req.user); }
  @Post()
  create(@Body() body: { requestId?: string; bloodUnitId?: string; expiresAt?: string }, @Req() req: any) {
    return this.service.create(body, req.user);
  }
  @Patch(':id/release')
  release(@Param('id') id: string, @Req() req: any) { return this.service.release(id, req.user); }
}