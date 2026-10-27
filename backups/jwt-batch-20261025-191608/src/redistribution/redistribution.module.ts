import { Module } from '@nestjs/common';
import { RedistributionController } from './redistribution.controller.js';
import { RedistributionService } from './redistribution.service.js';

@Module({
  controllers: [RedistributionController],
  providers: [RedistributionService]
})
export class RedistributionModule {}
