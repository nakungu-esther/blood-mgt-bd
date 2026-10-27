import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DonationModel = runtime.Types.Result.DefaultSelection<Prisma.$DonationPayload>;
export type AggregateDonation = {
    _count: DonationCountAggregateOutputType | null;
    _avg: DonationAvgAggregateOutputType | null;
    _sum: DonationSumAggregateOutputType | null;
    _min: DonationMinAggregateOutputType | null;
    _max: DonationMaxAggregateOutputType | null;
};
export type DonationAvgAggregateOutputType = {
    volumeMl: number | null;
};
export type DonationSumAggregateOutputType = {
    volumeMl: number | null;
};
export type DonationMinAggregateOutputType = {
    id: string | null;
    donationCode: string | null;
    donorId: string | null;
    facilityId: string | null;
    donatedAt: Date | null;
    status: $Enums.DonationStatus | null;
    volumeMl: number | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DonationMaxAggregateOutputType = {
    id: string | null;
    donationCode: string | null;
    donorId: string | null;
    facilityId: string | null;
    donatedAt: Date | null;
    status: $Enums.DonationStatus | null;
    volumeMl: number | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DonationCountAggregateOutputType = {
    id: number;
    donationCode: number;
    donorId: number;
    facilityId: number;
    donatedAt: number;
    status: number;
    volumeMl: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DonationAvgAggregateInputType = {
    volumeMl?: true;
};
export type DonationSumAggregateInputType = {
    volumeMl?: true;
};
export type DonationMinAggregateInputType = {
    id?: true;
    donationCode?: true;
    donorId?: true;
    facilityId?: true;
    donatedAt?: true;
    status?: true;
    volumeMl?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DonationMaxAggregateInputType = {
    id?: true;
    donationCode?: true;
    donorId?: true;
    facilityId?: true;
    donatedAt?: true;
    status?: true;
    volumeMl?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DonationCountAggregateInputType = {
    id?: true;
    donationCode?: true;
    donorId?: true;
    facilityId?: true;
    donatedAt?: true;
    status?: true;
    volumeMl?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DonationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DonationWhereInput;
    orderBy?: Prisma.DonationOrderByWithRelationInput | Prisma.DonationOrderByWithRelationInput[];
    cursor?: Prisma.DonationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DonationCountAggregateInputType;
    _avg?: DonationAvgAggregateInputType;
    _sum?: DonationSumAggregateInputType;
    _min?: DonationMinAggregateInputType;
    _max?: DonationMaxAggregateInputType;
};
export type GetDonationAggregateType<T extends DonationAggregateArgs> = {
    [P in keyof T & keyof AggregateDonation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDonation[P]> : Prisma.GetScalarType<T[P], AggregateDonation[P]>;
};
export type DonationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DonationWhereInput;
    orderBy?: Prisma.DonationOrderByWithAggregationInput | Prisma.DonationOrderByWithAggregationInput[];
    by: Prisma.DonationScalarFieldEnum[] | Prisma.DonationScalarFieldEnum;
    having?: Prisma.DonationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DonationCountAggregateInputType | true;
    _avg?: DonationAvgAggregateInputType;
    _sum?: DonationSumAggregateInputType;
    _min?: DonationMinAggregateInputType;
    _max?: DonationMaxAggregateInputType;
};
export type DonationGroupByOutputType = {
    id: string;
    donationCode: string;
    donorId: string;
    facilityId: string;
    donatedAt: Date;
    status: $Enums.DonationStatus;
    volumeMl: number | null;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: DonationCountAggregateOutputType | null;
    _avg: DonationAvgAggregateOutputType | null;
    _sum: DonationSumAggregateOutputType | null;
    _min: DonationMinAggregateOutputType | null;
    _max: DonationMaxAggregateOutputType | null;
};
export type GetDonationGroupByPayload<T extends DonationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DonationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DonationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DonationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DonationGroupByOutputType[P]>;
}>>;
export type DonationWhereInput = {
    AND?: Prisma.DonationWhereInput | Prisma.DonationWhereInput[];
    OR?: Prisma.DonationWhereInput[];
    NOT?: Prisma.DonationWhereInput | Prisma.DonationWhereInput[];
    id?: Prisma.StringFilter<"Donation"> | string;
    donationCode?: Prisma.StringFilter<"Donation"> | string;
    donorId?: Prisma.StringFilter<"Donation"> | string;
    facilityId?: Prisma.StringFilter<"Donation"> | string;
    donatedAt?: Prisma.DateTimeFilter<"Donation"> | Date | string;
    status?: Prisma.EnumDonationStatusFilter<"Donation"> | $Enums.DonationStatus;
    volumeMl?: Prisma.IntNullableFilter<"Donation"> | number | null;
    notes?: Prisma.StringNullableFilter<"Donation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Donation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Donation"> | Date | string;
    donor?: Prisma.XOR<Prisma.DonorScalarRelationFilter, Prisma.DonorWhereInput>;
    facility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
    bloodUnits?: Prisma.BloodUnitListRelationFilter;
};
export type DonationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    donationCode?: Prisma.SortOrder;
    donorId?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    donatedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    volumeMl?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    donor?: Prisma.DonorOrderByWithRelationInput;
    facility?: Prisma.FacilityOrderByWithRelationInput;
    bloodUnits?: Prisma.BloodUnitOrderByRelationAggregateInput;
};
export type DonationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    donationCode?: string;
    AND?: Prisma.DonationWhereInput | Prisma.DonationWhereInput[];
    OR?: Prisma.DonationWhereInput[];
    NOT?: Prisma.DonationWhereInput | Prisma.DonationWhereInput[];
    donorId?: Prisma.StringFilter<"Donation"> | string;
    facilityId?: Prisma.StringFilter<"Donation"> | string;
    donatedAt?: Prisma.DateTimeFilter<"Donation"> | Date | string;
    status?: Prisma.EnumDonationStatusFilter<"Donation"> | $Enums.DonationStatus;
    volumeMl?: Prisma.IntNullableFilter<"Donation"> | number | null;
    notes?: Prisma.StringNullableFilter<"Donation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Donation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Donation"> | Date | string;
    donor?: Prisma.XOR<Prisma.DonorScalarRelationFilter, Prisma.DonorWhereInput>;
    facility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
    bloodUnits?: Prisma.BloodUnitListRelationFilter;
}, "id" | "donationCode">;
export type DonationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    donationCode?: Prisma.SortOrder;
    donorId?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    donatedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    volumeMl?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DonationCountOrderByAggregateInput;
    _avg?: Prisma.DonationAvgOrderByAggregateInput;
    _max?: Prisma.DonationMaxOrderByAggregateInput;
    _min?: Prisma.DonationMinOrderByAggregateInput;
    _sum?: Prisma.DonationSumOrderByAggregateInput;
};
export type DonationScalarWhereWithAggregatesInput = {
    AND?: Prisma.DonationScalarWhereWithAggregatesInput | Prisma.DonationScalarWhereWithAggregatesInput[];
    OR?: Prisma.DonationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DonationScalarWhereWithAggregatesInput | Prisma.DonationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Donation"> | string;
    donationCode?: Prisma.StringWithAggregatesFilter<"Donation"> | string;
    donorId?: Prisma.StringWithAggregatesFilter<"Donation"> | string;
    facilityId?: Prisma.StringWithAggregatesFilter<"Donation"> | string;
    donatedAt?: Prisma.DateTimeWithAggregatesFilter<"Donation"> | Date | string;
    status?: Prisma.EnumDonationStatusWithAggregatesFilter<"Donation"> | $Enums.DonationStatus;
    volumeMl?: Prisma.IntNullableWithAggregatesFilter<"Donation"> | number | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"Donation"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Donation"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Donation"> | Date | string;
};
export type DonationCreateInput = {
    id?: string;
    donationCode: string;
    donatedAt: Date | string;
    status?: $Enums.DonationStatus;
    volumeMl?: number | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    donor: Prisma.DonorCreateNestedOneWithoutDonationsInput;
    facility: Prisma.FacilityCreateNestedOneWithoutDonationsInput;
    bloodUnits?: Prisma.BloodUnitCreateNestedManyWithoutDonationInput;
};
export type DonationUncheckedCreateInput = {
    id?: string;
    donationCode: string;
    donorId: string;
    facilityId: string;
    donatedAt: Date | string;
    status?: $Enums.DonationStatus;
    volumeMl?: number | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bloodUnits?: Prisma.BloodUnitUncheckedCreateNestedManyWithoutDonationInput;
};
export type DonationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donationCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    donor?: Prisma.DonorUpdateOneRequiredWithoutDonationsNestedInput;
    facility?: Prisma.FacilityUpdateOneRequiredWithoutDonationsNestedInput;
    bloodUnits?: Prisma.BloodUnitUpdateManyWithoutDonationNestedInput;
};
export type DonationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donationCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donorId?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    donatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bloodUnits?: Prisma.BloodUnitUncheckedUpdateManyWithoutDonationNestedInput;
};
export type DonationCreateManyInput = {
    id?: string;
    donationCode: string;
    donorId: string;
    facilityId: string;
    donatedAt: Date | string;
    status?: $Enums.DonationStatus;
    volumeMl?: number | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DonationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donationCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donationCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donorId?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    donatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonationListRelationFilter = {
    every?: Prisma.DonationWhereInput;
    some?: Prisma.DonationWhereInput;
    none?: Prisma.DonationWhereInput;
};
export type DonationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DonationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    donationCode?: Prisma.SortOrder;
    donorId?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    donatedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    volumeMl?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DonationAvgOrderByAggregateInput = {
    volumeMl?: Prisma.SortOrder;
};
export type DonationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    donationCode?: Prisma.SortOrder;
    donorId?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    donatedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    volumeMl?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DonationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    donationCode?: Prisma.SortOrder;
    donorId?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    donatedAt?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    volumeMl?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DonationSumOrderByAggregateInput = {
    volumeMl?: Prisma.SortOrder;
};
export type DonationScalarRelationFilter = {
    is?: Prisma.DonationWhereInput;
    isNot?: Prisma.DonationWhereInput;
};
export type DonationCreateNestedManyWithoutFacilityInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutFacilityInput, Prisma.DonationUncheckedCreateWithoutFacilityInput> | Prisma.DonationCreateWithoutFacilityInput[] | Prisma.DonationUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutFacilityInput | Prisma.DonationCreateOrConnectWithoutFacilityInput[];
    createMany?: Prisma.DonationCreateManyFacilityInputEnvelope;
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
};
export type DonationUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutFacilityInput, Prisma.DonationUncheckedCreateWithoutFacilityInput> | Prisma.DonationCreateWithoutFacilityInput[] | Prisma.DonationUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutFacilityInput | Prisma.DonationCreateOrConnectWithoutFacilityInput[];
    createMany?: Prisma.DonationCreateManyFacilityInputEnvelope;
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
};
export type DonationUpdateManyWithoutFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutFacilityInput, Prisma.DonationUncheckedCreateWithoutFacilityInput> | Prisma.DonationCreateWithoutFacilityInput[] | Prisma.DonationUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutFacilityInput | Prisma.DonationCreateOrConnectWithoutFacilityInput[];
    upsert?: Prisma.DonationUpsertWithWhereUniqueWithoutFacilityInput | Prisma.DonationUpsertWithWhereUniqueWithoutFacilityInput[];
    createMany?: Prisma.DonationCreateManyFacilityInputEnvelope;
    set?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    disconnect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    delete?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    update?: Prisma.DonationUpdateWithWhereUniqueWithoutFacilityInput | Prisma.DonationUpdateWithWhereUniqueWithoutFacilityInput[];
    updateMany?: Prisma.DonationUpdateManyWithWhereWithoutFacilityInput | Prisma.DonationUpdateManyWithWhereWithoutFacilityInput[];
    deleteMany?: Prisma.DonationScalarWhereInput | Prisma.DonationScalarWhereInput[];
};
export type DonationUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutFacilityInput, Prisma.DonationUncheckedCreateWithoutFacilityInput> | Prisma.DonationCreateWithoutFacilityInput[] | Prisma.DonationUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutFacilityInput | Prisma.DonationCreateOrConnectWithoutFacilityInput[];
    upsert?: Prisma.DonationUpsertWithWhereUniqueWithoutFacilityInput | Prisma.DonationUpsertWithWhereUniqueWithoutFacilityInput[];
    createMany?: Prisma.DonationCreateManyFacilityInputEnvelope;
    set?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    disconnect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    delete?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    update?: Prisma.DonationUpdateWithWhereUniqueWithoutFacilityInput | Prisma.DonationUpdateWithWhereUniqueWithoutFacilityInput[];
    updateMany?: Prisma.DonationUpdateManyWithWhereWithoutFacilityInput | Prisma.DonationUpdateManyWithWhereWithoutFacilityInput[];
    deleteMany?: Prisma.DonationScalarWhereInput | Prisma.DonationScalarWhereInput[];
};
export type DonationCreateNestedManyWithoutDonorInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutDonorInput, Prisma.DonationUncheckedCreateWithoutDonorInput> | Prisma.DonationCreateWithoutDonorInput[] | Prisma.DonationUncheckedCreateWithoutDonorInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutDonorInput | Prisma.DonationCreateOrConnectWithoutDonorInput[];
    createMany?: Prisma.DonationCreateManyDonorInputEnvelope;
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
};
export type DonationUncheckedCreateNestedManyWithoutDonorInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutDonorInput, Prisma.DonationUncheckedCreateWithoutDonorInput> | Prisma.DonationCreateWithoutDonorInput[] | Prisma.DonationUncheckedCreateWithoutDonorInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutDonorInput | Prisma.DonationCreateOrConnectWithoutDonorInput[];
    createMany?: Prisma.DonationCreateManyDonorInputEnvelope;
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
};
export type DonationUpdateManyWithoutDonorNestedInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutDonorInput, Prisma.DonationUncheckedCreateWithoutDonorInput> | Prisma.DonationCreateWithoutDonorInput[] | Prisma.DonationUncheckedCreateWithoutDonorInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutDonorInput | Prisma.DonationCreateOrConnectWithoutDonorInput[];
    upsert?: Prisma.DonationUpsertWithWhereUniqueWithoutDonorInput | Prisma.DonationUpsertWithWhereUniqueWithoutDonorInput[];
    createMany?: Prisma.DonationCreateManyDonorInputEnvelope;
    set?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    disconnect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    delete?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    update?: Prisma.DonationUpdateWithWhereUniqueWithoutDonorInput | Prisma.DonationUpdateWithWhereUniqueWithoutDonorInput[];
    updateMany?: Prisma.DonationUpdateManyWithWhereWithoutDonorInput | Prisma.DonationUpdateManyWithWhereWithoutDonorInput[];
    deleteMany?: Prisma.DonationScalarWhereInput | Prisma.DonationScalarWhereInput[];
};
export type DonationUncheckedUpdateManyWithoutDonorNestedInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutDonorInput, Prisma.DonationUncheckedCreateWithoutDonorInput> | Prisma.DonationCreateWithoutDonorInput[] | Prisma.DonationUncheckedCreateWithoutDonorInput[];
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutDonorInput | Prisma.DonationCreateOrConnectWithoutDonorInput[];
    upsert?: Prisma.DonationUpsertWithWhereUniqueWithoutDonorInput | Prisma.DonationUpsertWithWhereUniqueWithoutDonorInput[];
    createMany?: Prisma.DonationCreateManyDonorInputEnvelope;
    set?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    disconnect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    delete?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    connect?: Prisma.DonationWhereUniqueInput | Prisma.DonationWhereUniqueInput[];
    update?: Prisma.DonationUpdateWithWhereUniqueWithoutDonorInput | Prisma.DonationUpdateWithWhereUniqueWithoutDonorInput[];
    updateMany?: Prisma.DonationUpdateManyWithWhereWithoutDonorInput | Prisma.DonationUpdateManyWithWhereWithoutDonorInput[];
    deleteMany?: Prisma.DonationScalarWhereInput | Prisma.DonationScalarWhereInput[];
};
export type EnumDonationStatusFieldUpdateOperationsInput = {
    set?: $Enums.DonationStatus;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DonationCreateNestedOneWithoutBloodUnitsInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutBloodUnitsInput, Prisma.DonationUncheckedCreateWithoutBloodUnitsInput>;
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutBloodUnitsInput;
    connect?: Prisma.DonationWhereUniqueInput;
};
export type DonationUpdateOneRequiredWithoutBloodUnitsNestedInput = {
    create?: Prisma.XOR<Prisma.DonationCreateWithoutBloodUnitsInput, Prisma.DonationUncheckedCreateWithoutBloodUnitsInput>;
    connectOrCreate?: Prisma.DonationCreateOrConnectWithoutBloodUnitsInput;
    upsert?: Prisma.DonationUpsertWithoutBloodUnitsInput;
    connect?: Prisma.DonationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DonationUpdateToOneWithWhereWithoutBloodUnitsInput, Prisma.DonationUpdateWithoutBloodUnitsInput>, Prisma.DonationUncheckedUpdateWithoutBloodUnitsInput>;
};
export type DonationCreateWithoutFacilityInput = {
    id?: string;
    donationCode: string;
    donatedAt: Date | string;
    status?: $Enums.DonationStatus;
    volumeMl?: number | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    donor: Prisma.DonorCreateNestedOneWithoutDonationsInput;
    bloodUnits?: Prisma.BloodUnitCreateNestedManyWithoutDonationInput;
};
export type DonationUncheckedCreateWithoutFacilityInput = {
    id?: string;
    donationCode: string;
    donorId: string;
    donatedAt: Date | string;
    status?: $Enums.DonationStatus;
    volumeMl?: number | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bloodUnits?: Prisma.BloodUnitUncheckedCreateNestedManyWithoutDonationInput;
};
export type DonationCreateOrConnectWithoutFacilityInput = {
    where: Prisma.DonationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DonationCreateWithoutFacilityInput, Prisma.DonationUncheckedCreateWithoutFacilityInput>;
};
export type DonationCreateManyFacilityInputEnvelope = {
    data: Prisma.DonationCreateManyFacilityInput | Prisma.DonationCreateManyFacilityInput[];
    skipDuplicates?: boolean;
};
export type DonationUpsertWithWhereUniqueWithoutFacilityInput = {
    where: Prisma.DonationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DonationUpdateWithoutFacilityInput, Prisma.DonationUncheckedUpdateWithoutFacilityInput>;
    create: Prisma.XOR<Prisma.DonationCreateWithoutFacilityInput, Prisma.DonationUncheckedCreateWithoutFacilityInput>;
};
export type DonationUpdateWithWhereUniqueWithoutFacilityInput = {
    where: Prisma.DonationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DonationUpdateWithoutFacilityInput, Prisma.DonationUncheckedUpdateWithoutFacilityInput>;
};
export type DonationUpdateManyWithWhereWithoutFacilityInput = {
    where: Prisma.DonationScalarWhereInput;
    data: Prisma.XOR<Prisma.DonationUpdateManyMutationInput, Prisma.DonationUncheckedUpdateManyWithoutFacilityInput>;
};
export type DonationScalarWhereInput = {
    AND?: Prisma.DonationScalarWhereInput | Prisma.DonationScalarWhereInput[];
    OR?: Prisma.DonationScalarWhereInput[];
    NOT?: Prisma.DonationScalarWhereInput | Prisma.DonationScalarWhereInput[];
    id?: Prisma.StringFilter<"Donation"> | string;
    donationCode?: Prisma.StringFilter<"Donation"> | string;
    donorId?: Prisma.StringFilter<"Donation"> | string;
    facilityId?: Prisma.StringFilter<"Donation"> | string;
    donatedAt?: Prisma.DateTimeFilter<"Donation"> | Date | string;
    status?: Prisma.EnumDonationStatusFilter<"Donation"> | $Enums.DonationStatus;
    volumeMl?: Prisma.IntNullableFilter<"Donation"> | number | null;
    notes?: Prisma.StringNullableFilter<"Donation"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"Donation"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Donation"> | Date | string;
};
export type DonationCreateWithoutDonorInput = {
    id?: string;
    donationCode: string;
    donatedAt: Date | string;
    status?: $Enums.DonationStatus;
    volumeMl?: number | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    facility: Prisma.FacilityCreateNestedOneWithoutDonationsInput;
    bloodUnits?: Prisma.BloodUnitCreateNestedManyWithoutDonationInput;
};
export type DonationUncheckedCreateWithoutDonorInput = {
    id?: string;
    donationCode: string;
    facilityId: string;
    donatedAt: Date | string;
    status?: $Enums.DonationStatus;
    volumeMl?: number | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bloodUnits?: Prisma.BloodUnitUncheckedCreateNestedManyWithoutDonationInput;
};
export type DonationCreateOrConnectWithoutDonorInput = {
    where: Prisma.DonationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DonationCreateWithoutDonorInput, Prisma.DonationUncheckedCreateWithoutDonorInput>;
};
export type DonationCreateManyDonorInputEnvelope = {
    data: Prisma.DonationCreateManyDonorInput | Prisma.DonationCreateManyDonorInput[];
    skipDuplicates?: boolean;
};
export type DonationUpsertWithWhereUniqueWithoutDonorInput = {
    where: Prisma.DonationWhereUniqueInput;
    update: Prisma.XOR<Prisma.DonationUpdateWithoutDonorInput, Prisma.DonationUncheckedUpdateWithoutDonorInput>;
    create: Prisma.XOR<Prisma.DonationCreateWithoutDonorInput, Prisma.DonationUncheckedCreateWithoutDonorInput>;
};
export type DonationUpdateWithWhereUniqueWithoutDonorInput = {
    where: Prisma.DonationWhereUniqueInput;
    data: Prisma.XOR<Prisma.DonationUpdateWithoutDonorInput, Prisma.DonationUncheckedUpdateWithoutDonorInput>;
};
export type DonationUpdateManyWithWhereWithoutDonorInput = {
    where: Prisma.DonationScalarWhereInput;
    data: Prisma.XOR<Prisma.DonationUpdateManyMutationInput, Prisma.DonationUncheckedUpdateManyWithoutDonorInput>;
};
export type DonationCreateWithoutBloodUnitsInput = {
    id?: string;
    donationCode: string;
    donatedAt: Date | string;
    status?: $Enums.DonationStatus;
    volumeMl?: number | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    donor: Prisma.DonorCreateNestedOneWithoutDonationsInput;
    facility: Prisma.FacilityCreateNestedOneWithoutDonationsInput;
};
export type DonationUncheckedCreateWithoutBloodUnitsInput = {
    id?: string;
    donationCode: string;
    donorId: string;
    facilityId: string;
    donatedAt: Date | string;
    status?: $Enums.DonationStatus;
    volumeMl?: number | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DonationCreateOrConnectWithoutBloodUnitsInput = {
    where: Prisma.DonationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DonationCreateWithoutBloodUnitsInput, Prisma.DonationUncheckedCreateWithoutBloodUnitsInput>;
};
export type DonationUpsertWithoutBloodUnitsInput = {
    update: Prisma.XOR<Prisma.DonationUpdateWithoutBloodUnitsInput, Prisma.DonationUncheckedUpdateWithoutBloodUnitsInput>;
    create: Prisma.XOR<Prisma.DonationCreateWithoutBloodUnitsInput, Prisma.DonationUncheckedCreateWithoutBloodUnitsInput>;
    where?: Prisma.DonationWhereInput;
};
export type DonationUpdateToOneWithWhereWithoutBloodUnitsInput = {
    where?: Prisma.DonationWhereInput;
    data: Prisma.XOR<Prisma.DonationUpdateWithoutBloodUnitsInput, Prisma.DonationUncheckedUpdateWithoutBloodUnitsInput>;
};
export type DonationUpdateWithoutBloodUnitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donationCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    donor?: Prisma.DonorUpdateOneRequiredWithoutDonationsNestedInput;
    facility?: Prisma.FacilityUpdateOneRequiredWithoutDonationsNestedInput;
};
export type DonationUncheckedUpdateWithoutBloodUnitsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donationCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donorId?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    donatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonationCreateManyFacilityInput = {
    id?: string;
    donationCode: string;
    donorId: string;
    donatedAt: Date | string;
    status?: $Enums.DonationStatus;
    volumeMl?: number | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DonationUpdateWithoutFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donationCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    donor?: Prisma.DonorUpdateOneRequiredWithoutDonationsNestedInput;
    bloodUnits?: Prisma.BloodUnitUpdateManyWithoutDonationNestedInput;
};
export type DonationUncheckedUpdateWithoutFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donationCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donorId?: Prisma.StringFieldUpdateOperationsInput | string;
    donatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bloodUnits?: Prisma.BloodUnitUncheckedUpdateManyWithoutDonationNestedInput;
};
export type DonationUncheckedUpdateManyWithoutFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donationCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donorId?: Prisma.StringFieldUpdateOperationsInput | string;
    donatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonationCreateManyDonorInput = {
    id?: string;
    donationCode: string;
    facilityId: string;
    donatedAt: Date | string;
    status?: $Enums.DonationStatus;
    volumeMl?: number | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DonationUpdateWithoutDonorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donationCode?: Prisma.StringFieldUpdateOperationsInput | string;
    donatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facility?: Prisma.FacilityUpdateOneRequiredWithoutDonationsNestedInput;
    bloodUnits?: Prisma.BloodUnitUpdateManyWithoutDonationNestedInput;
};
export type DonationUncheckedUpdateWithoutDonorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donationCode?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    donatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bloodUnits?: Prisma.BloodUnitUncheckedUpdateManyWithoutDonationNestedInput;
};
export type DonationUncheckedUpdateManyWithoutDonorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donationCode?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    donatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    status?: Prisma.EnumDonationStatusFieldUpdateOperationsInput | $Enums.DonationStatus;
    volumeMl?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonationCountOutputType = {
    bloodUnits: number;
};
export type DonationCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bloodUnits?: boolean | DonationCountOutputTypeCountBloodUnitsArgs;
};
export type DonationCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationCountOutputTypeSelect<ExtArgs> | null;
};
export type DonationCountOutputTypeCountBloodUnitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodUnitWhereInput;
};
export type DonationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    donationCode?: boolean;
    donorId?: boolean;
    facilityId?: boolean;
    donatedAt?: boolean;
    status?: boolean;
    volumeMl?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    donor?: boolean | Prisma.DonorDefaultArgs<ExtArgs>;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    bloodUnits?: boolean | Prisma.Donation$bloodUnitsArgs<ExtArgs>;
    _count?: boolean | Prisma.DonationCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["donation"]>;
export type DonationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    donationCode?: boolean;
    donorId?: boolean;
    facilityId?: boolean;
    donatedAt?: boolean;
    status?: boolean;
    volumeMl?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    donor?: boolean | Prisma.DonorDefaultArgs<ExtArgs>;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["donation"]>;
export type DonationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    donationCode?: boolean;
    donorId?: boolean;
    facilityId?: boolean;
    donatedAt?: boolean;
    status?: boolean;
    volumeMl?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    donor?: boolean | Prisma.DonorDefaultArgs<ExtArgs>;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["donation"]>;
export type DonationSelectScalar = {
    id?: boolean;
    donationCode?: boolean;
    donorId?: boolean;
    facilityId?: boolean;
    donatedAt?: boolean;
    status?: boolean;
    volumeMl?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DonationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "donationCode" | "donorId" | "facilityId" | "donatedAt" | "status" | "volumeMl" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["donation"]>;
export type DonationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    donor?: boolean | Prisma.DonorDefaultArgs<ExtArgs>;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    bloodUnits?: boolean | Prisma.Donation$bloodUnitsArgs<ExtArgs>;
    _count?: boolean | Prisma.DonationCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DonationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    donor?: boolean | Prisma.DonorDefaultArgs<ExtArgs>;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
};
export type DonationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    donor?: boolean | Prisma.DonorDefaultArgs<ExtArgs>;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
};
export type $DonationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Donation";
    objects: {
        donor: Prisma.$DonorPayload<ExtArgs>;
        facility: Prisma.$FacilityPayload<ExtArgs>;
        bloodUnits: Prisma.$BloodUnitPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        donationCode: string;
        donorId: string;
        facilityId: string;
        donatedAt: Date;
        status: $Enums.DonationStatus;
        volumeMl: number | null;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["donation"]>;
    composites: {};
};
export type DonationGetPayload<S extends boolean | null | undefined | DonationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DonationPayload, S>;
export type DonationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DonationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DonationCountAggregateInputType | true;
};
export interface DonationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Donation'];
        meta: {
            name: 'Donation';
        };
    };
    findUnique<T extends DonationFindUniqueArgs>(args: Prisma.SelectSubset<T, DonationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DonationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DonationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DonationFindFirstArgs>(args?: Prisma.SelectSubset<T, DonationFindFirstArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DonationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DonationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DonationFindManyArgs>(args?: Prisma.SelectSubset<T, DonationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DonationCreateArgs>(args: Prisma.SelectSubset<T, DonationCreateArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DonationCreateManyArgs>(args?: Prisma.SelectSubset<T, DonationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DonationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DonationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DonationDeleteArgs>(args: Prisma.SelectSubset<T, DonationDeleteArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DonationUpdateArgs>(args: Prisma.SelectSubset<T, DonationUpdateArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DonationDeleteManyArgs>(args?: Prisma.SelectSubset<T, DonationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DonationUpdateManyArgs>(args: Prisma.SelectSubset<T, DonationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DonationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DonationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DonationUpsertArgs>(args: Prisma.SelectSubset<T, DonationUpsertArgs<ExtArgs>>): Prisma.Prisma__DonationClient<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DonationCountArgs>(args?: Prisma.Subset<T, DonationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DonationCountAggregateOutputType> : number>;
    aggregate<T extends DonationAggregateArgs>(args: Prisma.Subset<T, DonationAggregateArgs>): Prisma.PrismaPromise<GetDonationAggregateType<T>>;
    groupBy<T extends DonationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DonationGroupByArgs['orderBy'];
    } : {
        orderBy?: DonationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DonationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DonationFieldRefs;
}
export interface Prisma__DonationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    donor<T extends Prisma.DonorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.DonorDefaultArgs<ExtArgs>>): Prisma.Prisma__DonorClient<runtime.Types.Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    facility<T extends Prisma.FacilityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FacilityDefaultArgs<ExtArgs>>): Prisma.Prisma__FacilityClient<runtime.Types.Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bloodUnits<T extends Prisma.Donation$bloodUnitsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Donation$bloodUnitsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DonationFieldRefs {
    readonly id: Prisma.FieldRef<"Donation", 'String'>;
    readonly donationCode: Prisma.FieldRef<"Donation", 'String'>;
    readonly donorId: Prisma.FieldRef<"Donation", 'String'>;
    readonly facilityId: Prisma.FieldRef<"Donation", 'String'>;
    readonly donatedAt: Prisma.FieldRef<"Donation", 'DateTime'>;
    readonly status: Prisma.FieldRef<"Donation", 'DonationStatus'>;
    readonly volumeMl: Prisma.FieldRef<"Donation", 'Int'>;
    readonly notes: Prisma.FieldRef<"Donation", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Donation", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Donation", 'DateTime'>;
}
export type DonationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    where: Prisma.DonationWhereUniqueInput;
};
export type DonationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    where: Prisma.DonationWhereUniqueInput;
};
export type DonationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    where?: Prisma.DonationWhereInput;
    orderBy?: Prisma.DonationOrderByWithRelationInput | Prisma.DonationOrderByWithRelationInput[];
    cursor?: Prisma.DonationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DonationScalarFieldEnum | Prisma.DonationScalarFieldEnum[];
};
export type DonationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    where?: Prisma.DonationWhereInput;
    orderBy?: Prisma.DonationOrderByWithRelationInput | Prisma.DonationOrderByWithRelationInput[];
    cursor?: Prisma.DonationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DonationScalarFieldEnum | Prisma.DonationScalarFieldEnum[];
};
export type DonationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    where?: Prisma.DonationWhereInput;
    orderBy?: Prisma.DonationOrderByWithRelationInput | Prisma.DonationOrderByWithRelationInput[];
    cursor?: Prisma.DonationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DonationScalarFieldEnum | Prisma.DonationScalarFieldEnum[];
};
export type DonationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DonationCreateInput, Prisma.DonationUncheckedCreateInput>;
};
export type DonationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DonationCreateManyInput | Prisma.DonationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DonationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    data: Prisma.DonationCreateManyInput | Prisma.DonationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DonationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DonationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DonationUpdateInput, Prisma.DonationUncheckedUpdateInput>;
    where: Prisma.DonationWhereUniqueInput;
};
export type DonationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DonationUpdateManyMutationInput, Prisma.DonationUncheckedUpdateManyInput>;
    where?: Prisma.DonationWhereInput;
    limit?: number;
};
export type DonationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DonationUpdateManyMutationInput, Prisma.DonationUncheckedUpdateManyInput>;
    where?: Prisma.DonationWhereInput;
    limit?: number;
    include?: Prisma.DonationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DonationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    where: Prisma.DonationWhereUniqueInput;
    create: Prisma.XOR<Prisma.DonationCreateInput, Prisma.DonationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DonationUpdateInput, Prisma.DonationUncheckedUpdateInput>;
};
export type DonationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
    where: Prisma.DonationWhereUniqueInput;
};
export type DonationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DonationWhereInput;
    limit?: number;
};
export type Donation$bloodUnitsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DonationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonationSelect<ExtArgs> | null;
    omit?: Prisma.DonationOmit<ExtArgs> | null;
    include?: Prisma.DonationInclude<ExtArgs> | null;
};
