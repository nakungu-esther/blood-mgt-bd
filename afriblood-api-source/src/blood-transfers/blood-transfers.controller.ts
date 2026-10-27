import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';

import { BloodTransfersService } from './blood-transfers.service.js';
import { CreateBloodTransferDto } from './dto/create-blood-transfer.dto.js';
import { Roles } from '../auth/decorators/roles.decorator.js';
import { UserRole } from '../generated/prisma/enums.js';

@Controller('blood-transfers')
@Roles(UserRole.SUPER_ADMIN)
export class BloodTransfersController {
  constructor(
    private readonly service: BloodTransfersService,
  ) {}

  @Post()
  create(@Body() dto: CreateBloodTransferDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }

  @Post(':id/approve')
  approve(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.approve(id);
  }

  @Post(':id/dispatch')
  dispatch(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.dispatch(id);
  }

  @Post(':id/receive')
  receive(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.receive(id);
  }
}
