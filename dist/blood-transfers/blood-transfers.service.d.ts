import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
import { TransferStatus } from '../generated/prisma/enums.js';
import { CreateBloodTransferDto } from './dto/create-blood-transfer.dto.js';
export declare class BloodTransfersService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateBloodTransferDto): Promise<{
        id: string;
        status: TransferStatus;
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
    findAll(): Prisma.PrismaPromise<{
        id: string;
        status: TransferStatus;
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
        status: TransferStatus;
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
    private changeStatus;
    approve(id: string): Promise<{
        id: string;
        status: TransferStatus;
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
        status: TransferStatus;
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
        status: TransferStatus;
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
