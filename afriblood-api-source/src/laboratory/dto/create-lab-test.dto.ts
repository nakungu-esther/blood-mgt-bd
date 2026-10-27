import {
  IsUUID,
  IsString,
  IsNotEmpty,
  IsEnum,
  IsOptional,
  IsDateString,
  MaxLength,
} from 'class-validator';

import { TestResult } from '../../generated/prisma/enums.js';

export class CreateLabTestDto {
  @IsUUID()
  bloodUnitId!: string;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  testName!: string;

  @IsEnum(TestResult)
  result!: TestResult;

  @IsOptional()
  @IsDateString()
  testedAt?: string;

  @IsOptional()
  @IsUUID()
  technicianId?: string;

  @IsOptional()
  @IsString()
  @MaxLength(1000)
  notes?: string;
}
