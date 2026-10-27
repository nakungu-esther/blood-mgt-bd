import { Module } from '@nestjs/common';
import { HospitalRequestsController } from './hospital-requests.controller.js';
import { HospitalRequestsService } from './hospital-requests.service.js';

@Module({
  controllers: [HospitalRequestsController],
  providers: [HospitalRequestsService],
  exports: [HospitalRequestsService],
})
export class HospitalRequestsModule {}
