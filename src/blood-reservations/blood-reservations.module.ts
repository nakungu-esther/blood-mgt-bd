import { Module } from '@nestjs/common';
import { AuthModule } from '../auth/auth.module.js';
import { BloodReservationsController } from './blood-reservations.controller.js';
import { BloodReservationsService } from './blood-reservations.service.js';
@Module({
  imports: [AuthModule],
  controllers: [BloodReservationsController],
  providers: [BloodReservationsService],
})
export class BloodReservationsModule {}