import { PrismaService } from '../prisma/prisma.service.js';
export declare class DemandForecastingService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(user: {
        id: string;
        role: string;
        facilityId?: string;
    }): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        facilityId: string;
        bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
        component: import("../generated/prisma/enums.js").ComponentType;
        forecastDate: Date;
        predictedUnits: number;
        modelVersion: string | null;
        confidenceScore: number | null;
    }[]>;
}
