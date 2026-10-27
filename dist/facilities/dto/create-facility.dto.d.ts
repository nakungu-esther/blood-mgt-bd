import { FacilityType } from '../../generated/prisma/enums.js';
export declare class CreateFacilityDto {
    name: string;
    code: string;
    type: FacilityType;
    country: string;
    region?: string;
    district?: string;
    address?: string;
    latitude?: number;
    longitude?: number;
    isActive?: boolean;
}
