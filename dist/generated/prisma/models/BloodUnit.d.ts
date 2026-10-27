import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BloodUnitModel = runtime.Types.Result.DefaultSelection<Prisma.$BloodUnitPayload>;
export type AggregateBloodUnit = {
    _count: BloodUnitCountAggregateOutputType | null;
    _avg: BloodUnitAvgAggregateOutputType | null;
    _sum: BloodUnitSumAggregateOutputType | null;
    _min: BloodUnitMinAggregateOutputType | null;
    _max: BloodUnitMaxAggregateOutputType | null;
};
export type BloodUnitAvgAggregateOutputType = {
    volumeMl: number | null;
};
export type BloodUnitSumAggregateOutputType = {
    volumeMl: number | null;
};
export type BloodUnitMinAggregateOutputType = {
    id: string | null;
    unitCode: string | null;
    donationId: string | null;
    facilityId: string | null;
    bloodGroup: $Enums.BloodGroup | null;
    component: $Enums.ComponentType | null;
    status: $Enums.BloodUnitStatus | null;
    volumeMl: number | null;
    collectedAt: Date | null;
    expiresAt: Date | null;
    releasedAt: Date | null;
    issuedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BloodUnitMaxAggregateOutputType = {
    id: string | null;
    unitCode: string | null;
    donationId: string | null;
    facilityId: string | null;
    bloodGroup: $Enums.BloodGroup | null;
    component: $Enums.ComponentType | null;
    status: $Enums.BloodUnitStatus | null;
    volumeMl: number | null;
    collectedAt: Date | null;
    expiresAt: Date | null;
    releasedAt: Date | null;
    issuedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BloodUnitCountAggregateOutputType = {
    id: number;
    unitCode: number;
    donationId: number;
    facilityId: number;
    bloodGroup: number;
    component: number;
    status: number;
    volumeMl: number;
    collectedAt: number;
    expiresAt: number;
    releasedAt: number;
    issuedAt: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BloodUnitAvgAggregateInputType = {
    volumeMl?: true;
};
export type BloodUnitSumAggregateInputType = {
    volumeMl?: true;
};
export type BloodUnitMinAggregateInputType = {
    id?: true;
    unitCode?: true;
    donationId?: true;
    facilityId?: true;
    bloodGroup?: true;
    component?: true;
    status?: true;
    volumeMl?: true;
    collectedAt?: true;
    expiresAt?: true;
    releasedAt?: true;
    issuedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BloodUnitMaxAggregateInputType = {
    id?: true;
    unitCode?: true;
    donationId?: true;
    facilityId?: true;
    bloodGroup?: true;
    component?: true;
    status?: true;
    volumeMl?: true;
    collectedAt?: true;
    expiresAt?: true;
    releasedAt?: true;
    issuedAt?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BloodUnitCountAggregateInputType = {
    id?: true;
    unitCode?: true;
    donationId?: true;
    facilityId?: true;
    bloodGroup?: true;
    component?: true;
    status?: true;
    volumeMl?: true;
    collectedAt?: true;
    expiresAt?: true;
    releasedAt?: true;
    issuedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BloodUnitAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodUnitWhereInput;
    orderBy?: Prisma.BloodUnitOrderByWithRelationInput | Prisma.BloodUnitOrderByWithRelationInput[];
    cursor?: Prisma.BloodUnitWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BloodUnitCountAggregateInputType;
    _avg?: BloodUnitAvgAggregateInputType;
    _sum?: BloodUnitSumAggregateInputType;
    _min?: BloodUnitMinAggregateInputType;
    _max?: BloodUnitMaxAggregateInputType;
};
export type GetBloodUnitAggregateType<T extends BloodUnitAggregateArgs> = {
    [P in keyof T & keyof AggregateBloodUnit]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBloodUnit[P]> : Prisma.GetScalarType<T[P], AggregateBloodUnit[P]>;
};
export type BloodUnitGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodUnitWhereInput;
    orderBy?: Prisma.BloodUnitOrderByWithAggregationInput | Prisma.BloodUnitOrderByWithAggregationInput[];
    by: Prisma.BloodUnitScalarFieldEnum[] | Prisma.BloodUnitScalarFieldEnum;
    having?: Prisma.BloodUnitScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BloodUnitCountAggregateInputType | true;
    _avg?: BloodUnitAvgAggregateInputType;
    _sum?: BloodUnitSumAggregateInputType;
    _min?: BloodUnitMinAggregateInputType;
    _max?: BloodUnitMaxAggregateInputType;
};
export type BloodUnitGroupByOutputType = {
    id: string;
    unitCode: string;
    donationId: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status: $Enums.BloodUnitStatus;
    volumeMl: number | null;
    collectedAt: Date;
    expiresAt: Date;
    releasedAt: Date | null;
    issuedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    _count: BloodUnitCountAggregateOutputType | null;
    _avg: BloodUnitAvgAggregateOutputType | null;
    _sum: BloodUnitSumAggregateOutputType | null;
    _min: BloodUnitMinAggregateOutputType | null;
    _max: BloodUnitMaxAggregateOutputType | null;
};
export type GetBloodUnitGroupByPayload<T extends BloodUnitGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BloodUnitGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BloodUnitGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BloodUnitGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BloodUnitGroupByOutputType[P]>;
}>>;
export type BloodUnitWhereInput = {
    AND?: Prisma.BloodUnitWhereInput | Prisma.BloodUnitWhereInput[];
    OR?: Prisma.BloodUnitWhereInput[];
    NOT?: Prisma.BloodUnitWhereInput | Prisma.BloodUnitWhereInput[];
    id?: Prisma.StringFilter<"BloodUnit"> | string;
    unitCode?: Prisma.StringFilter<"BloodUnit"> | string;
    donationId?: Prisma.StringFilter<"BloodUnit"> | string;
    facilityId?: Prisma.StringFilter<"BloodUnit"> | string;
    bloodGroup?: Prisma.EnumBloodGroupFilter<"BloodUnit"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFilter<"BloodUnit"> | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFilter<"BloodUnit"> | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.IntNullableFilter<"BloodUnit"> | number | null;
    collectedAt?: Prisma.DateTimeFilter<"BloodUnit"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"BloodUnit"> | Date | string;
    releasedAt?: Prisma.DateTimeNullableFilter<"BloodUnit"> | Date | string | null;
    issuedAt?: Prisma.DateTimeNullableFilter<"BloodUnit"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BloodUnit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BloodUnit"> | Date | string;
    donation?: Prisma.XOR<Prisma.DonationScalarRelationFilter, Prisma.DonationWhereInput>;
    facility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
    labTests?: Prisma.LabTestListRelationFilter;
    reservations?: Prisma.BloodReservationListRelationFilter;
    events?: Prisma.BloodUnitEventListRelationFilter;
    transfers?: Prisma.BloodTransferListRelationFilter;
};
export type BloodUnitOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    unitCode?: Prisma.SortOrder;
    donationId?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    volumeMl?: Prisma.SortOrderInput | Prisma.SortOrder;
    collectedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    releasedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    issuedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    donation?: Prisma.DonationOrderByWithRelationInput;
    facility?: Prisma.FacilityOrderByWithRelationInput;
    labTests?: Prisma.LabTestOrderByRelationAggregateInput;
    reservations?: Prisma.BloodReservationOrderByRelationAggregateInput;
    events?: Prisma.BloodUnitEventOrderByRelationAggregateInput;
    transfers?: Prisma.BloodTransferOrderByRelationAggregateInput;
};
export type BloodUnitWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    unitCode?: string;
    AND?: Prisma.BloodUnitWhereInput | Prisma.BloodUnitWhereInput[];
    OR?: Prisma.BloodUnitWhereInput[];
    NOT?: Prisma.BloodUnitWhereInput | Prisma.BloodUnitWhereInput[];
    donationId?: Prisma.StringFilter<"BloodUnit"> | string;
    facilityId?: Prisma.StringFilter<"BloodUnit"> | string;
    bloodGroup?: Prisma.EnumBloodGroupFilter<"BloodUnit"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFilter<"BloodUnit"> | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFilter<"BloodUnit"> | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.IntNullableFilter<"BloodUnit"> | number | null;
    collectedAt?: Prisma.DateTimeFilter<"BloodUnit"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"BloodUnit"> | Date | string;
    releasedAt?: Prisma.DateTimeNullableFilter<"BloodUnit"> | Date | string | null;
    issuedAt?: Prisma.DateTimeNullableFilter<"BloodUnit"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BloodUnit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BloodUnit"> | Date | string;
    donation?: Prisma.XOR<Prisma.DonationScalarRelationFilter, Prisma.DonationWhereInput>;
    facility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
    labTests?: Prisma.LabTestListRelationFilter;
    reservations?: Prisma.BloodReservationListRelationFilter;
    events?: Prisma.BloodUnitEventListRelationFilter;
    transfers?: Prisma.BloodTransferListRelationFilter;
}, "id" | "unitCode">;
export type BloodUnitOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    unitCode?: Prisma.SortOrder;
    donationId?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    volumeMl?: Prisma.SortOrderInput | Prisma.SortOrder;
    collectedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    releasedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    issuedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BloodUnitCountOrderByAggregateInput;
    _avg?: Prisma.BloodUnitAvgOrderByAggregateInput;
    _max?: Prisma.BloodUnitMaxOrderByAggregateInput;
    _min?: Prisma.BloodUnitMinOrderByAggregateInput;
    _sum?: Prisma.BloodUnitSumOrderByAggregateInput;
};
export type BloodUnitScalarWhereWithAggregatesInput = {
    AND?: Prisma.BloodUnitScalarWhereWithAggregatesInput | Prisma.BloodUnitScalarWhereWithAggregatesInput[];
    OR?: Prisma.BloodUnitScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BloodUnitScalarWhereWithAggregatesInput | Prisma.BloodUnitScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BloodUnit"> | string;
    unitCode?: Prisma.StringWithAggregatesFilter<"BloodUnit"> | string;
    donationId?: Prisma.StringWithAggregatesFilter<"BloodUnit"> | string;
    facilityId?: Prisma.StringWithAggregatesFilter<"BloodUnit"> | string;
    bloodGroup?: Prisma.EnumBloodGroupWithAggregatesFilter<"BloodUnit"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeWithAggregatesFilter<"BloodUnit"> | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusWithAggregatesFilter<"BloodUnit"> | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.IntNullableWithAggregatesFilter<"BloodUnit"> | number | null;
    collectedAt?: Prisma.DateTimeWithAggregatesFilter<"BloodUnit"> | Date | string;
    expiresAt?: Prisma.DateTimeWithAggregatesFilter<"BloodUnit"> | Date | string;
    releasedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BloodUnit"> | Date | string | null;
    issuedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BloodUnit"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"BloodUnit"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"BloodUnit"> | Date | string;
};
export type BloodUnitCreateInput = {
    id?: string;
    unitCode: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    donation: Prisma.DonationCreateNestedOneWithoutBloodUnitsInput;
    facility: Prisma.FacilityCreateNestedOneWithoutBloodUnitsInput;
    labTests?: Prisma.LabTestCreateNestedManyWithoutBloodUnitInput;
    reservations?: Prisma.BloodReservationCreateNestedManyWithoutBloodUnitInput;
    events?: Prisma.BloodUnitEventCreateNestedManyWithoutBloodUnitInput;
    transfers?: Prisma.BloodTransferCreateNestedManyWithoutBloodUnitInput;
};
export type BloodUnitUncheckedCreateInput = {
    id?: string;
    unitCode: string;
    donationId: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    labTests?: Prisma.LabTestUncheckedCreateNestedManyWithoutBloodUnitInput;
    reservations?: Prisma.BloodReservationUncheckedCreateNestedManyWithoutBloodUnitInput;
    events?: Prisma.BloodUnitEventUncheckedCreateNestedManyWithoutBloodUnitInput;
    transfers?: Prisma.BloodTransferUncheckedCreateNestedManyWithoutBloodUnitInput;
};
export type BloodUnitUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    donation?: Prisma.DonationUpdateOneRequiredWithoutBloodUnitsNestedInput;
    facility?: Prisma.FacilityUpdateOneRequiredWithoutBloodUnitsNestedInput;
    labTests?: Prisma.LabTestUpdateManyWithoutBloodUnitNestedInput;
    reservations?: Prisma.BloodReservationUpdateManyWithoutBloodUnitNestedInput;
    events?: Prisma.BloodUnitEventUpdateManyWithoutBloodUnitNestedInput;
    transfers?: Prisma.BloodTransferUpdateManyWithoutBloodUnitNestedInput;
};
export type BloodUnitUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donationId?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    labTests?: Prisma.LabTestUncheckedUpdateManyWithoutBloodUnitNestedInput;
    reservations?: Prisma.BloodReservationUncheckedUpdateManyWithoutBloodUnitNestedInput;
    events?: Prisma.BloodUnitEventUncheckedUpdateManyWithoutBloodUnitNestedInput;
    transfers?: Prisma.BloodTransferUncheckedUpdateManyWithoutBloodUnitNestedInput;
};
export type BloodUnitCreateManyInput = {
    id?: string;
    unitCode: string;
    donationId: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BloodUnitUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BloodUnitUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donationId?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BloodUnitListRelationFilter = {
    every?: Prisma.BloodUnitWhereInput;
    some?: Prisma.BloodUnitWhereInput;
    none?: Prisma.BloodUnitWhereInput;
};
export type BloodUnitOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BloodUnitCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    unitCode?: Prisma.SortOrder;
    donationId?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    volumeMl?: Prisma.SortOrder;
    collectedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    releasedAt?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BloodUnitAvgOrderByAggregateInput = {
    volumeMl?: Prisma.SortOrder;
};
export type BloodUnitMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    unitCode?: Prisma.SortOrder;
    donationId?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    volumeMl?: Prisma.SortOrder;
    collectedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    releasedAt?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BloodUnitMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    unitCode?: Prisma.SortOrder;
    donationId?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    volumeMl?: Prisma.SortOrder;
    collectedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
    releasedAt?: Prisma.SortOrder;
    issuedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BloodUnitSumOrderByAggregateInput = {
    volumeMl?: Prisma.SortOrder;
};
export type BloodUnitScalarRelationFilter = {
    is?: Prisma.BloodUnitWhereInput;
    isNot?: Prisma.BloodUnitWhereInput;
};
export type BloodUnitCreateNestedManyWithoutFacilityInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutFacilityInput, Prisma.BloodUnitUncheckedCreateWithoutFacilityInput> | Prisma.BloodUnitCreateWithoutFacilityInput[] | Prisma.BloodUnitUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutFacilityInput | Prisma.BloodUnitCreateOrConnectWithoutFacilityInput[];
    createMany?: Prisma.BloodUnitCreateManyFacilityInputEnvelope;
    connect?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
};
export type BloodUnitUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutFacilityInput, Prisma.BloodUnitUncheckedCreateWithoutFacilityInput> | Prisma.BloodUnitCreateWithoutFacilityInput[] | Prisma.BloodUnitUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutFacilityInput | Prisma.BloodUnitCreateOrConnectWithoutFacilityInput[];
    createMany?: Prisma.BloodUnitCreateManyFacilityInputEnvelope;
    connect?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
};
export type BloodUnitUpdateManyWithoutFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutFacilityInput, Prisma.BloodUnitUncheckedCreateWithoutFacilityInput> | Prisma.BloodUnitCreateWithoutFacilityInput[] | Prisma.BloodUnitUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutFacilityInput | Prisma.BloodUnitCreateOrConnectWithoutFacilityInput[];
    upsert?: Prisma.BloodUnitUpsertWithWhereUniqueWithoutFacilityInput | Prisma.BloodUnitUpsertWithWhereUniqueWithoutFacilityInput[];
    createMany?: Prisma.BloodUnitCreateManyFacilityInputEnvelope;
    set?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    disconnect?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    delete?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    connect?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    update?: Prisma.BloodUnitUpdateWithWhereUniqueWithoutFacilityInput | Prisma.BloodUnitUpdateWithWhereUniqueWithoutFacilityInput[];
    updateMany?: Prisma.BloodUnitUpdateManyWithWhereWithoutFacilityInput | Prisma.BloodUnitUpdateManyWithWhereWithoutFacilityInput[];
    deleteMany?: Prisma.BloodUnitScalarWhereInput | Prisma.BloodUnitScalarWhereInput[];
};
export type BloodUnitUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutFacilityInput, Prisma.BloodUnitUncheckedCreateWithoutFacilityInput> | Prisma.BloodUnitCreateWithoutFacilityInput[] | Prisma.BloodUnitUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutFacilityInput | Prisma.BloodUnitCreateOrConnectWithoutFacilityInput[];
    upsert?: Prisma.BloodUnitUpsertWithWhereUniqueWithoutFacilityInput | Prisma.BloodUnitUpsertWithWhereUniqueWithoutFacilityInput[];
    createMany?: Prisma.BloodUnitCreateManyFacilityInputEnvelope;
    set?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    disconnect?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    delete?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    connect?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    update?: Prisma.BloodUnitUpdateWithWhereUniqueWithoutFacilityInput | Prisma.BloodUnitUpdateWithWhereUniqueWithoutFacilityInput[];
    updateMany?: Prisma.BloodUnitUpdateManyWithWhereWithoutFacilityInput | Prisma.BloodUnitUpdateManyWithWhereWithoutFacilityInput[];
    deleteMany?: Prisma.BloodUnitScalarWhereInput | Prisma.BloodUnitScalarWhereInput[];
};
export type BloodUnitCreateNestedManyWithoutDonationInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutDonationInput, Prisma.BloodUnitUncheckedCreateWithoutDonationInput> | Prisma.BloodUnitCreateWithoutDonationInput[] | Prisma.BloodUnitUncheckedCreateWithoutDonationInput[];
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutDonationInput | Prisma.BloodUnitCreateOrConnectWithoutDonationInput[];
    createMany?: Prisma.BloodUnitCreateManyDonationInputEnvelope;
    connect?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
};
export type BloodUnitUncheckedCreateNestedManyWithoutDonationInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutDonationInput, Prisma.BloodUnitUncheckedCreateWithoutDonationInput> | Prisma.BloodUnitCreateWithoutDonationInput[] | Prisma.BloodUnitUncheckedCreateWithoutDonationInput[];
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutDonationInput | Prisma.BloodUnitCreateOrConnectWithoutDonationInput[];
    createMany?: Prisma.BloodUnitCreateManyDonationInputEnvelope;
    connect?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
};
export type BloodUnitUpdateManyWithoutDonationNestedInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutDonationInput, Prisma.BloodUnitUncheckedCreateWithoutDonationInput> | Prisma.BloodUnitCreateWithoutDonationInput[] | Prisma.BloodUnitUncheckedCreateWithoutDonationInput[];
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutDonationInput | Prisma.BloodUnitCreateOrConnectWithoutDonationInput[];
    upsert?: Prisma.BloodUnitUpsertWithWhereUniqueWithoutDonationInput | Prisma.BloodUnitUpsertWithWhereUniqueWithoutDonationInput[];
    createMany?: Prisma.BloodUnitCreateManyDonationInputEnvelope;
    set?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    disconnect?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    delete?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    connect?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    update?: Prisma.BloodUnitUpdateWithWhereUniqueWithoutDonationInput | Prisma.BloodUnitUpdateWithWhereUniqueWithoutDonationInput[];
    updateMany?: Prisma.BloodUnitUpdateManyWithWhereWithoutDonationInput | Prisma.BloodUnitUpdateManyWithWhereWithoutDonationInput[];
    deleteMany?: Prisma.BloodUnitScalarWhereInput | Prisma.BloodUnitScalarWhereInput[];
};
export type BloodUnitUncheckedUpdateManyWithoutDonationNestedInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutDonationInput, Prisma.BloodUnitUncheckedCreateWithoutDonationInput> | Prisma.BloodUnitCreateWithoutDonationInput[] | Prisma.BloodUnitUncheckedCreateWithoutDonationInput[];
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutDonationInput | Prisma.BloodUnitCreateOrConnectWithoutDonationInput[];
    upsert?: Prisma.BloodUnitUpsertWithWhereUniqueWithoutDonationInput | Prisma.BloodUnitUpsertWithWhereUniqueWithoutDonationInput[];
    createMany?: Prisma.BloodUnitCreateManyDonationInputEnvelope;
    set?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    disconnect?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    delete?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    connect?: Prisma.BloodUnitWhereUniqueInput | Prisma.BloodUnitWhereUniqueInput[];
    update?: Prisma.BloodUnitUpdateWithWhereUniqueWithoutDonationInput | Prisma.BloodUnitUpdateWithWhereUniqueWithoutDonationInput[];
    updateMany?: Prisma.BloodUnitUpdateManyWithWhereWithoutDonationInput | Prisma.BloodUnitUpdateManyWithWhereWithoutDonationInput[];
    deleteMany?: Prisma.BloodUnitScalarWhereInput | Prisma.BloodUnitScalarWhereInput[];
};
export type EnumBloodGroupFieldUpdateOperationsInput = {
    set?: $Enums.BloodGroup;
};
export type EnumComponentTypeFieldUpdateOperationsInput = {
    set?: $Enums.ComponentType;
};
export type EnumBloodUnitStatusFieldUpdateOperationsInput = {
    set?: $Enums.BloodUnitStatus;
};
export type BloodUnitCreateNestedOneWithoutLabTestsInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutLabTestsInput, Prisma.BloodUnitUncheckedCreateWithoutLabTestsInput>;
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutLabTestsInput;
    connect?: Prisma.BloodUnitWhereUniqueInput;
};
export type BloodUnitUpdateOneRequiredWithoutLabTestsNestedInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutLabTestsInput, Prisma.BloodUnitUncheckedCreateWithoutLabTestsInput>;
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutLabTestsInput;
    upsert?: Prisma.BloodUnitUpsertWithoutLabTestsInput;
    connect?: Prisma.BloodUnitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BloodUnitUpdateToOneWithWhereWithoutLabTestsInput, Prisma.BloodUnitUpdateWithoutLabTestsInput>, Prisma.BloodUnitUncheckedUpdateWithoutLabTestsInput>;
};
export type BloodUnitCreateNestedOneWithoutReservationsInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutReservationsInput, Prisma.BloodUnitUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutReservationsInput;
    connect?: Prisma.BloodUnitWhereUniqueInput;
};
export type BloodUnitUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutReservationsInput, Prisma.BloodUnitUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutReservationsInput;
    upsert?: Prisma.BloodUnitUpsertWithoutReservationsInput;
    connect?: Prisma.BloodUnitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BloodUnitUpdateToOneWithWhereWithoutReservationsInput, Prisma.BloodUnitUpdateWithoutReservationsInput>, Prisma.BloodUnitUncheckedUpdateWithoutReservationsInput>;
};
export type BloodUnitCreateNestedOneWithoutTransfersInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutTransfersInput, Prisma.BloodUnitUncheckedCreateWithoutTransfersInput>;
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutTransfersInput;
    connect?: Prisma.BloodUnitWhereUniqueInput;
};
export type BloodUnitUpdateOneRequiredWithoutTransfersNestedInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutTransfersInput, Prisma.BloodUnitUncheckedCreateWithoutTransfersInput>;
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutTransfersInput;
    upsert?: Prisma.BloodUnitUpsertWithoutTransfersInput;
    connect?: Prisma.BloodUnitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BloodUnitUpdateToOneWithWhereWithoutTransfersInput, Prisma.BloodUnitUpdateWithoutTransfersInput>, Prisma.BloodUnitUncheckedUpdateWithoutTransfersInput>;
};
export type BloodUnitCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutEventsInput, Prisma.BloodUnitUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutEventsInput;
    connect?: Prisma.BloodUnitWhereUniqueInput;
};
export type BloodUnitUpdateOneRequiredWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.BloodUnitCreateWithoutEventsInput, Prisma.BloodUnitUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.BloodUnitCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.BloodUnitUpsertWithoutEventsInput;
    connect?: Prisma.BloodUnitWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BloodUnitUpdateToOneWithWhereWithoutEventsInput, Prisma.BloodUnitUpdateWithoutEventsInput>, Prisma.BloodUnitUncheckedUpdateWithoutEventsInput>;
};
export type BloodUnitCreateWithoutFacilityInput = {
    id?: string;
    unitCode: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    donation: Prisma.DonationCreateNestedOneWithoutBloodUnitsInput;
    labTests?: Prisma.LabTestCreateNestedManyWithoutBloodUnitInput;
    reservations?: Prisma.BloodReservationCreateNestedManyWithoutBloodUnitInput;
    events?: Prisma.BloodUnitEventCreateNestedManyWithoutBloodUnitInput;
    transfers?: Prisma.BloodTransferCreateNestedManyWithoutBloodUnitInput;
};
export type BloodUnitUncheckedCreateWithoutFacilityInput = {
    id?: string;
    unitCode: string;
    donationId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    labTests?: Prisma.LabTestUncheckedCreateNestedManyWithoutBloodUnitInput;
    reservations?: Prisma.BloodReservationUncheckedCreateNestedManyWithoutBloodUnitInput;
    events?: Prisma.BloodUnitEventUncheckedCreateNestedManyWithoutBloodUnitInput;
    transfers?: Prisma.BloodTransferUncheckedCreateNestedManyWithoutBloodUnitInput;
};
export type BloodUnitCreateOrConnectWithoutFacilityInput = {
    where: Prisma.BloodUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodUnitCreateWithoutFacilityInput, Prisma.BloodUnitUncheckedCreateWithoutFacilityInput>;
};
export type BloodUnitCreateManyFacilityInputEnvelope = {
    data: Prisma.BloodUnitCreateManyFacilityInput | Prisma.BloodUnitCreateManyFacilityInput[];
    skipDuplicates?: boolean;
};
export type BloodUnitUpsertWithWhereUniqueWithoutFacilityInput = {
    where: Prisma.BloodUnitWhereUniqueInput;
    update: Prisma.XOR<Prisma.BloodUnitUpdateWithoutFacilityInput, Prisma.BloodUnitUncheckedUpdateWithoutFacilityInput>;
    create: Prisma.XOR<Prisma.BloodUnitCreateWithoutFacilityInput, Prisma.BloodUnitUncheckedCreateWithoutFacilityInput>;
};
export type BloodUnitUpdateWithWhereUniqueWithoutFacilityInput = {
    where: Prisma.BloodUnitWhereUniqueInput;
    data: Prisma.XOR<Prisma.BloodUnitUpdateWithoutFacilityInput, Prisma.BloodUnitUncheckedUpdateWithoutFacilityInput>;
};
export type BloodUnitUpdateManyWithWhereWithoutFacilityInput = {
    where: Prisma.BloodUnitScalarWhereInput;
    data: Prisma.XOR<Prisma.BloodUnitUpdateManyMutationInput, Prisma.BloodUnitUncheckedUpdateManyWithoutFacilityInput>;
};
export type BloodUnitScalarWhereInput = {
    AND?: Prisma.BloodUnitScalarWhereInput | Prisma.BloodUnitScalarWhereInput[];
    OR?: Prisma.BloodUnitScalarWhereInput[];
    NOT?: Prisma.BloodUnitScalarWhereInput | Prisma.BloodUnitScalarWhereInput[];
    id?: Prisma.StringFilter<"BloodUnit"> | string;
    unitCode?: Prisma.StringFilter<"BloodUnit"> | string;
    donationId?: Prisma.StringFilter<"BloodUnit"> | string;
    facilityId?: Prisma.StringFilter<"BloodUnit"> | string;
    bloodGroup?: Prisma.EnumBloodGroupFilter<"BloodUnit"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFilter<"BloodUnit"> | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFilter<"BloodUnit"> | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.IntNullableFilter<"BloodUnit"> | number | null;
    collectedAt?: Prisma.DateTimeFilter<"BloodUnit"> | Date | string;
    expiresAt?: Prisma.DateTimeFilter<"BloodUnit"> | Date | string;
    releasedAt?: Prisma.DateTimeNullableFilter<"BloodUnit"> | Date | string | null;
    issuedAt?: Prisma.DateTimeNullableFilter<"BloodUnit"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"BloodUnit"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"BloodUnit"> | Date | string;
};
export type BloodUnitCreateWithoutDonationInput = {
    id?: string;
    unitCode: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    facility: Prisma.FacilityCreateNestedOneWithoutBloodUnitsInput;
    labTests?: Prisma.LabTestCreateNestedManyWithoutBloodUnitInput;
    reservations?: Prisma.BloodReservationCreateNestedManyWithoutBloodUnitInput;
    events?: Prisma.BloodUnitEventCreateNestedManyWithoutBloodUnitInput;
    transfers?: Prisma.BloodTransferCreateNestedManyWithoutBloodUnitInput;
};
export type BloodUnitUncheckedCreateWithoutDonationInput = {
    id?: string;
    unitCode: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    labTests?: Prisma.LabTestUncheckedCreateNestedManyWithoutBloodUnitInput;
    reservations?: Prisma.BloodReservationUncheckedCreateNestedManyWithoutBloodUnitInput;
    events?: Prisma.BloodUnitEventUncheckedCreateNestedManyWithoutBloodUnitInput;
    transfers?: Prisma.BloodTransferUncheckedCreateNestedManyWithoutBloodUnitInput;
};
export type BloodUnitCreateOrConnectWithoutDonationInput = {
    where: Prisma.BloodUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodUnitCreateWithoutDonationInput, Prisma.BloodUnitUncheckedCreateWithoutDonationInput>;
};
export type BloodUnitCreateManyDonationInputEnvelope = {
    data: Prisma.BloodUnitCreateManyDonationInput | Prisma.BloodUnitCreateManyDonationInput[];
    skipDuplicates?: boolean;
};
export type BloodUnitUpsertWithWhereUniqueWithoutDonationInput = {
    where: Prisma.BloodUnitWhereUniqueInput;
    update: Prisma.XOR<Prisma.BloodUnitUpdateWithoutDonationInput, Prisma.BloodUnitUncheckedUpdateWithoutDonationInput>;
    create: Prisma.XOR<Prisma.BloodUnitCreateWithoutDonationInput, Prisma.BloodUnitUncheckedCreateWithoutDonationInput>;
};
export type BloodUnitUpdateWithWhereUniqueWithoutDonationInput = {
    where: Prisma.BloodUnitWhereUniqueInput;
    data: Prisma.XOR<Prisma.BloodUnitUpdateWithoutDonationInput, Prisma.BloodUnitUncheckedUpdateWithoutDonationInput>;
};
export type BloodUnitUpdateManyWithWhereWithoutDonationInput = {
    where: Prisma.BloodUnitScalarWhereInput;
    data: Prisma.XOR<Prisma.BloodUnitUpdateManyMutationInput, Prisma.BloodUnitUncheckedUpdateManyWithoutDonationInput>;
};
export type BloodUnitCreateWithoutLabTestsInput = {
    id?: string;
    unitCode: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    donation: Prisma.DonationCreateNestedOneWithoutBloodUnitsInput;
    facility: Prisma.FacilityCreateNestedOneWithoutBloodUnitsInput;
    reservations?: Prisma.BloodReservationCreateNestedManyWithoutBloodUnitInput;
    events?: Prisma.BloodUnitEventCreateNestedManyWithoutBloodUnitInput;
    transfers?: Prisma.BloodTransferCreateNestedManyWithoutBloodUnitInput;
};
export type BloodUnitUncheckedCreateWithoutLabTestsInput = {
    id?: string;
    unitCode: string;
    donationId: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reservations?: Prisma.BloodReservationUncheckedCreateNestedManyWithoutBloodUnitInput;
    events?: Prisma.BloodUnitEventUncheckedCreateNestedManyWithoutBloodUnitInput;
    transfers?: Prisma.BloodTransferUncheckedCreateNestedManyWithoutBloodUnitInput;
};
export type BloodUnitCreateOrConnectWithoutLabTestsInput = {
    where: Prisma.BloodUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodUnitCreateWithoutLabTestsInput, Prisma.BloodUnitUncheckedCreateWithoutLabTestsInput>;
};
export type BloodUnitUpsertWithoutLabTestsInput = {
    update: Prisma.XOR<Prisma.BloodUnitUpdateWithoutLabTestsInput, Prisma.BloodUnitUncheckedUpdateWithoutLabTestsInput>;
    create: Prisma.XOR<Prisma.BloodUnitCreateWithoutLabTestsInput, Prisma.BloodUnitUncheckedCreateWithoutLabTestsInput>;
    where?: Prisma.BloodUnitWhereInput;
};
export type BloodUnitUpdateToOneWithWhereWithoutLabTestsInput = {
    where?: Prisma.BloodUnitWhereInput;
    data: Prisma.XOR<Prisma.BloodUnitUpdateWithoutLabTestsInput, Prisma.BloodUnitUncheckedUpdateWithoutLabTestsInput>;
};
export type BloodUnitUpdateWithoutLabTestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    donation?: Prisma.DonationUpdateOneRequiredWithoutBloodUnitsNestedInput;
    facility?: Prisma.FacilityUpdateOneRequiredWithoutBloodUnitsNestedInput;
    reservations?: Prisma.BloodReservationUpdateManyWithoutBloodUnitNestedInput;
    events?: Prisma.BloodUnitEventUpdateManyWithoutBloodUnitNestedInput;
    transfers?: Prisma.BloodTransferUpdateManyWithoutBloodUnitNestedInput;
};
export type BloodUnitUncheckedUpdateWithoutLabTestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donationId?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservations?: Prisma.BloodReservationUncheckedUpdateManyWithoutBloodUnitNestedInput;
    events?: Prisma.BloodUnitEventUncheckedUpdateManyWithoutBloodUnitNestedInput;
    transfers?: Prisma.BloodTransferUncheckedUpdateManyWithoutBloodUnitNestedInput;
};
export type BloodUnitCreateWithoutReservationsInput = {
    id?: string;
    unitCode: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    donation: Prisma.DonationCreateNestedOneWithoutBloodUnitsInput;
    facility: Prisma.FacilityCreateNestedOneWithoutBloodUnitsInput;
    labTests?: Prisma.LabTestCreateNestedManyWithoutBloodUnitInput;
    events?: Prisma.BloodUnitEventCreateNestedManyWithoutBloodUnitInput;
    transfers?: Prisma.BloodTransferCreateNestedManyWithoutBloodUnitInput;
};
export type BloodUnitUncheckedCreateWithoutReservationsInput = {
    id?: string;
    unitCode: string;
    donationId: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    labTests?: Prisma.LabTestUncheckedCreateNestedManyWithoutBloodUnitInput;
    events?: Prisma.BloodUnitEventUncheckedCreateNestedManyWithoutBloodUnitInput;
    transfers?: Prisma.BloodTransferUncheckedCreateNestedManyWithoutBloodUnitInput;
};
export type BloodUnitCreateOrConnectWithoutReservationsInput = {
    where: Prisma.BloodUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodUnitCreateWithoutReservationsInput, Prisma.BloodUnitUncheckedCreateWithoutReservationsInput>;
};
export type BloodUnitUpsertWithoutReservationsInput = {
    update: Prisma.XOR<Prisma.BloodUnitUpdateWithoutReservationsInput, Prisma.BloodUnitUncheckedUpdateWithoutReservationsInput>;
    create: Prisma.XOR<Prisma.BloodUnitCreateWithoutReservationsInput, Prisma.BloodUnitUncheckedCreateWithoutReservationsInput>;
    where?: Prisma.BloodUnitWhereInput;
};
export type BloodUnitUpdateToOneWithWhereWithoutReservationsInput = {
    where?: Prisma.BloodUnitWhereInput;
    data: Prisma.XOR<Prisma.BloodUnitUpdateWithoutReservationsInput, Prisma.BloodUnitUncheckedUpdateWithoutReservationsInput>;
};
export type BloodUnitUpdateWithoutReservationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    donation?: Prisma.DonationUpdateOneRequiredWithoutBloodUnitsNestedInput;
    facility?: Prisma.FacilityUpdateOneRequiredWithoutBloodUnitsNestedInput;
    labTests?: Prisma.LabTestUpdateManyWithoutBloodUnitNestedInput;
    events?: Prisma.BloodUnitEventUpdateManyWithoutBloodUnitNestedInput;
    transfers?: Prisma.BloodTransferUpdateManyWithoutBloodUnitNestedInput;
};
export type BloodUnitUncheckedUpdateWithoutReservationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donationId?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    labTests?: Prisma.LabTestUncheckedUpdateManyWithoutBloodUnitNestedInput;
    events?: Prisma.BloodUnitEventUncheckedUpdateManyWithoutBloodUnitNestedInput;
    transfers?: Prisma.BloodTransferUncheckedUpdateManyWithoutBloodUnitNestedInput;
};
export type BloodUnitCreateWithoutTransfersInput = {
    id?: string;
    unitCode: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    donation: Prisma.DonationCreateNestedOneWithoutBloodUnitsInput;
    facility: Prisma.FacilityCreateNestedOneWithoutBloodUnitsInput;
    labTests?: Prisma.LabTestCreateNestedManyWithoutBloodUnitInput;
    reservations?: Prisma.BloodReservationCreateNestedManyWithoutBloodUnitInput;
    events?: Prisma.BloodUnitEventCreateNestedManyWithoutBloodUnitInput;
};
export type BloodUnitUncheckedCreateWithoutTransfersInput = {
    id?: string;
    unitCode: string;
    donationId: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    labTests?: Prisma.LabTestUncheckedCreateNestedManyWithoutBloodUnitInput;
    reservations?: Prisma.BloodReservationUncheckedCreateNestedManyWithoutBloodUnitInput;
    events?: Prisma.BloodUnitEventUncheckedCreateNestedManyWithoutBloodUnitInput;
};
export type BloodUnitCreateOrConnectWithoutTransfersInput = {
    where: Prisma.BloodUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodUnitCreateWithoutTransfersInput, Prisma.BloodUnitUncheckedCreateWithoutTransfersInput>;
};
export type BloodUnitUpsertWithoutTransfersInput = {
    update: Prisma.XOR<Prisma.BloodUnitUpdateWithoutTransfersInput, Prisma.BloodUnitUncheckedUpdateWithoutTransfersInput>;
    create: Prisma.XOR<Prisma.BloodUnitCreateWithoutTransfersInput, Prisma.BloodUnitUncheckedCreateWithoutTransfersInput>;
    where?: Prisma.BloodUnitWhereInput;
};
export type BloodUnitUpdateToOneWithWhereWithoutTransfersInput = {
    where?: Prisma.BloodUnitWhereInput;
    data: Prisma.XOR<Prisma.BloodUnitUpdateWithoutTransfersInput, Prisma.BloodUnitUncheckedUpdateWithoutTransfersInput>;
};
export type BloodUnitUpdateWithoutTransfersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    donation?: Prisma.DonationUpdateOneRequiredWithoutBloodUnitsNestedInput;
    facility?: Prisma.FacilityUpdateOneRequiredWithoutBloodUnitsNestedInput;
    labTests?: Prisma.LabTestUpdateManyWithoutBloodUnitNestedInput;
    reservations?: Prisma.BloodReservationUpdateManyWithoutBloodUnitNestedInput;
    events?: Prisma.BloodUnitEventUpdateManyWithoutBloodUnitNestedInput;
};
export type BloodUnitUncheckedUpdateWithoutTransfersInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donationId?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    labTests?: Prisma.LabTestUncheckedUpdateManyWithoutBloodUnitNestedInput;
    reservations?: Prisma.BloodReservationUncheckedUpdateManyWithoutBloodUnitNestedInput;
    events?: Prisma.BloodUnitEventUncheckedUpdateManyWithoutBloodUnitNestedInput;
};
export type BloodUnitCreateWithoutEventsInput = {
    id?: string;
    unitCode: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    donation: Prisma.DonationCreateNestedOneWithoutBloodUnitsInput;
    facility: Prisma.FacilityCreateNestedOneWithoutBloodUnitsInput;
    labTests?: Prisma.LabTestCreateNestedManyWithoutBloodUnitInput;
    reservations?: Prisma.BloodReservationCreateNestedManyWithoutBloodUnitInput;
    transfers?: Prisma.BloodTransferCreateNestedManyWithoutBloodUnitInput;
};
export type BloodUnitUncheckedCreateWithoutEventsInput = {
    id?: string;
    unitCode: string;
    donationId: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    labTests?: Prisma.LabTestUncheckedCreateNestedManyWithoutBloodUnitInput;
    reservations?: Prisma.BloodReservationUncheckedCreateNestedManyWithoutBloodUnitInput;
    transfers?: Prisma.BloodTransferUncheckedCreateNestedManyWithoutBloodUnitInput;
};
export type BloodUnitCreateOrConnectWithoutEventsInput = {
    where: Prisma.BloodUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodUnitCreateWithoutEventsInput, Prisma.BloodUnitUncheckedCreateWithoutEventsInput>;
};
export type BloodUnitUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.BloodUnitUpdateWithoutEventsInput, Prisma.BloodUnitUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.BloodUnitCreateWithoutEventsInput, Prisma.BloodUnitUncheckedCreateWithoutEventsInput>;
    where?: Prisma.BloodUnitWhereInput;
};
export type BloodUnitUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.BloodUnitWhereInput;
    data: Prisma.XOR<Prisma.BloodUnitUpdateWithoutEventsInput, Prisma.BloodUnitUncheckedUpdateWithoutEventsInput>;
};
export type BloodUnitUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    donation?: Prisma.DonationUpdateOneRequiredWithoutBloodUnitsNestedInput;
    facility?: Prisma.FacilityUpdateOneRequiredWithoutBloodUnitsNestedInput;
    labTests?: Prisma.LabTestUpdateManyWithoutBloodUnitNestedInput;
    reservations?: Prisma.BloodReservationUpdateManyWithoutBloodUnitNestedInput;
    transfers?: Prisma.BloodTransferUpdateManyWithoutBloodUnitNestedInput;
};
export type BloodUnitUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donationId?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    labTests?: Prisma.LabTestUncheckedUpdateManyWithoutBloodUnitNestedInput;
    reservations?: Prisma.BloodReservationUncheckedUpdateManyWithoutBloodUnitNestedInput;
    transfers?: Prisma.BloodTransferUncheckedUpdateManyWithoutBloodUnitNestedInput;
};
export type BloodUnitCreateManyFacilityInput = {
    id?: string;
    unitCode: string;
    donationId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BloodUnitUpdateWithoutFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    donation?: Prisma.DonationUpdateOneRequiredWithoutBloodUnitsNestedInput;
    labTests?: Prisma.LabTestUpdateManyWithoutBloodUnitNestedInput;
    reservations?: Prisma.BloodReservationUpdateManyWithoutBloodUnitNestedInput;
    events?: Prisma.BloodUnitEventUpdateManyWithoutBloodUnitNestedInput;
    transfers?: Prisma.BloodTransferUpdateManyWithoutBloodUnitNestedInput;
};
export type BloodUnitUncheckedUpdateWithoutFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donationId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    labTests?: Prisma.LabTestUncheckedUpdateManyWithoutBloodUnitNestedInput;
    reservations?: Prisma.BloodReservationUncheckedUpdateManyWithoutBloodUnitNestedInput;
    events?: Prisma.BloodUnitEventUncheckedUpdateManyWithoutBloodUnitNestedInput;
    transfers?: Prisma.BloodTransferUncheckedUpdateManyWithoutBloodUnitNestedInput;
};
export type BloodUnitUncheckedUpdateManyWithoutFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donationId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BloodUnitCreateManyDonationInput = {
    id?: string;
    unitCode: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    status?: $Enums.BloodUnitStatus;
    volumeMl?: number | null;
    collectedAt: Date | string;
    expiresAt: Date | string;
    releasedAt?: Date | string | null;
    issuedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BloodUnitUpdateWithoutDonationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facility?: Prisma.FacilityUpdateOneRequiredWithoutBloodUnitsNestedInput;
    labTests?: Prisma.LabTestUpdateManyWithoutBloodUnitNestedInput;
    reservations?: Prisma.BloodReservationUpdateManyWithoutBloodUnitNestedInput;
    events?: Prisma.BloodUnitEventUpdateManyWithoutBloodUnitNestedInput;
    transfers?: Prisma.BloodTransferUpdateManyWithoutBloodUnitNestedInput;
};
export type BloodUnitUncheckedUpdateWithoutDonationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    labTests?: Prisma.LabTestUncheckedUpdateManyWithoutBloodUnitNestedInput;
    reservations?: Prisma.BloodReservationUncheckedUpdateManyWithoutBloodUnitNestedInput;
    events?: Prisma.BloodUnitEventUncheckedUpdateManyWithoutBloodUnitNestedInput;
    transfers?: Prisma.BloodTransferUncheckedUpdateManyWithoutBloodUnitNestedInput;
};
export type BloodUnitUncheckedUpdateManyWithoutDonationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    unitCode?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    status?: Prisma.EnumBloodUnitStatusFieldUpdateOperationsInput | $Enums.BloodUnitStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    collectedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    releasedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    issuedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BloodUnitCountOutputType = {
    labTests: number;
    reservations: number;
    events: number;
    transfers: number;
};
export type BloodUnitCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    labTests?: boolean | BloodUnitCountOutputTypeCountLabTestsArgs;
    reservations?: boolean | BloodUnitCountOutputTypeCountReservationsArgs;
    events?: boolean | BloodUnitCountOutputTypeCountEventsArgs;
    transfers?: boolean | BloodUnitCountOutputTypeCountTransfersArgs;
};
export type BloodUnitCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitCountOutputTypeSelect<ExtArgs> | null;
};
export type BloodUnitCountOutputTypeCountLabTestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LabTestWhereInput;
};
export type BloodUnitCountOutputTypeCountReservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodReservationWhereInput;
};
export type BloodUnitCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodUnitEventWhereInput;
};
export type BloodUnitCountOutputTypeCountTransfersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodTransferWhereInput;
};
export type BloodUnitSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    unitCode?: boolean;
    donationId?: boolean;
    facilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    status?: boolean;
    volumeMl?: boolean;
    collectedAt?: boolean;
    expiresAt?: boolean;
    releasedAt?: boolean;
    issuedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    donation?: boolean | Prisma.DonationDefaultArgs<ExtArgs>;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    labTests?: boolean | Prisma.BloodUnit$labTestsArgs<ExtArgs>;
    reservations?: boolean | Prisma.BloodUnit$reservationsArgs<ExtArgs>;
    events?: boolean | Prisma.BloodUnit$eventsArgs<ExtArgs>;
    transfers?: boolean | Prisma.BloodUnit$transfersArgs<ExtArgs>;
    _count?: boolean | Prisma.BloodUnitCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bloodUnit"]>;
export type BloodUnitSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    unitCode?: boolean;
    donationId?: boolean;
    facilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    status?: boolean;
    volumeMl?: boolean;
    collectedAt?: boolean;
    expiresAt?: boolean;
    releasedAt?: boolean;
    issuedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    donation?: boolean | Prisma.DonationDefaultArgs<ExtArgs>;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bloodUnit"]>;
export type BloodUnitSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    unitCode?: boolean;
    donationId?: boolean;
    facilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    status?: boolean;
    volumeMl?: boolean;
    collectedAt?: boolean;
    expiresAt?: boolean;
    releasedAt?: boolean;
    issuedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    donation?: boolean | Prisma.DonationDefaultArgs<ExtArgs>;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bloodUnit"]>;
export type BloodUnitSelectScalar = {
    id?: boolean;
    unitCode?: boolean;
    donationId?: boolean;
    facilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    status?: boolean;
    volumeMl?: boolean;
    collectedAt?: boolean;
    expiresAt?: boolean;
    releasedAt?: boolean;
    issuedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BloodUnitOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "unitCode" | "donationId" | "facilityId" | "bloodGroup" | "component" | "status" | "volumeMl" | "collectedAt" | "expiresAt" | "releasedAt" | "issuedAt" | "createdAt" | "updatedAt", ExtArgs["result"]["bloodUnit"]>;
export type BloodUnitInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    donation?: boolean | Prisma.DonationDefaultArgs<ExtArgs>;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    labTests?: boolean | Prisma.BloodUnit$labTestsArgs<ExtArgs>;
    reservations?: boolean | Prisma.BloodUnit$reservationsArgs<ExtArgs>;
    events?: boolean | Prisma.BloodUnit$eventsArgs<ExtArgs>;
    transfers?: boolean | Prisma.BloodUnit$transfersArgs<ExtArgs>;
    _count?: boolean | Prisma.BloodUnitCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BloodUnitIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    donation?: boolean | Prisma.DonationDefaultArgs<ExtArgs>;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
};
export type BloodUnitIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    donation?: boolean | Prisma.DonationDefaultArgs<ExtArgs>;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
};
export type $BloodUnitPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BloodUnit";
    objects: {
        donation: Prisma.$DonationPayload<ExtArgs>;
        facility: Prisma.$FacilityPayload<ExtArgs>;
        labTests: Prisma.$LabTestPayload<ExtArgs>[];
        reservations: Prisma.$BloodReservationPayload<ExtArgs>[];
        events: Prisma.$BloodUnitEventPayload<ExtArgs>[];
        transfers: Prisma.$BloodTransferPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        unitCode: string;
        donationId: string;
        facilityId: string;
        bloodGroup: $Enums.BloodGroup;
        component: $Enums.ComponentType;
        status: $Enums.BloodUnitStatus;
        volumeMl: number | null;
        collectedAt: Date;
        expiresAt: Date;
        releasedAt: Date | null;
        issuedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["bloodUnit"]>;
    composites: {};
};
export type BloodUnitGetPayload<S extends boolean | null | undefined | BloodUnitDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload, S>;
export type BloodUnitCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BloodUnitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BloodUnitCountAggregateInputType | true;
};
export interface BloodUnitDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BloodUnit'];
        meta: {
            name: 'BloodUnit';
        };
    };
    findUnique<T extends BloodUnitFindUniqueArgs>(args: Prisma.SelectSubset<T, BloodUnitFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BloodUnitClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BloodUnitFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BloodUnitFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BloodUnitClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BloodUnitFindFirstArgs>(args?: Prisma.SelectSubset<T, BloodUnitFindFirstArgs<ExtArgs>>): Prisma.Prisma__BloodUnitClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BloodUnitFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BloodUnitFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BloodUnitClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BloodUnitFindManyArgs>(args?: Prisma.SelectSubset<T, BloodUnitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BloodUnitCreateArgs>(args: Prisma.SelectSubset<T, BloodUnitCreateArgs<ExtArgs>>): Prisma.Prisma__BloodUnitClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BloodUnitCreateManyArgs>(args?: Prisma.SelectSubset<T, BloodUnitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BloodUnitCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BloodUnitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BloodUnitDeleteArgs>(args: Prisma.SelectSubset<T, BloodUnitDeleteArgs<ExtArgs>>): Prisma.Prisma__BloodUnitClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BloodUnitUpdateArgs>(args: Prisma.SelectSubset<T, BloodUnitUpdateArgs<ExtArgs>>): Prisma.Prisma__BloodUnitClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BloodUnitDeleteManyArgs>(args?: Prisma.SelectSubset<T, BloodUnitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BloodUnitUpdateManyArgs>(args: Prisma.SelectSubset<T, BloodUnitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BloodUnitUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BloodUnitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BloodUnitUpsertArgs>(args: Prisma.SelectSubset<T, BloodUnitUpsertArgs<ExtArgs>>): Prisma.Prisma__BloodUnitClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BloodUnitCountArgs>(args?: Prisma.Subset<T, BloodUnitCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BloodUnitCountAggregateOutputType> : number>;
    aggregate<T extends BloodUnitAggregateArgs>(args: Prisma.Subset<T, BloodUnitAggregateArgs>): Prisma.PrismaPromise<GetBloodUnitAggregateType<T>>;
    groupBy<T extends BloodUnitGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BloodUnitGroupByArgs['orderBy'];
    } : {
        orderBy?: BloodUnitGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BloodUnitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloodUnitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BloodUnitFieldRefs;
}
export interface Prisma__BloodUnitClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    donation<T extends Prisma.DonationDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DonationDefaultArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    facility<T extends Prisma.FacilityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FacilityDefaultArgs<ExtArgs>>): Prisma.Prisma__FacilityClient<runtime.Types.Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    labTests<T extends Prisma.BloodUnit$labTestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BloodUnit$labTestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reservations<T extends Prisma.BloodUnit$reservationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BloodUnit$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    events<T extends Prisma.BloodUnit$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BloodUnit$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodUnitEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    transfers<T extends Prisma.BloodUnit$transfersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BloodUnit$transfersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BloodUnitFieldRefs {
    readonly id: Prisma.FieldRef<"BloodUnit", 'String'>;
    readonly unitCode: Prisma.FieldRef<"BloodUnit", 'String'>;
    readonly donationId: Prisma.FieldRef<"BloodUnit", 'String'>;
    readonly facilityId: Prisma.FieldRef<"BloodUnit", 'String'>;
    readonly bloodGroup: Prisma.FieldRef<"BloodUnit", 'BloodGroup'>;
    readonly component: Prisma.FieldRef<"BloodUnit", 'ComponentType'>;
    readonly status: Prisma.FieldRef<"BloodUnit", 'BloodUnitStatus'>;
    readonly volumeMl: Prisma.FieldRef<"BloodUnit", 'Int'>;
    readonly collectedAt: Prisma.FieldRef<"BloodUnit", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"BloodUnit", 'DateTime'>;
    readonly releasedAt: Prisma.FieldRef<"BloodUnit", 'DateTime'>;
    readonly issuedAt: Prisma.FieldRef<"BloodUnit", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"BloodUnit", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"BloodUnit", 'DateTime'>;
}
export type BloodUnitFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitInclude<ExtArgs> | null;
    where: Prisma.BloodUnitWhereUniqueInput;
};
export type BloodUnitFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitInclude<ExtArgs> | null;
    where: Prisma.BloodUnitWhereUniqueInput;
};
export type BloodUnitFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitInclude<ExtArgs> | null;
    where?: Prisma.BloodUnitWhereInput;
    orderBy?: Prisma.BloodUnitOrderByWithRelationInput | Prisma.BloodUnitOrderByWithRelationInput[];
    cursor?: Prisma.BloodUnitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BloodUnitScalarFieldEnum | Prisma.BloodUnitScalarFieldEnum[];
};
export type BloodUnitFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitInclude<ExtArgs> | null;
    where?: Prisma.BloodUnitWhereInput;
    orderBy?: Prisma.BloodUnitOrderByWithRelationInput | Prisma.BloodUnitOrderByWithRelationInput[];
    cursor?: Prisma.BloodUnitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BloodUnitScalarFieldEnum | Prisma.BloodUnitScalarFieldEnum[];
};
export type BloodUnitFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitInclude<ExtArgs> | null;
    where?: Prisma.BloodUnitWhereInput;
    orderBy?: Prisma.BloodUnitOrderByWithRelationInput | Prisma.BloodUnitOrderByWithRelationInput[];
    cursor?: Prisma.BloodUnitWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BloodUnitScalarFieldEnum | Prisma.BloodUnitScalarFieldEnum[];
};
export type BloodUnitCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BloodUnitCreateInput, Prisma.BloodUnitUncheckedCreateInput>;
};
export type BloodUnitCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BloodUnitCreateManyInput | Prisma.BloodUnitCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BloodUnitCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BloodUnitOmit<ExtArgs> | null;
    data: Prisma.BloodUnitCreateManyInput | Prisma.BloodUnitCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BloodUnitIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BloodUnitUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BloodUnitUpdateInput, Prisma.BloodUnitUncheckedUpdateInput>;
    where: Prisma.BloodUnitWhereUniqueInput;
};
export type BloodUnitUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BloodUnitUpdateManyMutationInput, Prisma.BloodUnitUncheckedUpdateManyInput>;
    where?: Prisma.BloodUnitWhereInput;
    limit?: number;
};
export type BloodUnitUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BloodUnitOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BloodUnitUpdateManyMutationInput, Prisma.BloodUnitUncheckedUpdateManyInput>;
    where?: Prisma.BloodUnitWhereInput;
    limit?: number;
    include?: Prisma.BloodUnitIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BloodUnitUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitInclude<ExtArgs> | null;
    where: Prisma.BloodUnitWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodUnitCreateInput, Prisma.BloodUnitUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BloodUnitUpdateInput, Prisma.BloodUnitUncheckedUpdateInput>;
};
export type BloodUnitDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitInclude<ExtArgs> | null;
    where: Prisma.BloodUnitWhereUniqueInput;
};
export type BloodUnitDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodUnitWhereInput;
    limit?: number;
};
export type BloodUnit$labTestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabTestSelect<ExtArgs> | null;
    omit?: Prisma.LabTestOmit<ExtArgs> | null;
    include?: Prisma.LabTestInclude<ExtArgs> | null;
    where?: Prisma.LabTestWhereInput;
    orderBy?: Prisma.LabTestOrderByWithRelationInput | Prisma.LabTestOrderByWithRelationInput[];
    cursor?: Prisma.LabTestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.LabTestScalarFieldEnum | Prisma.LabTestScalarFieldEnum[];
};
export type BloodUnit$reservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodReservationSelect<ExtArgs> | null;
    omit?: Prisma.BloodReservationOmit<ExtArgs> | null;
    include?: Prisma.BloodReservationInclude<ExtArgs> | null;
    where?: Prisma.BloodReservationWhereInput;
    orderBy?: Prisma.BloodReservationOrderByWithRelationInput | Prisma.BloodReservationOrderByWithRelationInput[];
    cursor?: Prisma.BloodReservationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BloodReservationScalarFieldEnum | Prisma.BloodReservationScalarFieldEnum[];
};
export type BloodUnit$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitEventSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitEventOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitEventInclude<ExtArgs> | null;
    where?: Prisma.BloodUnitEventWhereInput;
    orderBy?: Prisma.BloodUnitEventOrderByWithRelationInput | Prisma.BloodUnitEventOrderByWithRelationInput[];
    cursor?: Prisma.BloodUnitEventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BloodUnitEventScalarFieldEnum | Prisma.BloodUnitEventScalarFieldEnum[];
};
export type BloodUnit$transfersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodTransferSelect<ExtArgs> | null;
    omit?: Prisma.BloodTransferOmit<ExtArgs> | null;
    include?: Prisma.BloodTransferInclude<ExtArgs> | null;
    where?: Prisma.BloodTransferWhereInput;
    orderBy?: Prisma.BloodTransferOrderByWithRelationInput | Prisma.BloodTransferOrderByWithRelationInput[];
    cursor?: Prisma.BloodTransferWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BloodTransferScalarFieldEnum | Prisma.BloodTransferScalarFieldEnum[];
};
export type BloodUnitDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitInclude<ExtArgs> | null;
};
