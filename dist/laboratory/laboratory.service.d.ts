import { PrismaService } from '../prisma/prisma.service.js';
import { CreateLabTestDto } from './dto/create-lab-test.dto.js';
export declare class LaboratoryService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: CreateLabTestDto): Promise<{
        id: string;
        createdAt: Date;
        bloodUnitId: string;
        testName: string;
        result: import("../generated/prisma/enums.js").TestResult;
        testedAt: Date | null;
    }>;
    findAll(): import("../generated/prisma/internal/prismaNamespace.js").PrismaPromise<{
        id: string;
        createdAt: Date;
        bloodUnitId: string;
        testName: string;
        result: import("../generated/prisma/enums.js").TestResult;
        testedAt: Date | null;
    }[]>;
    findByUnit(bloodUnitId: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        notes: string | null;
        bloodUnitId: string;
        testName: string;
        result: import("../generated/prisma/enums.js").TestResult;
        testedAt: Date | null;
        technicianId: string | null;
    }[]>;
}
