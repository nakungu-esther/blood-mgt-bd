import { BloodGroup, ComponentType } from '../../generated/prisma/enums.js';
export declare class CreateBloodUnitDto {
    unitCode: string;
    donationId: string;
    facilityId: string;
    bloodGroup: BloodGroup;
    component: ComponentType;
    collectedAt: string;
    expiresAt: string;
    volumeMl?: number;
}
