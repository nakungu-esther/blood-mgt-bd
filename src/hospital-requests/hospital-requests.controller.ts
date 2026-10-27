import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';

import { HospitalRequestsService } from './hospital-requests.service.js';
import { CreateHospitalRequestDto } from './dto/create-hospital-request.dto.js';

@Controller('hospital-requests')
export class HospitalRequestsController {
  constructor(
    private readonly service: HospitalRequestsService,
  ) {}

  @Post()
  create(@Body() dto: CreateHospitalRequestDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get('facility/:facilityId')
  findByFacility(
    @Param('facilityId', ParseUUIDPipe) facilityId: string,
  ) {
    return this.service.findByFacility(facilityId);
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.findOne(id);
  }
}
