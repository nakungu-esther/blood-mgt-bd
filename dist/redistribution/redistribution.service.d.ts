import { PrismaService } from '../prisma/prisma.service.js';
export declare class RedistributionService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(user: {
        id: string;
        role: string;
        facilityId?: string;
    }): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
        status: import("../generated/prisma/enums.js").RecommendationStatus;
        component: import("../generated/prisma/enums.js").ComponentType;
        sourceFacilityId: string;
        destinationFacilityId: string;
        confidenceScore: number | null;
        suggestedUnits: number;
        reason: string;
        reviewedAt: Date | null;
    }[]>;
}
