var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { PrismaModule } from './prisma/prisma.module.js';
import { FacilitiesModule } from './facilities/facilities.module.js';
import { DonorsModule } from './donors/donors.module.js';
import { DonationsModule } from './donations/donations.module.js';
import { InventoryModule } from './inventory/inventory.module.js';
import { LaboratoryModule } from './laboratory/laboratory.module.js';
import { HospitalRequestsModule } from './hospital-requests/hospital-requests.module.js';
import { StockMatchingModule } from './stock-matching/stock-matching.module.js';
import { AuthModule } from './auth/auth.module.js';
import { UsersModule } from './users/users.module.js';
import { RolesModule } from './roles/roles.module.js';
import { BloodTransfersModule } from './blood-transfers/blood-transfers.module.js';
import { BloodReservationsModule } from './blood-reservations/blood-reservations.module.js';
import { BloodReleaseModule } from './blood-release/blood-release.module.js';
import { TransfusionsModule } from './transfusions/transfusions.module.js';
import { BloodUnitEventsModule } from './blood-unit-events/blood-unit-events.module.js';
import { AuditLogsModule } from './audit-logs/audit-logs.module.js';
import { DemandForecastingModule } from './demand-forecasting/demand-forecasting.module.js';
import { RedistributionModule } from './redistribution/redistribution.module.js';
import { DashboardModule } from './dashboard/dashboard.module.js';
import { AnalyticsModule } from './analytics/analytics.module.js';
import { ReportsModule } from './reports/reports.module.js';
import { NotificationsModule } from './notifications/notifications.module.js';
import { InteroperabilityModule } from './interoperability/interoperability.module.js';
import { HealthModule } from './health/health.module.js';
let AppModule = class AppModule {
};
AppModule = __decorate([
    Module({
        imports: [
            ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
            }),
            PrismaModule,
            FacilitiesModule,
            DonorsModule,
            DonationsModule,
            InventoryModule,
            LaboratoryModule,
            HospitalRequestsModule,
            StockMatchingModule,
            AuthModule,
            UsersModule,
            RolesModule,
            BloodTransfersModule,
            BloodReservationsModule,
            BloodReleaseModule,
            TransfusionsModule,
            BloodUnitEventsModule,
            AuditLogsModule,
            DemandForecastingModule,
            RedistributionModule,
            DashboardModule,
            AnalyticsModule,
            ReportsModule,
            NotificationsModule,
            InteroperabilityModule,
            HealthModule,
        ],
        controllers: [AppController],
        providers: [AppService],
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map