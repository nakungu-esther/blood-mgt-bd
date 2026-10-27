import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
} from '@nestjs/common';

import { StockMatchingService } from './stock-matching.service.js';

@Controller('stock-matching')
export class StockMatchingController {
  constructor(
    private readonly service: StockMatchingService,
  ) {}

  @Get('availability')
  getAvailability() {
    return this.service.getAvailability();
  }

  @Get('requests/:id')
  matchRequest(@Param('id', ParseUUIDPipe) id: string) {
    return this.service.matchRequest(id);
  }
}
