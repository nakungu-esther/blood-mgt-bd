import { InventoryService } from './inventory.service.js';
import { CreateBloodUnitDto } from './dto/create-blood-unit.dto.js';
export declare class InventoryController {
    private readonly inventoryService;
    constructor(inventoryService: InventoryService);
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
    findAll(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
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
