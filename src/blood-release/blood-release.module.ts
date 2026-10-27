import { Module } from '@nestjs/common';
import { BloodReleaseController } from './blood-release.controller.js';
import { BloodReleaseService } from './blood-release.service.js';

@Module({
  controllers: [BloodReleaseController],
  providers: [BloodReleaseService]
})
export class BloodReleaseModule {}
