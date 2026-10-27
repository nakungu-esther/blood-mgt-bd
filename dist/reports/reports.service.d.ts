import { PrismaService } from '../prisma/prisma.service.js';
export declare class ReportsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    summary(user: {
        id: string;
        role: string;
        facilityId?: string;
    }): Promise<{
        generatedAt: string;
        scope: string | undefined;
        inventory: number;
        donations: number;
        requests: number;
        unitsByStatus: {
            status: import("../generated/prisma/enums.js").BloodUnitStatus;
            count: number;
        }[];
        requestsByStatus: {
            status: import("../generated/prisma/enums.js").RequestStatus;
            count: number;
        }[];
    }>;
}
