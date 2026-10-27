import { UserRole } from '../../generated/prisma/enums.js';
export declare class CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    role: UserRole;
    facilityId?: string;
}
