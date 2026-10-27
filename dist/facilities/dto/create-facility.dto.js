var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { IsString, IsEnum, IsOptional, IsBoolean, IsNumber, IsNotEmpty, MaxLength, Min, Max, } from 'class-validator';
import { FacilityType } from '../../generated/prisma/enums.js';
export class CreateFacilityDto {
    name;
    code;
    type;
    country;
    region;
    district;
    address;
    latitude;
    longitude;
    isActive;
}
__decorate([
    IsString(),
    IsNotEmpty(),
    MaxLength(150),
    __metadata("design:type", String)
], CreateFacilityDto.prototype, "name", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    MaxLength(30),
    __metadata("design:type", String)
], CreateFacilityDto.prototype, "code", void 0);
__decorate([
    IsEnum(FacilityType),
    __metadata("design:type", String)
], CreateFacilityDto.prototype, "type", void 0);
__decorate([
    IsString(),
    IsNotEmpty(),
    __metadata("design:type", String)
], CreateFacilityDto.prototype, "country", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateFacilityDto.prototype, "region", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateFacilityDto.prototype, "district", void 0);
__decorate([
    IsOptional(),
    IsString(),
    __metadata("design:type", String)
], CreateFacilityDto.prototype, "address", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    Min(-90),
    Max(90),
    __metadata("design:type", Number)
], CreateFacilityDto.prototype, "latitude", void 0);
__decorate([
    IsOptional(),
    IsNumber(),
    Min(-180),
    Max(180),
    __metadata("design:type", Number)
], CreateFacilityDto.prototype, "longitude", void 0);
__decorate([
    IsOptional(),
    IsBoolean(),
    __metadata("design:type", Boolean)
], CreateFacilityDto.prototype, "isActive", void 0);
//# sourceMappingURL=create-facility.dto.js.map