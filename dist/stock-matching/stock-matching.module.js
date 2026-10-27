var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Module } from '@nestjs/common';
import { StockMatchingController } from './stock-matching.controller.js';
import { StockMatchingService } from './stock-matching.service.js';
let StockMatchingModule = class StockMatchingModule {
};
StockMatchingModule = __decorate([
    Module({
        controllers: [StockMatchingController],
        providers: [StockMatchingService],
        exports: [StockMatchingService],
    })
], StockMatchingModule);
export { StockMatchingModule };
//# sourceMappingURL=stock-matching.module.js.map