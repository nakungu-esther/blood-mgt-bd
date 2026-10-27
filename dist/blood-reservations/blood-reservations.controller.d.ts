import { BloodReservationsService } from './blood-reservations.service.js';
export declare class BloodReservationsController {
    private readonly service;
    constructor(service: BloodReservationsService);
    list(req: any): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<({
        bloodUnit: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            facilityId: string;
            bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
            status: import("../generated/prisma/enums.js").BloodUnitStatus;
            volumeMl: number | null;
            unitCode: string;
            donationId: string;
            component: import("../generated/prisma/enums.js").ComponentType;
            collectedAt: Date;
            expiresAt: Date;
            releasedAt: Date | null;
            issuedAt: Date | null;
        };
        request: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            facilityId: string;
            bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
            status: import("../generated/prisma/enums.js").RequestStatus;
            notes: string | null;
            component: import("../generated/prisma/enums.js").ComponentType;
            requestCode: string;
            quantity: number;
            priority: import("../generated/prisma/enums.js").RequestPriority;
            requiredBy: Date | null;
        };
    } & {
        id: string;
        status: import("../generated/prisma/enums.js").ReservationStatus;
        expiresAt: Date | null;
        bloodUnitId: string;
        requestId: string;
        reservedAt: Date;
    })[]>;
    detail(id: string, req: any): Promise<{
        bloodUnit: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            facilityId: string;
            bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
            status: import("../generated/prisma/enums.js").BloodUnitStatus;
            volumeMl: number | null;
            unitCode: string;
            donationId: string;
            component: import("../generated/prisma/enums.js").ComponentType;
            collectedAt: Date;
            expiresAt: Date;
            releasedAt: Date | null;
            issuedAt: Date | null;
        };
        request: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            facilityId: string;
            bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
            status: import("../generated/prisma/enums.js").RequestStatus;
            notes: string | null;
            component: import("../generated/prisma/enums.js").ComponentType;
            requestCode: string;
            quantity: number;
            priority: import("../generated/prisma/enums.js").RequestPriority;
            requiredBy: Date | null;
        };
    } & {
        id: string;
        status: import("../generated/prisma/enums.js").ReservationStatus;
        expiresAt: Date | null;
        bloodUnitId: string;
        requestId: string;
        reservedAt: Date;
    }>;
    create(body: {
        requestId?: string;
        bloodUnitId?: string;
        expiresAt?: string;
    }, req: any): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").ReservationStatus;
        expiresAt: Date | null;
        bloodUnitId: string;
        requestId: string;
        reservedAt: Date;
    }>;
    release(id: string, req: any): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").ReservationStatus;
        expiresAt: Date | null;
        bloodUnitId: string;
        requestId: string;
        reservedAt: Date;
    } | null>;
}
