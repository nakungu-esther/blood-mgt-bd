import { BloodGroup, ComponentType, RequestPriority } from '../../generated/prisma/enums.js';
export declare class CreateHospitalRequestDto {
    requestCode: string;
    facilityId: string;
    bloodGroup: BloodGroup;
    component: ComponentType;
    quantity: number;
    priority: RequestPriority;
    requiredBy?: string;
    notes?: string;
}
