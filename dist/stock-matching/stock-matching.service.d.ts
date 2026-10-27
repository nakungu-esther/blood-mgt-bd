import { PrismaService } from '../prisma/prisma.service.js';
export declare class StockMatchingService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getAvailability(): Promise<{
        facilityId: string;
        bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
        component: import("../generated/prisma/enums.js").ComponentType;
        availableUnits: number;
    }[]>;
    matchRequest(requestId: string): Promise<{
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
