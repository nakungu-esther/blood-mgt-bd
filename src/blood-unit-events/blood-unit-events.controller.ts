import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';

import { BloodUnitEventsService } from './blood-unit-events.service.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { UserRole } from '../generated/prisma/enums.js';

@Controller('blood-unit-events')
@Roles(UserRole.SUPER_ADMIN)
export class BloodUnitEventsController {
  constructor(
    private readonly service: BloodUnitEventsService,
  ) {}

  @Get()
  getRecentEvents() {
    return this.service.getRecentEvents();
  }

  @Get('unit/:bloodUnitId')
  getUnitHistory(
    @Param('bloodUnitId', ParseUUIDPipe) bloodUnitId: string,
  ) {
    return this.service.getUnitHistory(bloodUnitId);
  }
}
