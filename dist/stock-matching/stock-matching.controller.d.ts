import { StockMatchingService } from './stock-matching.service.js';
export declare class StockMatchingController {
    private readonly service;
    constructor(service: StockMatchingService);
    getAvailability(): Promise<{
        facilityId: string;
        bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
        component: import("../generated/prisma/enums.js").ComponentType;
        availableUnits: number;
    }[]>;
    matchRequest(id: string): Promise<{
        requestId: string;
        requestCode: string;
        bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
        component: import("../generated/prisma/enums.js").ComponentType;
        requestedUnits: number;
        totalAvailable: number;
        shortage: number;
        candidateFacilities: {
            facilityId: string;
            facilityName: string;
            district: string | null;
            region: string | null;
            availableUnits: number;
        }[];
        note: string;
    }>;
}
