import { LaboratoryService } from './laboratory.service.js';
import { CreateLabTestDto } from './dto/create-lab-test.dto.js';
export declare class LaboratoryController {
    private readonly laboratoryService;
    constructor(laboratoryService: LaboratoryService);
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
    findByUnit(id: string): Promise<{
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
