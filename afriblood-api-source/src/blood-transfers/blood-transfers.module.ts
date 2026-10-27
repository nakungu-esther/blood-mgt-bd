import { Module } from '@nestjs/common';
import { BloodTransfersController } from './blood-transfers.controller.js';
import { BloodTransfersService } from './blood-transfers.service.js';

@Module({
  controllers: [BloodTransfersController],
  providers: [BloodTransfersService],
  exports: [BloodTransfersService],
})
export class BloodTransfersModule {}
