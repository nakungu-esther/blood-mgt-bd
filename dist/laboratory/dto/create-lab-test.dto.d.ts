import { TestResult } from '../../generated/prisma/enums.js';
export declare class CreateLabTestDto {
    bloodUnitId: string;
    testName: string;
    result: TestResult;
    testedAt?: string;
    technicianId?: string;
    notes?: string;
}
