-- CreateEnum
CREATE TYPE "FacilityType" AS ENUM ('BLOOD_BANK', 'COLLECTION_CENTER', 'LABORATORY', 'HOSPITAL');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('SUPER_ADMIN', 'FACILITY_ADMIN', 'BLOOD_BANK_OFFICER', 'LAB_TECHNICIAN', 'HOSPITAL_OFFICER', 'LOGISTICS_OFFICER', 'ANALYST');

-- CreateEnum
CREATE TYPE "BloodGroup" AS ENUM ('A_POS', 'A_NEG', 'B_POS', 'B_NEG', 'AB_POS', 'AB_NEG', 'O_POS', 'O_NEG');

-- CreateEnum
CREATE TYPE "ComponentType" AS ENUM ('WHOLE_BLOOD', 'RED_CELLS', 'PLASMA', 'PLATELETS');

-- CreateEnum
CREATE TYPE "DonationStatus" AS ENUM ('COLLECTED', 'PROCESSING', 'TESTED', 'COMPLETED', 'REJECTED');

-- CreateEnum
CREATE TYPE "TestResult" AS ENUM ('PENDING', 'NEGATIVE', 'POSITIVE', 'INDETERMINATE');

-- CreateEnum
CREATE TYPE "BloodUnitStatus" AS ENUM ('QUARANTINED', 'AVAILABLE', 'RESERVED', 'IN_TRANSIT', 'ISSUED', 'TRANSFUSED', 'EXPIRED', 'DISCARDED');

-- CreateEnum
CREATE TYPE "RequestStatus" AS ENUM ('PENDING', 'APPROVED', 'PARTIALLY_FULFILLED', 'FULFILLED', 'CANCELLED', 'REJECTED');

-- CreateEnum
CREATE TYPE "RequestPriority" AS ENUM ('ROUTINE', 'URGENT', 'EMERGENCY');

-- CreateEnum
CREATE TYPE "ReservationStatus" AS ENUM ('ACTIVE', 'RELEASED', 'FULFILLED', 'EXPIRED');

-- CreateEnum
CREATE TYPE "TransferStatus" AS ENUM ('REQUESTED', 'APPROVED', 'IN_TRANSIT', 'RECEIVED', 'CANCELLED');

-- CreateEnum
CREATE TYPE "RecommendationStatus" AS ENUM ('PENDING', 'ACCEPTED', 'REJECTED', 'EXPIRED');

-- CreateTable
CREATE TABLE "Facility" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "type" "FacilityType" NOT NULL,
    "country" TEXT NOT NULL,
    "region" TEXT,
    "district" TEXT,
    "address" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Facility_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "role" "UserRole" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "facilityId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donor" (
    "id" TEXT NOT NULL,
    "donorCode" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3),
    "bloodGroup" "BloodGroup",
    "phone" TEXT,
    "email" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Donor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Donation" (
    "id" TEXT NOT NULL,
    "donationCode" TEXT NOT NULL,
    "donorId" TEXT NOT NULL,
    "facilityId" TEXT NOT NULL,
    "donatedAt" TIMESTAMP(3) NOT NULL,
    "status" "DonationStatus" NOT NULL DEFAULT 'COLLECTED',
    "volumeMl" INTEGER,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Donation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodUnit" (
    "id" TEXT NOT NULL,
    "unitCode" TEXT NOT NULL,
    "donationId" TEXT NOT NULL,
    "facilityId" TEXT NOT NULL,
    "bloodGroup" "BloodGroup" NOT NULL,
    "component" "ComponentType" NOT NULL,
    "status" "BloodUnitStatus" NOT NULL DEFAULT 'QUARANTINED',
    "volumeMl" INTEGER,
    "collectedAt" TIMESTAMP(3) NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "releasedAt" TIMESTAMP(3),
    "issuedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BloodUnit_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LabTest" (
    "id" TEXT NOT NULL,
    "bloodUnitId" TEXT NOT NULL,
    "testName" TEXT NOT NULL,
    "result" "TestResult" NOT NULL DEFAULT 'PENDING',
    "testedAt" TIMESTAMP(3),
    "technicianId" TEXT,
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "LabTest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HospitalRequest" (
    "id" TEXT NOT NULL,
    "requestCode" TEXT NOT NULL,
    "facilityId" TEXT NOT NULL,
    "bloodGroup" "BloodGroup" NOT NULL,
    "component" "ComponentType" NOT NULL,
    "quantity" INTEGER NOT NULL,
    "priority" "RequestPriority" NOT NULL DEFAULT 'ROUTINE',
    "status" "RequestStatus" NOT NULL DEFAULT 'PENDING',
    "requiredBy" TIMESTAMP(3),
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "HospitalRequest_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodReservation" (
    "id" TEXT NOT NULL,
    "requestId" TEXT NOT NULL,
    "bloodUnitId" TEXT NOT NULL,
    "status" "ReservationStatus" NOT NULL DEFAULT 'ACTIVE',
    "reservedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "BloodReservation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodTransfer" (
    "id" TEXT NOT NULL,
    "transferCode" TEXT NOT NULL,
    "bloodUnitId" TEXT NOT NULL,
    "sourceFacilityId" TEXT NOT NULL,
    "destinationFacilityId" TEXT NOT NULL,
    "status" "TransferStatus" NOT NULL DEFAULT 'REQUESTED',
    "requestedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "approvedAt" TIMESTAMP(3),
    "dispatchedAt" TIMESTAMP(3),
    "receivedAt" TIMESTAMP(3),
    "notes" TEXT,

    CONSTRAINT "BloodTransfer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodUnitEvent" (
    "id" TEXT NOT NULL,
    "bloodUnitId" TEXT NOT NULL,
    "eventType" TEXT NOT NULL,
    "description" TEXT,
    "actorId" TEXT,
    "facilityId" TEXT,
    "metadata" JSONB,
    "occurredAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BloodUnitEvent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DemandForecast" (
    "id" TEXT NOT NULL,
    "facilityId" TEXT NOT NULL,
    "bloodGroup" "BloodGroup" NOT NULL,
    "component" "ComponentType" NOT NULL,
    "forecastDate" TIMESTAMP(3) NOT NULL,
    "predictedUnits" INTEGER NOT NULL,
    "modelVersion" TEXT,
    "confidenceScore" DOUBLE PRECISION,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "DemandForecast_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RedistributionRecommendation" (
    "id" TEXT NOT NULL,
    "sourceFacilityId" TEXT NOT NULL,
    "destinationFacilityId" TEXT NOT NULL,
    "bloodGroup" "BloodGroup" NOT NULL,
    "component" "ComponentType" NOT NULL,
    "suggestedUnits" INTEGER NOT NULL,
    "reason" TEXT NOT NULL,
    "confidenceScore" DOUBLE PRECISION,
    "status" "RecommendationStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "reviewedAt" TIMESTAMP(3),
    "reviewedBy" TEXT,

    CONSTRAINT "RedistributionRecommendation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuditLog" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "action" TEXT NOT NULL,
    "entity" TEXT NOT NULL,
    "entityId" TEXT,
    "oldValue" JSONB,
    "newValue" JSONB,
    "ipAddress" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AuditLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Facility_code_key" ON "Facility"("code");

-- CreateIndex
CREATE INDEX "Facility_country_region_idx" ON "Facility"("country", "region");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_facilityId_idx" ON "User"("facilityId");

-- CreateIndex
CREATE UNIQUE INDEX "Donor_donorCode_key" ON "Donor"("donorCode");

-- CreateIndex
CREATE UNIQUE INDEX "Donation_donationCode_key" ON "Donation"("donationCode");

-- CreateIndex
CREATE INDEX "Donation_donorId_donatedAt_idx" ON "Donation"("donorId", "donatedAt");

-- CreateIndex
CREATE INDEX "Donation_facilityId_donatedAt_idx" ON "Donation"("facilityId", "donatedAt");

-- CreateIndex
CREATE UNIQUE INDEX "BloodUnit_unitCode_key" ON "BloodUnit"("unitCode");

-- CreateIndex
CREATE INDEX "BloodUnit_facilityId_status_idx" ON "BloodUnit"("facilityId", "status");

-- CreateIndex
CREATE INDEX "BloodUnit_bloodGroup_component_status_idx" ON "BloodUnit"("bloodGroup", "component", "status");

-- CreateIndex
CREATE INDEX "BloodUnit_expiresAt_idx" ON "BloodUnit"("expiresAt");

-- CreateIndex
CREATE INDEX "BloodUnit_donationId_idx" ON "BloodUnit"("donationId");

-- CreateIndex
CREATE INDEX "LabTest_bloodUnitId_idx" ON "LabTest"("bloodUnitId");

-- CreateIndex
CREATE INDEX "LabTest_result_idx" ON "LabTest"("result");

-- CreateIndex
CREATE UNIQUE INDEX "HospitalRequest_requestCode_key" ON "HospitalRequest"("requestCode");

-- CreateIndex
CREATE INDEX "HospitalRequest_facilityId_status_idx" ON "HospitalRequest"("facilityId", "status");

-- CreateIndex
CREATE INDEX "HospitalRequest_bloodGroup_component_idx" ON "HospitalRequest"("bloodGroup", "component");

-- CreateIndex
CREATE INDEX "BloodReservation_requestId_idx" ON "BloodReservation"("requestId");

-- CreateIndex
CREATE INDEX "BloodReservation_bloodUnitId_status_idx" ON "BloodReservation"("bloodUnitId", "status");

-- CreateIndex
CREATE UNIQUE INDEX "BloodTransfer_transferCode_key" ON "BloodTransfer"("transferCode");

-- CreateIndex
CREATE INDEX "BloodTransfer_sourceFacilityId_status_idx" ON "BloodTransfer"("sourceFacilityId", "status");

-- CreateIndex
CREATE INDEX "BloodTransfer_destinationFacilityId_status_idx" ON "BloodTransfer"("destinationFacilityId", "status");

-- CreateIndex
CREATE INDEX "BloodTransfer_bloodUnitId_idx" ON "BloodTransfer"("bloodUnitId");

-- CreateIndex
CREATE INDEX "BloodUnitEvent_bloodUnitId_occurredAt_idx" ON "BloodUnitEvent"("bloodUnitId", "occurredAt");

-- CreateIndex
CREATE INDEX "DemandForecast_facilityId_forecastDate_idx" ON "DemandForecast"("facilityId", "forecastDate");

-- CreateIndex
CREATE INDEX "DemandForecast_bloodGroup_component_idx" ON "DemandForecast"("bloodGroup", "component");

-- CreateIndex
CREATE INDEX "RedistributionRecommendation_sourceFacilityId_status_idx" ON "RedistributionRecommendation"("sourceFacilityId", "status");

-- CreateIndex
CREATE INDEX "RedistributionRecommendation_destinationFacilityId_status_idx" ON "RedistributionRecommendation"("destinationFacilityId", "status");

-- CreateIndex
CREATE INDEX "AuditLog_userId_createdAt_idx" ON "AuditLog"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "AuditLog_entity_entityId_idx" ON "AuditLog"("entity", "entityId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_donorId_fkey" FOREIGN KEY ("donorId") REFERENCES "Donor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Donation" ADD CONSTRAINT "Donation_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodUnit" ADD CONSTRAINT "BloodUnit_donationId_fkey" FOREIGN KEY ("donationId") REFERENCES "Donation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodUnit" ADD CONSTRAINT "BloodUnit_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LabTest" ADD CONSTRAINT "LabTest_bloodUnitId_fkey" FOREIGN KEY ("bloodUnitId") REFERENCES "BloodUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HospitalRequest" ADD CONSTRAINT "HospitalRequest_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodReservation" ADD CONSTRAINT "BloodReservation_requestId_fkey" FOREIGN KEY ("requestId") REFERENCES "HospitalRequest"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodReservation" ADD CONSTRAINT "BloodReservation_bloodUnitId_fkey" FOREIGN KEY ("bloodUnitId") REFERENCES "BloodUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodTransfer" ADD CONSTRAINT "BloodTransfer_bloodUnitId_fkey" FOREIGN KEY ("bloodUnitId") REFERENCES "BloodUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodTransfer" ADD CONSTRAINT "BloodTransfer_sourceFacilityId_fkey" FOREIGN KEY ("sourceFacilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodTransfer" ADD CONSTRAINT "BloodTransfer_destinationFacilityId_fkey" FOREIGN KEY ("destinationFacilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BloodUnitEvent" ADD CONSTRAINT "BloodUnitEvent_bloodUnitId_fkey" FOREIGN KEY ("bloodUnitId") REFERENCES "BloodUnit"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DemandForecast" ADD CONSTRAINT "DemandForecast_facilityId_fkey" FOREIGN KEY ("facilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RedistributionRecommendation" ADD CONSTRAINT "RedistributionRecommendation_sourceFacilityId_fkey" FOREIGN KEY ("sourceFacilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RedistributionRecommendation" ADD CONSTRAINT "RedistributionRecommendation_destinationFacilityId_fkey" FOREIGN KEY ("destinationFacilityId") REFERENCES "Facility"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
