var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { AuthModule } from '../auth/auth.module.js';
import { TraceabilityController } from './traceability.controller.js';
import { Module } from '@nestjs/common';
import { BloodUnitEventsController } from './blood-unit-events.controller.js';
import { BloodUnitEventsService } from './blood-unit-events.service.js';
let BloodUnitEventsModule = class BloodUnitEventsModule {
};
BloodUnitEventsModule = __decorate([
    Module({
        imports: [AuthModule],
        controllers: [BloodUnitEventsController, TraceabilityController],
        providers: [BloodUnitEventsService],
        exports: [BloodUnitEventsService],
    })
], BloodUnitEventsModule);
export { BloodUnitEventsModule };
//# sourceMappingURL=blood-unit-events.module.js.map