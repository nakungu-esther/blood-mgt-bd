import { PrismaService } from '../prisma/prisma.service.js';
import { Prisma } from '../generated/prisma/client.js';
import { CreateDonationDto } from './dto/create-donation.dto.js';
export declare class DonationsService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateDonationDto): Promise<{
        id: string;
        createdAt: Date;
        facilityId: string;
        donationCode: string;
        donorId: string;
        donatedAt: Date;
        status: import("../generated/prisma/enums.js").DonationStatus;
        volumeMl: number | null;
    }>;
    findAll(): Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        facilityId: string;
        donationCode: string;
        donorId: string;
        donatedAt: Date;
        status: import("../generated/prisma/enums.js").DonationStatus;
        volumeMl: number | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        createdAt: Date;
        facilityId: string;
        donationCode: string;
        donorId: string;
        donatedAt: Date;
        status: import("../generated/prisma/enums.js").DonationStatus;
        volumeMl: number | null;
    }>;
}
