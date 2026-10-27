import {
  IsString,
  IsNotEmpty,
  IsUUID,
  IsOptional,
  MaxLength,
} from 'class-validator';

export class CreateBloodTransferDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(60)
  transferCode!: string;

  @IsUUID()
  bloodUnitId!: string;

  @IsUUID()
  sourceFacilityId!: string;

  @IsUUID()
  destinationFacilityId!: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes?: string;
}
