import { BloodGroup } from '../../generated/prisma/enums.js';
export declare class CreateDonorDto {
    donorCode: string;
    firstName: string;
    lastName: string;
    dateOfBirth?: string;
    bloodGroup?: BloodGroup;
    phone?: string;
    email?: string;
}
