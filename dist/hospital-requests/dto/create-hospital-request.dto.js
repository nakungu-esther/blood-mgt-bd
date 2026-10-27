var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsUUID, IsString, IsNotEmpty, IsEnum, IsInt, IsOptional, IsDateString, Min, Max, MaxLength, } from 'class-validator';
import { BloodGroup, ComponentType, RequestPriority, } from '../../generated/prisma/enums.js';
export class CreateHospitalRequestDto {
    requestCode;
    facilityId;
    bloodGroup;
    component;
    quantity;
    priority;
    requiredBy;
    notes;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    MaxLength(50),
    __metadata("design:type", String)
], CreateHospitalRequestDto.prototype, "requestCode", void 0);
__decorate([
    IsUUID(),
    __metadata("design:type", String)
], CreateHospitalRequestDto.prototype, "facilityId", void 0);
__decorate([
    IsEnum(BloodGroup),
    __metadata("design:type", String)
], CreateHospitalRequestDto.prototype, "bloodGroup", void 0);
__decorate([
    IsEnum(ComponentType),
    __metadata("design:type", String)
], CreateHospitalRequestDto.prototype, "component", void 0);
__decorate([
    IsInt(),
    Min(1),
    Max(100),
    __metadata("design:type", Number)
], CreateHospitalRequestDto.prototype, "quantity", void 0);
__decorate([
    IsEnum(RequestPriority),
    __metadata("design:type", String)
], CreateHospitalRequestDto.prototype, "priority", void 0);
__decorate([
    IsOptional(),
    IsDateString(),
    __metadata("design:type", String)
], CreateHospitalRequestDto.prototype, "requiredBy", void 0);
__decorate([
    IsOptional(),
    IsString(),
    MaxLength(1000),
    __metadata("design:type", String)
], CreateHospitalRequestDto.prototype, "notes", void 0);
//# sourceMappingURL=create-hospital-request.dto.js.map