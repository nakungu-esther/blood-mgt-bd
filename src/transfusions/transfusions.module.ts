import { Module } from '@nestjs/common';
import { TransfusionsController } from './transfusions.controller.js';
import { TransfusionsService } from './transfusions.service.js';

@Module({
  controllers: [TransfusionsController],
  providers: [TransfusionsService]
})
export class TransfusionsModule {}
