import { DemandForecastingService } from './demand-forecasting.service.js';
export declare class DemandForecastingController {
    private readonly service;
    constructor(service: DemandForecastingService);
    list(req: any): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
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
