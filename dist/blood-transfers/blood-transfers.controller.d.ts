import { BloodTransfersService } from './blood-transfers.service.js';
import { CreateBloodTransferDto } from './dto/create-blood-transfer.dto.js';
export declare class BloodTransfersController {
    private readonly service;
    constructor(service: BloodTransfersService);
    create(dto: CreateBloodTransferDto): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").TransferStatus;
        notes: string | null;
        bloodUnitId: string;
        transferCode: string;
        sourceFacilityId: string;
        destinationFacilityId: string;
        requestedAt: Date;
        approvedAt: Date | null;
        dispatchedAt: Date | null;
        receivedAt: Date | null;
    }>;
    findAll(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        status: import("../generated/prisma/enums.js").TransferStatus;
        notes: string | null;
        bloodUnitId: string;
        transferCode: string;
        sourceFacilityId: string;
        destinationFacilityId: string;
        requestedAt: Date;
        approvedAt: Date | null;
        dispatchedAt: Date | null;
        receivedAt: Date | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").TransferStatus;
        notes: string | null;
        bloodUnitId: string;
        transferCode: string;
        sourceFacilityId: string;
        destinationFacilityId: string;
        requestedAt: Date;
        approvedAt: Date | null;
        dispatchedAt: Date | null;
        receivedAt: Date | null;
    }>;
    approve(id: string): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").TransferStatus;
        notes: string | null;
        bloodUnitId: string;
        transferCode: string;
        sourceFacilityId: string;
        destinationFacilityId: string;
        requestedAt: Date;
        approvedAt: Date | null;
        dispatchedAt: Date | null;
        receivedAt: Date | null;
    }>;
    dispatch(id: string): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").TransferStatus;
        notes: string | null;
        bloodUnitId: string;
        transferCode: string;
        sourceFacilityId: string;
        destinationFacilityId: string;
        requestedAt: Date;
        approvedAt: Date | null;
        dispatchedAt: Date | null;
        receivedAt: Date | null;
    }>;
    receive(id: string): Promise<{
        id: string;
        status: import("../generated/prisma/enums.js").TransferStatus;
        notes: string | null;
        bloodUnitId: string;
        transferCode: string;
        sourceFacilityId: string;
        destinationFacilityId: string;
        requestedAt: Date;
        approvedAt: Date | null;
        dispatchedAt: Date | null;
        receivedAt: Date | null;
    }>;
}
