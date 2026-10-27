import { AuthModule } from '../auth/auth.module.js';
import { Module } from '@nestjs/common';
import { ReportsController } from './reports.controller.js';
import { ReportsService } from './reports.service.js';

@Module({
  imports: [AuthModule],
  controllers: [ReportsController],
  providers: [ReportsService]
})
export class ReportsModule {}
