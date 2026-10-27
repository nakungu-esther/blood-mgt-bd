import { DonationsService } from './donations.service.js';
import { CreateDonationDto } from './dto/create-donation.dto.js';
export declare class DonationsController {
    private readonly donationsService;
    constructor(donationsService: DonationsService);
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
    findAll(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
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
