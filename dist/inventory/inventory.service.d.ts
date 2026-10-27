import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
import { CreateBloodUnitDto } from './dto/create-blood-unit.dto.js';
export declare class InventoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateBloodUnitDto): Promise<{
        id: string;
        facilityId: string;
        bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
        status: import("../generated/prisma/enums.js").BloodUnitStatus;
        unitCode: string;
        donationId: string;
        component: import("../generated/prisma/enums.js").ComponentType;
        expiresAt: Date;
    }>;
    findAll(): Prisma.PrismaPromise<{
        id: string;
        facilityId: string;
        bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
        status: import("../generated/prisma/enums.js").BloodUnitStatus;
        unitCode: string;
        donationId: string;
        component: import("../generated/prisma/enums.js").ComponentType;
        collectedAt: Date;
        expiresAt: Date;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        facilityId: string;
        bloodGroup: import("../generated/prisma/enums.js").BloodGroup;
        status: import("../generated/prisma/enums.js").BloodUnitStatus;
        unitCode: string;
        donationId: string;
        component: import("../generated/prisma/enums.js").ComponentType;
        collectedAt: Date;
        expiresAt: Date;
    }>;
}
