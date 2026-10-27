import { Module } from '@nestjs/common';
import { BloodReservationsController } from './blood-reservations.controller.js';
import { BloodReservationsService } from './blood-reservations.service.js';

@Module({
  controllers: [BloodReservationsController],
  providers: [BloodReservationsService]
})
export class BloodReservationsModule {}
