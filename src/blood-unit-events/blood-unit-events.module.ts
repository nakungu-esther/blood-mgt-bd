import { AuthModule } from '../auth/auth.module.js';
import { TraceabilityController } from './traceability.controller.js';
import { Module } from '@nestjs/common';
import { BloodUnitEventsController } from './blood-unit-events.controller.js';
import { BloodUnitEventsService } from './blood-unit-events.service.js';

@Module({
  imports: [AuthModule],
  controllers: [BloodUnitEventsController, TraceabilityController],
  providers: [BloodUnitEventsService],
  exports: [BloodUnitEventsService],
})
export class BloodUnitEventsModule {}

