var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsNotEmpty, IsUUID, IsEnum, IsDateString, IsOptional, IsInt, Min, Max, MaxLength, } from 'class-validator';
import { BloodGroup, ComponentType, } from '../../generated/prisma/enums.js';
export class CreateBloodUnitDto {
    unitCode;
    donationId;
    facilityId;
    bloodGroup;
    component;
    collectedAt;
    expiresAt;
    volumeMl;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    MaxLength(50),
    __metadata("design:type", String)
], CreateBloodUnitDto.prototype, "unitCode", void 0);
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], CreateBloodUnitDto.prototype, "donationId", void 0);
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], CreateBloodUnitDto.prototype, "facilityId", void 0);
__decorate([
    IsEnum(BloodGroup),
    __metadata("design:type", String)
], CreateBloodUnitDto.prototype, "bloodGroup", void 0);
__decorate([
    IsEnum(ComponentType),
    __metadata("design:type", String)
], CreateBloodUnitDto.prototype, "component", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], CreateBloodUnitDto.prototype, "collectedAt", void 0);
__decorate([
    IsDateString(),
    __metadata("design:type", String)
], CreateBloodUnitDto.prototype, "expiresAt", void 0);
__decorate([
    IsOptional(),
    IsInt(),
    Min(1),
    Max(1000),
    __metadata("design:type", Number)
], CreateBloodUnitDto.prototype, "volumeMl", void 0);
//# sourceMappingURL=create-blood-unit.dto.js.map