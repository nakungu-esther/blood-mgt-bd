import * as runtime from "@prisma/client/runtime/client";
export const PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export const PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export const PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export const PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export const PrismaClientValidationError = runtime.PrismaClientValidationError;
export const sql = runtime.sqltag;
export const empty = runtime.empty;
export const join = runtime.join;
export const raw = runtime.raw;
export const Sql = runtime.Sql;
export const Decimal = runtime.Decimal;
export const getExtensionContext = runtime.Extensions.getExtensionContext;
export const prismaVersion = {
    client: "7.10.1",
    engine: "d1b3f377ca835d73fd50954a5e22128b9ebdd6b8"
};
export const NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
export const DbNull = runtime.DbNull;
export const JsonNull = runtime.JsonNull;
export const AnyNull = runtime.AnyNull;
export const ModelName = {
    Facility: 'Facility',
    User: 'User',
    Donor: 'Donor',
    Donation: 'Donation',
    BloodUnit: 'BloodUnit',
    LabTest: 'LabTest',
    HospitalRequest: 'HospitalRequest',
    BloodReservation: 'BloodReservation',
    BloodTransfer: 'BloodTransfer',
    BloodUnitEvent: 'BloodUnitEvent',
    DemandForecast: 'DemandForecast',
    RedistributionRecommendation: 'RedistributionRecommendation',
    AuditLog: 'AuditLog',
    Notification: 'Notification'
};
export const TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
export const FacilityScalarFieldEnum = {
    id: 'id',
    name: 'name',
    code: 'code',
    type: 'type',
    country: 'country',
    region: 'region',
    district: 'district',
    address: 'address',
    latitude: 'latitude',
    longitude: 'longitude',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const UserScalarFieldEnum = {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    facilityId: 'facilityId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const DonorScalarFieldEnum = {
    id: 'id',
    donorCode: 'donorCode',
    firstName: 'firstName',
    lastName: 'lastName',
    dateOfBirth: 'dateOfBirth',
    bloodGroup: 'bloodGroup',
    phone: 'phone',
    email: 'email',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const DonationScalarFieldEnum = {
    id: 'id',
    donationCode: 'donationCode',
    donorId: 'donorId',
    facilityId: 'facilityId',
    donatedAt: 'donatedAt',
    status: 'status',
    volumeMl: 'volumeMl',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const BloodUnitScalarFieldEnum = {
    id: 'id',
    unitCode: 'unitCode',
    donationId: 'donationId',
    facilityId: 'facilityId',
    bloodGroup: 'bloodGroup',
    component: 'component',
    status: 'status',
    volumeMl: 'volumeMl',
    collectedAt: 'collectedAt',
    expiresAt: 'expiresAt',
    releasedAt: 'releasedAt',
    issuedAt: 'issuedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const LabTestScalarFieldEnum = {
    id: 'id',
    bloodUnitId: 'bloodUnitId',
    testName: 'testName',
    result: 'result',
    testedAt: 'testedAt',
    technicianId: 'technicianId',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const HospitalRequestScalarFieldEnum = {
    id: 'id',
    requestCode: 'requestCode',
    facilityId: 'facilityId',
    bloodGroup: 'bloodGroup',
    component: 'component',
    quantity: 'quantity',
    priority: 'priority',
    status: 'status',
    requiredBy: 'requiredBy',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
export const BloodReservationScalarFieldEnum = {
    id: 'id',
    requestId: 'requestId',
    bloodUnitId: 'bloodUnitId',
    status: 'status',
    reservedAt: 'reservedAt',
    expiresAt: 'expiresAt'
};
export const BloodTransferScalarFieldEnum = {
    id: 'id',
    transferCode: 'transferCode',
    bloodUnitId: 'bloodUnitId',
    sourceFacilityId: 'sourceFacilityId',
    destinationFacilityId: 'destinationFacilityId',
    status: 'status',
    requestedAt: 'requestedAt',
    approvedAt: 'approvedAt',
    dispatchedAt: 'dispatchedAt',
    receivedAt: 'receivedAt',
    notes: 'notes'
};
export const BloodUnitEventScalarFieldEnum = {
    id: 'id',
    bloodUnitId: 'bloodUnitId',
    eventType: 'eventType',
    description: 'description',
    actorId: 'actorId',
    facilityId: 'facilityId',
    metadata: 'metadata',
    occurredAt: 'occurredAt'
};
export const DemandForecastScalarFieldEnum = {
    id: 'id',
    facilityId: 'facilityId',
    bloodGroup: 'bloodGroup',
    component: 'component',
    forecastDate: 'forecastDate',
    predictedUnits: 'predictedUnits',
    modelVersion: 'modelVersion',
    confidenceScore: 'confidenceScore',
    createdAt: 'createdAt'
};
export const RedistributionRecommendationScalarFieldEnum = {
    id: 'id',
    sourceFacilityId: 'sourceFacilityId',
    destinationFacilityId: 'destinationFacilityId',
    bloodGroup: 'bloodGroup',
    component: 'component',
    suggestedUnits: 'suggestedUnits',
    reason: 'reason',
    confidenceScore: 'confidenceScore',
    status: 'status',
    createdAt: 'createdAt',
    reviewedAt: 'reviewedAt',
    reviewedBy: 'reviewedBy'
};
export const AuditLogScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    action: 'action',
    entity: 'entity',
    entityId: 'entityId',
    oldValue: 'oldValue',
    newValue: 'newValue',
    ipAddress: 'ipAddress',
    createdAt: 'createdAt'
};
export const NotificationScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    title: 'title',
    message: 'message',
    category: 'category',
    isRead: 'isRead',
    readAt: 'readAt',
    createdAt: 'createdAt'
};
export const SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
export const NullableJsonNullValueInput = {
    DbNull: DbNull,
    JsonNull: JsonNull
};
export const QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
export const NullsOrder = {
    first: 'first',
    last: 'last'
};
export const JsonNullValueFilter = {
    DbNull: DbNull,
    JsonNull: JsonNull,
    AnyNull: AnyNull
};
export const defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map