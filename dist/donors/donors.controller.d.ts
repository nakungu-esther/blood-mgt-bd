import { DonorsService } from '../donors/donors.service.js';
import { CreateDonorDto } from './dto/create-donor.dto.js';
import { UpdateDonorDto } from './dto/update-donor.dto.js';
export declare class DonorsController {
    private readonly donorsService;
    constructor(donorsService: DonorsService);
    create(dto: CreateDonorDto): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        email: string | null;
        donorCode: string;
        dateOfBirth: Date | null;
        bloodGroup: import("../generated/prisma/enums.js").BloodGroup | null;
        phone: string | null;
    }>;
    findAll(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        firstName: string;
        lastName: string;
        donorCode: string;
        bloodGroup: import("../generated/prisma/enums.js").BloodGroup | null;
    }[]>;
    findOne(id: string): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        firstName: string;
        lastName: string;
        donorCode: string;
        bloodGroup: import("../generated/prisma/enums.js").BloodGroup | null;
    }>;
    update(id: string, dto: UpdateDonorDto): Promise<{
        id: string;
        isActive: boolean;
        updatedAt: Date;
        firstName: string;
        lastName: string;
        donorCode: string;
        bloodGroup: import("../generated/prisma/enums.js").BloodGroup | null;
    }>;
    remove(id: string): Promise<{
        id: string;
        isActive: boolean;
        donorCode: string;
    }>;
}
