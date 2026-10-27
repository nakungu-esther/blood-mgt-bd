import {
  IsUUID,
  IsString,
  IsNotEmpty,
  IsEnum,
  IsInt,
  IsOptional,
  IsDateString,
  Min,
  Max,
  MaxLength,
} from 'class-validator';

import {
  BloodGroup,
  ComponentType,
  RequestPriority,
} from '../../generated/prisma/enums.js';

export class CreateHospitalRequestDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  requestCode!: string;

  @IsUUID()
  facilityId!: string;

  @IsEnum(BloodGroup)
  bloodGroup!: BloodGroup;

  @IsEnum(ComponentType)
  component!: ComponentType;

  @IsInt()
  @Min(1)
  @Max(100)
  quantity!: number;

  @IsEnum(RequestPriority)
  priority!: RequestPriority;

  @IsOptional()
  @IsDateString()
  requiredBy?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes?: string;
}
