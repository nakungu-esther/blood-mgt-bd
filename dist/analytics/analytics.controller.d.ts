import { AnalyticsService } from './analytics.service.js';
export declare class AnalyticsController {
    private readonly service;
    constructor(service: AnalyticsService);
    list(req: any): Promise<{
        bloodUnits: number;
        hospitalRequests: number;
        donations: number;
        inventoryByStatus: {
            status: import("../generated/prisma/enums.js").BloodUnitStatus;
            count: number;
        }[];
    }>;
}
