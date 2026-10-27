import { PrismaService } from '../prisma/prisma.service.js';
export declare class AnalyticsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(user: {
        id: string;
        role: string;
        facilityId?: string;
    }): Promise<{
        bloodUnits: number;
        hospitalRequests: number;
        donations: number;
        inventoryByStatus: {
            status: import("../generated/prisma/enums.js").BloodUnitStatus;
            count: number;
        }[];
    }>;
}
