import { HospitalRequestsService } from './hospital-requests.service.js';
import { CreateHospitalRequestDto } from './dto/create-hospital-request.dto.js';
export declare class HospitalRequestsController {
    private readonly service;
    constructor(service: HospitalRequestsService);
    create(dto: CreateHospitalRequestDto): Promise<{
        id: string;
        createdAt: Date;
        facilityId: string;
        bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
        status: import("../generated/prisma/enums.js").RequestStatus;
        component: import("../generated/prisma/enums.js").ComponentType;
        requestCode: string;
        quantity: number;
        priority: import("../generated/prisma/enums.js").RequestPriority;
        requiredBy: Date | null;
    }>;
    findAll(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        facilityId: string;
        bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
        status: import("../generated/prisma/enums.js").RequestStatus;
        component: import("../generated/prisma/enums.js").ComponentType;
        requestCode: string;
        quantity: number;
        priority: import("../generated/prisma/enums.js").RequestPriority;
        requiredBy: Date | null;
    }[]>;
    findByFacility(facilityId: string): Promise<{
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
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        facilityId: string;
        bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
        status: import("../generated/prisma/enums.js").RequestStatus;
        component: import("../generated/prisma/enums.js").ComponentType;
        requestCode: string;
        quantity: number;
        priority: import("../generated/prisma/enums.js").RequestPriority;
        requiredBy: Date | null;
    }>;
}
