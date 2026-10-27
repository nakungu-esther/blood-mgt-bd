import {
  IsEnum,
  IsOptional,
  IsUUID,
  IsBoolean,
} from 'class-validator';

import { UserRole } from '../../generated/prisma/enums.js';

export class UpdateUserDto {
  @IsOptional()
  @IsEnum(UserRole)
  role?: UserRole;

  @IsOptional()
  @IsUUID()
  facilityId?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
