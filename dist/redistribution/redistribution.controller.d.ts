import { RedistributionService } from './redistribution.service.js';
export declare class RedistributionController {
    private readonly service;
    constructor(service: RedistributionService);
    list(req: any): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
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
