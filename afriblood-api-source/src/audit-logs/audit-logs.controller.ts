import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';

import { AuditLogsService } from './audit-logs.service.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { UserRole } from '../generated/prisma/enums.js';

@Controller('audit-logs')
@Roles(UserRole.SUPER_ADMIN)
export class AuditLogsController {
  constructor(private readonly service: AuditLogsService) {}

  @Get()
  findRecent() {
    return this.service.findRecent();
  }

  @Get('user/:userId')
  findByUser(@Param('userId', ParseUUIDPipe) userId: string) {
    return this.service.findByUser(userId);
  }

  @Get('entity/:entity/:entityId')
  findByEntity(
    @Param('entity') entity: string,
    @Param('entityId', ParseUUIDPipe) entityId: string,
  ) {
    return this.service.findByEntity(entity, entityId);
  }
}
