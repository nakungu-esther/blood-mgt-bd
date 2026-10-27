import { Module } from '@nestjs/common';
import { StockMatchingController } from './stock-matching.controller.js';
import { StockMatchingService } from './stock-matching.service.js';

@Module({
  controllers: [StockMatchingController],
  providers: [StockMatchingService],
  exports: [StockMatchingService],
})
export class StockMatchingModule {}
