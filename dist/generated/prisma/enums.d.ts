export declare const FacilityType: {
    readonly BLOOD_BANK: "BLOOD_BANK";
    readonly COLLECTION_CENTER: "COLLECTION_CENTER";
    readonly LABORATORY: "LABORATORY";
    readonly HOSPITAL: "HOSPITAL";
};
export type FacilityType = (typeof FacilityType)[keyof typeof FacilityType];
export declare const UserRole: {
    readonly SUPER_ADMIN: "SUPER_ADMIN";
    readonly FACILITY_ADMIN: "FACILITY_ADMIN";
    readonly BLOOD_BANK_OFFICER: "BLOOD_BANK_OFFICER";
    readonly LAB_TECHNICIAN: "LAB_TECHNICIAN";
    readonly HOSPITAL_OFFICER: "HOSPITAL_OFFICER";
    readonly LOGISTICS_OFFICER: "LOGISTICS_OFFICER";
    readonly ANALYST: "ANALYST";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const BloodGroup: {
    readonly A_POS: "A_POS";
    readonly A_NEG: "A_NEG";
    readonly B_POS: "B_POS";
    readonly B_NEG: "B_NEG";
    readonly AB_POS: "AB_POS";
    readonly AB_NEG: "AB_NEG";
    readonly O_POS: "O_POS";
    readonly O_NEG: "O_NEG";
};
export type BloodGroup = (typeof BloodGroup)[keyof typeof BloodGroup];
export declare const ComponentType: {
    readonly WHOLE_BLOOD: "WHOLE_BLOOD";
    readonly RED_CELLS: "RED_CELLS";
    readonly PLASMA: "PLASMA";
    readonly PLATELETS: "PLATELETS";
};
export type ComponentType = (typeof ComponentType)[keyof typeof ComponentType];
export declare const DonationStatus: {
    readonly COLLECTED: "COLLECTED";
    readonly PROCESSING: "PROCESSING";
    readonly TESTED: "TESTED";
    readonly COMPLETED: "COMPLETED";
    readonly REJECTED: "REJECTED";
};
export type DonationStatus = (typeof DonationStatus)[keyof typeof DonationStatus];
export declare const TestResult: {
    readonly PENDING: "PENDING";
    readonly NEGATIVE: "NEGATIVE";
    readonly POSITIVE: "POSITIVE";
    readonly INDETERMINATE: "INDETERMINATE";
};
export type TestResult = (typeof TestResult)[keyof typeof TestResult];
export declare const BloodUnitStatus: {
    readonly QUARANTINED: "QUARANTINED";
    readonly AVAILABLE: "AVAILABLE";
    readonly RESERVED: "RESERVED";
    readonly IN_TRANSIT: "IN_TRANSIT";
    readonly ISSUED: "ISSUED";
    readonly TRANSFUSED: "TRANSFUSED";
    readonly EXPIRED: "EXPIRED";
    readonly DISCARDED: "DISCARDED";
};
export type BloodUnitStatus = (typeof BloodUnitStatus)[keyof typeof BloodUnitStatus];
export declare const RequestStatus: {
    readonly PENDING: "PENDING";
    readonly APPROVED: "APPROVED";
    readonly PARTIALLY_FULFILLED: "PARTIALLY_FULFILLED";
    readonly FULFILLED: "FULFILLED";
    readonly CANCELLED: "CANCELLED";
    readonly REJECTED: "REJECTED";
};
export type RequestStatus = (typeof RequestStatus)[keyof typeof RequestStatus];
export declare const RequestPriority: {
    readonly ROUTINE: "ROUTINE";
    readonly URGENT: "URGENT";
    readonly EMERGENCY: "EMERGENCY";
};
export type RequestPriority = (typeof RequestPriority)[keyof typeof RequestPriority];
export declare const ReservationStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly RELEASED: "RELEASED";
    readonly FULFILLED: "FULFILLED";
    readonly EXPIRED: "EXPIRED";
};
export type ReservationStatus = (typeof ReservationStatus)[keyof typeof ReservationStatus];
export declare const TransferStatus: {
    readonly REQUESTED: "REQUESTED";
    readonly APPROVED: "APPROVED";
    readonly IN_TRANSIT: "IN_TRANSIT";
    readonly RECEIVED: "RECEIVED";
    readonly CANCELLED: "CANCELLED";
};
export type TransferStatus = (typeof TransferStatus)[keyof typeof TransferStatus];
export declare const RecommendationStatus: {
    readonly PENDING: "PENDING";
    readonly ACCEPTED: "ACCEPTED";
    readonly REJECTED: "REJECTED";
    readonly EXPIRED: "EXPIRED";
};
export type RecommendationStatus = (typeof RecommendationStatus)[keyof typeof RecommendationStatus];
