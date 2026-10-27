import { UserRole } from '../../generated/prisma/enums.js';
export declare class UpdateUserDto {
    role?: UserRole;
    facilityId?: string;
    isActive?: boolean;
}
