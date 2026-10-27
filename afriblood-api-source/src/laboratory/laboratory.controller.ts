import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';

import { LaboratoryService } from './laboratory.service.js';
import { CreateLabTestDto } from './dto/create-lab-test.dto.js';

@Controller('laboratory')
export class LaboratoryController {
  constructor(
    private readonly laboratoryService: LaboratoryService,
  ) {}

  @Post('tests')
  create(@Body() dto: CreateLabTestDto) {
    return this.laboratoryService.create(dto);
  }

  @Get('tests')
  findAll() {
    return this.laboratoryService.findAll();
  }

  @Get('units/:id/tests')
  findByUnit(@Param('id', ParseUUIDPipe) id: string) {
    return this.laboratoryService.findByUnit(id);
  }
}
