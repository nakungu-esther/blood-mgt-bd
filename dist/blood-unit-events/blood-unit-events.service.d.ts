import { PrismaService } from '../prisma/prisma.service.js';
export declare class BloodUnitEventsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    getUnitHistory(bloodUnitId: string): Promise<{
        bloodUnit: {
            id: string;
            facilityId: string;
            bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
            status: import("../generated/prisma/enums.js").BloodUnitStatus;
            unitCode: string;
            component: import("../generated/prisma/enums.js").ComponentType;
            collectedAt: Date;
            expiresAt: Date;
        };
        eventCount: number;
        events: {
            id: string;
            facilityId: string | null;
            bloodUnitId: string;
            eventType: string;
            description: string | null;
            actorId: string | null;
            metadata: import("@prisma/client/runtime/client").JsonValue | null;
            occurredAt: Date;
        }[];
    }>;
    getRecentEvents(): Promise<{
        id: string;
        facilityId: string | null;
        bloodUnitId: string;
        eventType: string;
        description: string | null;
        actorId: string | null;
        metadata: import("@prisma/client/runtime/client").JsonValue | null;
        occurredAt: Date;
    }[]>;
}
