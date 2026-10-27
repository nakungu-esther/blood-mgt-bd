import type * as runtime from "@prisma/client/runtime/client";
import * as $Enums from "./enums.js";
import type * as Prisma from "./internal/prismaNamespace.js";
export type StringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type EnumFacilityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityType | Prisma.EnumFacilityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FacilityType[] | Prisma.ListEnumFacilityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FacilityType[] | Prisma.ListEnumFacilityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFacilityTypeFilter<$PrismaModel> | $Enums.FacilityType;
};
export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type SortOrderInput = {
    sort: Prisma.SortOrder;
    nulls?: Prisma.NullsOrder;
};
export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type EnumFacilityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityType | Prisma.EnumFacilityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FacilityType[] | Prisma.ListEnumFacilityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FacilityType[] | Prisma.ListEnumFacilityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFacilityTypeWithAggregatesFilter<$PrismaModel> | $Enums.FacilityType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFacilityTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFacilityTypeFilter<$PrismaModel>;
};
export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    mode?: Prisma.QueryMode;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type EnumBloodGroupNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | Prisma.EnumBloodGroupFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBloodGroupNullableFilter<$PrismaModel> | $Enums.BloodGroup | null;
};
export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type EnumBloodGroupNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | Prisma.EnumBloodGroupFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBloodGroupNullableWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBloodGroupNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBloodGroupNullableFilter<$PrismaModel>;
};
export type EnumDonationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationStatus | Prisma.EnumDonationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DonationStatus[] | Prisma.ListEnumDonationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DonationStatus[] | Prisma.ListEnumDonationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDonationStatusFilter<$PrismaModel> | $Enums.DonationStatus;
};
export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type EnumDonationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationStatus | Prisma.EnumDonationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DonationStatus[] | Prisma.ListEnumDonationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DonationStatus[] | Prisma.ListEnumDonationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDonationStatusWithAggregatesFilter<$PrismaModel> | $Enums.DonationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDonationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDonationStatusFilter<$PrismaModel>;
};
export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type EnumBloodGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | Prisma.EnumBloodGroupFieldRefInput<$PrismaModel>;
    in?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBloodGroupFilter<$PrismaModel> | $Enums.BloodGroup;
};
export type EnumComponentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ComponentType | Prisma.EnumComponentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ComponentType[] | Prisma.ListEnumComponentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComponentType[] | Prisma.ListEnumComponentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComponentTypeFilter<$PrismaModel> | $Enums.ComponentType;
};
export type EnumBloodUnitStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodUnitStatus | Prisma.EnumBloodUnitStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BloodUnitStatus[] | Prisma.ListEnumBloodUnitStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BloodUnitStatus[] | Prisma.ListEnumBloodUnitStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBloodUnitStatusFilter<$PrismaModel> | $Enums.BloodUnitStatus;
};
export type EnumBloodGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | Prisma.EnumBloodGroupFieldRefInput<$PrismaModel>;
    in?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBloodGroupFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBloodGroupFilter<$PrismaModel>;
};
export type EnumComponentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComponentType | Prisma.EnumComponentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ComponentType[] | Prisma.ListEnumComponentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComponentType[] | Prisma.ListEnumComponentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComponentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ComponentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumComponentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumComponentTypeFilter<$PrismaModel>;
};
export type EnumBloodUnitStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodUnitStatus | Prisma.EnumBloodUnitStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BloodUnitStatus[] | Prisma.ListEnumBloodUnitStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BloodUnitStatus[] | Prisma.ListEnumBloodUnitStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBloodUnitStatusWithAggregatesFilter<$PrismaModel> | $Enums.BloodUnitStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBloodUnitStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBloodUnitStatusFilter<$PrismaModel>;
};
export type EnumTestResultFilter<$PrismaModel = never> = {
    equals?: $Enums.TestResult | Prisma.EnumTestResultFieldRefInput<$PrismaModel>;
    in?: $Enums.TestResult[] | Prisma.ListEnumTestResultFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestResult[] | Prisma.ListEnumTestResultFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestResultFilter<$PrismaModel> | $Enums.TestResult;
};
export type EnumTestResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestResult | Prisma.EnumTestResultFieldRefInput<$PrismaModel>;
    in?: $Enums.TestResult[] | Prisma.ListEnumTestResultFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestResult[] | Prisma.ListEnumTestResultFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestResultWithAggregatesFilter<$PrismaModel> | $Enums.TestResult;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTestResultFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTestResultFilter<$PrismaModel>;
};
export type IntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type EnumRequestPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestPriority | Prisma.EnumRequestPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.RequestPriority[] | Prisma.ListEnumRequestPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequestPriority[] | Prisma.ListEnumRequestPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequestPriorityFilter<$PrismaModel> | $Enums.RequestPriority;
};
export type EnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | Prisma.EnumRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RequestStatus[] | Prisma.ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequestStatus[] | Prisma.ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus;
};
export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type EnumRequestPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestPriority | Prisma.EnumRequestPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.RequestPriority[] | Prisma.ListEnumRequestPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequestPriority[] | Prisma.ListEnumRequestPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequestPriorityWithAggregatesFilter<$PrismaModel> | $Enums.RequestPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRequestPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRequestPriorityFilter<$PrismaModel>;
};
export type EnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | Prisma.EnumRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RequestStatus[] | Prisma.ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequestStatus[] | Prisma.ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRequestStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRequestStatusFilter<$PrismaModel>;
};
export type EnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | Prisma.EnumReservationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReservationStatus[] | Prisma.ListEnumReservationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReservationStatus[] | Prisma.ListEnumReservationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus;
};
export type EnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | Prisma.EnumReservationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReservationStatus[] | Prisma.ListEnumReservationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReservationStatus[] | Prisma.ListEnumReservationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReservationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReservationStatusFilter<$PrismaModel>;
};
export type EnumTransferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferStatus | Prisma.EnumTransferStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransferStatusFilter<$PrismaModel> | $Enums.TransferStatus;
};
export type EnumTransferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferStatus | Prisma.EnumTransferStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransferStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransferStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransferStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransferStatusFilter<$PrismaModel>;
};
export type JsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>, Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>;
export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedJsonNullableFilter<$PrismaModel>;
};
export type EnumRecommendationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationStatus | Prisma.EnumRecommendationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RecommendationStatus[] | Prisma.ListEnumRecommendationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecommendationStatus[] | Prisma.ListEnumRecommendationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecommendationStatusFilter<$PrismaModel> | $Enums.RecommendationStatus;
};
export type EnumRecommendationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationStatus | Prisma.EnumRecommendationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RecommendationStatus[] | Prisma.ListEnumRecommendationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecommendationStatus[] | Prisma.ListEnumRecommendationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecommendationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecommendationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRecommendationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRecommendationStatusFilter<$PrismaModel>;
};
export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringFilter<$PrismaModel> | string;
};
export type NestedEnumFacilityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityType | Prisma.EnumFacilityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FacilityType[] | Prisma.ListEnumFacilityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FacilityType[] | Prisma.ListEnumFacilityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFacilityTypeFilter<$PrismaModel> | $Enums.FacilityType;
};
export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableFilter<$PrismaModel> | string | null;
};
export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableFilter<$PrismaModel> | number | null;
};
export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolFilter<$PrismaModel> | boolean;
};
export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeFilter<$PrismaModel> | Date | string;
};
export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel>;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringWithAggregatesFilter<$PrismaModel> | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedStringFilter<$PrismaModel>;
    _max?: Prisma.NestedStringFilter<$PrismaModel>;
};
export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntFilter<$PrismaModel> | number;
};
export type NestedEnumFacilityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.FacilityType | Prisma.EnumFacilityTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.FacilityType[] | Prisma.ListEnumFacilityTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.FacilityType[] | Prisma.ListEnumFacilityTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumFacilityTypeWithAggregatesFilter<$PrismaModel> | $Enums.FacilityType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumFacilityTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumFacilityTypeFilter<$PrismaModel>;
};
export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | Prisma.StringFieldRefInput<$PrismaModel> | null;
    in?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    notIn?: string[] | Prisma.ListStringFieldRefInput<$PrismaModel> | null;
    lt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    lte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gt?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    gte?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    startsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    endsWith?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedStringNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedStringNullableFilter<$PrismaModel>;
};
export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableFilter<$PrismaModel> | number | null;
};
export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
};
export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | Prisma.BooleanFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedBoolWithAggregatesFilter<$PrismaModel> | boolean;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedBoolFilter<$PrismaModel>;
    _max?: Prisma.NestedBoolFilter<$PrismaModel>;
};
export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel>;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeFilter<$PrismaModel>;
};
export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole;
};
export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | Prisma.EnumUserRoleFieldRefInput<$PrismaModel>;
    in?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    notIn?: $Enums.UserRole[] | Prisma.ListEnumUserRoleFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumUserRoleFilter<$PrismaModel>;
};
export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null;
};
export type NestedEnumBloodGroupNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | Prisma.EnumBloodGroupFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBloodGroupNullableFilter<$PrismaModel> | $Enums.BloodGroup | null;
};
export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel> | null;
    in?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    notIn?: Date[] | string[] | Prisma.ListDateTimeFieldRefInput<$PrismaModel> | null;
    lt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    lte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gt?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    gte?: Date | string | Prisma.DateTimeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedDateTimeNullableFilter<$PrismaModel>;
};
export type NestedEnumBloodGroupNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | Prisma.EnumBloodGroupFieldRefInput<$PrismaModel> | null;
    in?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel> | null;
    notIn?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel> | null;
    not?: Prisma.NestedEnumBloodGroupNullableWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBloodGroupNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBloodGroupNullableFilter<$PrismaModel>;
};
export type NestedEnumDonationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationStatus | Prisma.EnumDonationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DonationStatus[] | Prisma.ListEnumDonationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DonationStatus[] | Prisma.ListEnumDonationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDonationStatusFilter<$PrismaModel> | $Enums.DonationStatus;
};
export type NestedEnumDonationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DonationStatus | Prisma.EnumDonationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.DonationStatus[] | Prisma.ListEnumDonationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.DonationStatus[] | Prisma.ListEnumDonationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumDonationStatusWithAggregatesFilter<$PrismaModel> | $Enums.DonationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumDonationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumDonationStatusFilter<$PrismaModel>;
};
export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel> | null;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel> | null;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null;
    _count?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatNullableFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _min?: Prisma.NestedIntNullableFilter<$PrismaModel>;
    _max?: Prisma.NestedIntNullableFilter<$PrismaModel>;
};
export type NestedEnumBloodGroupFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | Prisma.EnumBloodGroupFieldRefInput<$PrismaModel>;
    in?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBloodGroupFilter<$PrismaModel> | $Enums.BloodGroup;
};
export type NestedEnumComponentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.ComponentType | Prisma.EnumComponentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ComponentType[] | Prisma.ListEnumComponentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComponentType[] | Prisma.ListEnumComponentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComponentTypeFilter<$PrismaModel> | $Enums.ComponentType;
};
export type NestedEnumBloodUnitStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodUnitStatus | Prisma.EnumBloodUnitStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BloodUnitStatus[] | Prisma.ListEnumBloodUnitStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BloodUnitStatus[] | Prisma.ListEnumBloodUnitStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBloodUnitStatusFilter<$PrismaModel> | $Enums.BloodUnitStatus;
};
export type NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodGroup | Prisma.EnumBloodGroupFieldRefInput<$PrismaModel>;
    in?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BloodGroup[] | Prisma.ListEnumBloodGroupFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBloodGroupWithAggregatesFilter<$PrismaModel> | $Enums.BloodGroup;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBloodGroupFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBloodGroupFilter<$PrismaModel>;
};
export type NestedEnumComponentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ComponentType | Prisma.EnumComponentTypeFieldRefInput<$PrismaModel>;
    in?: $Enums.ComponentType[] | Prisma.ListEnumComponentTypeFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ComponentType[] | Prisma.ListEnumComponentTypeFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumComponentTypeWithAggregatesFilter<$PrismaModel> | $Enums.ComponentType;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumComponentTypeFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumComponentTypeFilter<$PrismaModel>;
};
export type NestedEnumBloodUnitStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BloodUnitStatus | Prisma.EnumBloodUnitStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.BloodUnitStatus[] | Prisma.ListEnumBloodUnitStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.BloodUnitStatus[] | Prisma.ListEnumBloodUnitStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumBloodUnitStatusWithAggregatesFilter<$PrismaModel> | $Enums.BloodUnitStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumBloodUnitStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumBloodUnitStatusFilter<$PrismaModel>;
};
export type NestedEnumTestResultFilter<$PrismaModel = never> = {
    equals?: $Enums.TestResult | Prisma.EnumTestResultFieldRefInput<$PrismaModel>;
    in?: $Enums.TestResult[] | Prisma.ListEnumTestResultFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestResult[] | Prisma.ListEnumTestResultFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestResultFilter<$PrismaModel> | $Enums.TestResult;
};
export type NestedEnumTestResultWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TestResult | Prisma.EnumTestResultFieldRefInput<$PrismaModel>;
    in?: $Enums.TestResult[] | Prisma.ListEnumTestResultFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TestResult[] | Prisma.ListEnumTestResultFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTestResultWithAggregatesFilter<$PrismaModel> | $Enums.TestResult;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTestResultFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTestResultFilter<$PrismaModel>;
};
export type NestedEnumRequestPriorityFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestPriority | Prisma.EnumRequestPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.RequestPriority[] | Prisma.ListEnumRequestPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequestPriority[] | Prisma.ListEnumRequestPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequestPriorityFilter<$PrismaModel> | $Enums.RequestPriority;
};
export type NestedEnumRequestStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | Prisma.EnumRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RequestStatus[] | Prisma.ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequestStatus[] | Prisma.ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequestStatusFilter<$PrismaModel> | $Enums.RequestStatus;
};
export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListIntFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.IntFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedIntWithAggregatesFilter<$PrismaModel> | number;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _avg?: Prisma.NestedFloatFilter<$PrismaModel>;
    _sum?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedIntFilter<$PrismaModel>;
    _max?: Prisma.NestedIntFilter<$PrismaModel>;
};
export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    in?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    notIn?: number[] | Prisma.ListFloatFieldRefInput<$PrismaModel>;
    lt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    lte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gt?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    gte?: number | Prisma.FloatFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedFloatFilter<$PrismaModel> | number;
};
export type NestedEnumRequestPriorityWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestPriority | Prisma.EnumRequestPriorityFieldRefInput<$PrismaModel>;
    in?: $Enums.RequestPriority[] | Prisma.ListEnumRequestPriorityFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequestPriority[] | Prisma.ListEnumRequestPriorityFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequestPriorityWithAggregatesFilter<$PrismaModel> | $Enums.RequestPriority;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRequestPriorityFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRequestPriorityFilter<$PrismaModel>;
};
export type NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestStatus | Prisma.EnumRequestStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RequestStatus[] | Prisma.ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RequestStatus[] | Prisma.ListEnumRequestStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRequestStatusWithAggregatesFilter<$PrismaModel> | $Enums.RequestStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRequestStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRequestStatusFilter<$PrismaModel>;
};
export type NestedEnumReservationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | Prisma.EnumReservationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReservationStatus[] | Prisma.ListEnumReservationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReservationStatus[] | Prisma.ListEnumReservationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReservationStatusFilter<$PrismaModel> | $Enums.ReservationStatus;
};
export type NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ReservationStatus | Prisma.EnumReservationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.ReservationStatus[] | Prisma.ListEnumReservationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.ReservationStatus[] | Prisma.ListEnumReservationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumReservationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ReservationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumReservationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumReservationStatusFilter<$PrismaModel>;
};
export type NestedEnumTransferStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferStatus | Prisma.EnumTransferStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransferStatusFilter<$PrismaModel> | $Enums.TransferStatus;
};
export type NestedEnumTransferStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TransferStatus | Prisma.EnumTransferStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.TransferStatus[] | Prisma.ListEnumTransferStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumTransferStatusWithAggregatesFilter<$PrismaModel> | $Enums.TransferStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumTransferStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumTransferStatusFilter<$PrismaModel>;
};
export type NestedJsonNullableFilter<$PrismaModel = never> = Prisma.PatchUndefined<Prisma.Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>, Required<NestedJsonNullableFilterBase<$PrismaModel>>> | Prisma.OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>;
export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
    path?: string[];
    mode?: Prisma.QueryMode | Prisma.EnumQueryModeFieldRefInput<$PrismaModel>;
    string_contains?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_starts_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    string_ends_with?: string | Prisma.StringFieldRefInput<$PrismaModel>;
    array_starts_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_ends_with?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    array_contains?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | null;
    lt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    lte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gt?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    gte?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel>;
    not?: runtime.InputJsonValue | Prisma.JsonFieldRefInput<$PrismaModel> | Prisma.JsonNullValueFilter;
};
export type NestedEnumRecommendationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationStatus | Prisma.EnumRecommendationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RecommendationStatus[] | Prisma.ListEnumRecommendationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecommendationStatus[] | Prisma.ListEnumRecommendationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecommendationStatusFilter<$PrismaModel> | $Enums.RecommendationStatus;
};
export type NestedEnumRecommendationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RecommendationStatus | Prisma.EnumRecommendationStatusFieldRefInput<$PrismaModel>;
    in?: $Enums.RecommendationStatus[] | Prisma.ListEnumRecommendationStatusFieldRefInput<$PrismaModel>;
    notIn?: $Enums.RecommendationStatus[] | Prisma.ListEnumRecommendationStatusFieldRefInput<$PrismaModel>;
    not?: Prisma.NestedEnumRecommendationStatusWithAggregatesFilter<$PrismaModel> | $Enums.RecommendationStatus;
    _count?: Prisma.NestedIntFilter<$PrismaModel>;
    _min?: Prisma.NestedEnumRecommendationStatusFilter<$PrismaModel>;
    _max?: Prisma.NestedEnumRecommendationStatusFilter<$PrismaModel>;
};
