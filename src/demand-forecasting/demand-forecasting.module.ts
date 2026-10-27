import { AuthModule } from '../auth/auth.module.js';
import { Module } from '@nestjs/common';
import { DemandForecastingController } from './demand-forecasting.controller.js';
import { DemandForecastingService } from './demand-forecasting.service.js';

@Module({
  imports: [AuthModule],
  controllers: [DemandForecastingController],
  providers: [DemandForecastingService]
})
export class DemandForecastingModule {}
