import { ReportsService } from './reports.service.js';
export declare class ReportsController {
    private readonly service;
    constructor(service: ReportsService);
    summary(req: any): Promise<{
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
