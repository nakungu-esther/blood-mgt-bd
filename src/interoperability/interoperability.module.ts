import { Module } from '@nestjs/common';
import { InteroperabilityController } from './interoperability.controller.js';
import { InteroperabilityService } from './interoperability.service.js';

@Module({
  controllers: [InteroperabilityController],
  providers: [InteroperabilityService]
})
export class InteroperabilityModule {}
