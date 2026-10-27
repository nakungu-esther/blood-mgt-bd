import {
  IsString,
  IsNotEmpty,
  IsUUID,
  IsEnum,
  IsDateString,
  IsOptional,
  IsInt,
  Min,
  Max,
  MaxLength,
} from 'class-validator';

import {
  BloodGroup,
  ComponentType,
} from '../../generated/prisma/enums.js';

export class CreateBloodUnitDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  unitCode!: string;

  @IsUUID()
  donationId!: string;

  @IsUUID()
  facilityId!: string;

  @IsEnum(BloodGroup)
  bloodGroup!: BloodGroup;

  @IsEnum(ComponentType)
  component!: ComponentType;

  @IsDateString()
  collectedAt!: string;

  @IsDateString()
  expiresAt!: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(1000)
  volumeMl?: number;
}
