import { Module } from '@nestjs/common';
import { BloodUnitEventsController } from './blood-unit-events.controller.js';
import { BloodUnitEventsService } from './blood-unit-events.service.js';

@Module({
  controllers: [BloodUnitEventsController],
  providers: [BloodUnitEventsService],
  exports: [BloodUnitEventsService],
})
export class BloodUnitEventsModule {}
