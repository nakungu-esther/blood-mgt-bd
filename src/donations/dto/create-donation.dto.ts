import {
  IsUUID,
  IsString,
  IsNotEmpty,
  IsDateString,
  IsInt,
  IsOptional,
  Min,
  Max,
  MaxLength,
} from 'class-validator';

export class CreateDonationDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  donationCode: string;

  @IsUUID()
  donorId: string;

  @IsUUID()
  facilityId: string;

  @IsDateString()
  donatedAt: string;

  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(1000)
  volumeMl?: number;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes?: string;
}
