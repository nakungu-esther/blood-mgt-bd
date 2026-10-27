import { AuthModule } from '../auth/auth.module.js';
import { Module } from '@nestjs/common';
import { RedistributionController } from './redistribution.controller.js';
import { RedistributionService } from './redistribution.service.js';

@Module({
  imports: [AuthModule],
  controllers: [RedistributionController],
  providers: [RedistributionService]
})
export class RedistributionModule {}
