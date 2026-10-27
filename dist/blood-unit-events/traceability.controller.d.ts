import { PrismaService } from '../prisma/prisma.service.js';
export declare class TraceabilityController {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(req: any): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        facilityId: string | null;
        bloodUnitId: string;
        eventType: string;
        description: string | null;
        occurredAt: Date;
        bloodUnit: {
            facilityId: string;
            bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
            status: import("../generated/prisma/enums.js").BloodUnitStatus;
            unitCode: string;
            component: import("../generated/prisma/enums.js").ComponentType;
        };
    }[]>;
}
