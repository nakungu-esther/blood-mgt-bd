import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type HospitalRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$HospitalRequestPayload>;
export type AggregateHospitalRequest = {
    _count: HospitalRequestCountAggregateOutputType | null;
    _avg: HospitalRequestAvgAggregateOutputType | null;
    _sum: HospitalRequestSumAggregateOutputType | null;
    _min: HospitalRequestMinAggregateOutputType | null;
    _max: HospitalRequestMaxAggregateOutputType | null;
};
export type HospitalRequestAvgAggregateOutputType = {
    quantity: number | null;
};
export type HospitalRequestSumAggregateOutputType = {
    quantity: number | null;
};
export type HospitalRequestMinAggregateOutputType = {
    id: string | null;
    requestCode: string | null;
    facilityId: string | null;
    bloodGroup: $Enums.BloodGroup | null;
    component: $Enums.ComponentType | null;
    quantity: number | null;
    priority: $Enums.RequestPriority | null;
    status: $Enums.RequestStatus | null;
    requiredBy: Date | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HospitalRequestMaxAggregateOutputType = {
    id: string | null;
    requestCode: string | null;
    facilityId: string | null;
    bloodGroup: $Enums.BloodGroup | null;
    component: $Enums.ComponentType | null;
    quantity: number | null;
    priority: $Enums.RequestPriority | null;
    status: $Enums.RequestStatus | null;
    requiredBy: Date | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type HospitalRequestCountAggregateOutputType = {
    id: number;
    requestCode: number;
    facilityId: number;
    bloodGroup: number;
    component: number;
    quantity: number;
    priority: number;
    status: number;
    requiredBy: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type HospitalRequestAvgAggregateInputType = {
    quantity?: true;
};
export type HospitalRequestSumAggregateInputType = {
    quantity?: true;
};
export type HospitalRequestMinAggregateInputType = {
    id?: true;
    requestCode?: true;
    facilityId?: true;
    bloodGroup?: true;
    component?: true;
    quantity?: true;
    priority?: true;
    status?: true;
    requiredBy?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HospitalRequestMaxAggregateInputType = {
    id?: true;
    requestCode?: true;
    facilityId?: true;
    bloodGroup?: true;
    component?: true;
    quantity?: true;
    priority?: true;
    status?: true;
    requiredBy?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type HospitalRequestCountAggregateInputType = {
    id?: true;
    requestCode?: true;
    facilityId?: true;
    bloodGroup?: true;
    component?: true;
    quantity?: true;
    priority?: true;
    status?: true;
    requiredBy?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type HospitalRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HospitalRequestWhereInput;
    orderBy?: Prisma.HospitalRequestOrderByWithRelationInput | Prisma.HospitalRequestOrderByWithRelationInput[];
    cursor?: Prisma.HospitalRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | HospitalRequestCountAggregateInputType;
    _avg?: HospitalRequestAvgAggregateInputType;
    _sum?: HospitalRequestSumAggregateInputType;
    _min?: HospitalRequestMinAggregateInputType;
    _max?: HospitalRequestMaxAggregateInputType;
};
export type GetHospitalRequestAggregateType<T extends HospitalRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateHospitalRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateHospitalRequest[P]> : Prisma.GetScalarType<T[P], AggregateHospitalRequest[P]>;
};
export type HospitalRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HospitalRequestWhereInput;
    orderBy?: Prisma.HospitalRequestOrderByWithAggregationInput | Prisma.HospitalRequestOrderByWithAggregationInput[];
    by: Prisma.HospitalRequestScalarFieldEnum[] | Prisma.HospitalRequestScalarFieldEnum;
    having?: Prisma.HospitalRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: HospitalRequestCountAggregateInputType | true;
    _avg?: HospitalRequestAvgAggregateInputType;
    _sum?: HospitalRequestSumAggregateInputType;
    _min?: HospitalRequestMinAggregateInputType;
    _max?: HospitalRequestMaxAggregateInputType;
};
export type HospitalRequestGroupByOutputType = {
    id: string;
    requestCode: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    quantity: number;
    priority: $Enums.RequestPriority;
    status: $Enums.RequestStatus;
    requiredBy: Date | null;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: HospitalRequestCountAggregateOutputType | null;
    _avg: HospitalRequestAvgAggregateOutputType | null;
    _sum: HospitalRequestSumAggregateOutputType | null;
    _min: HospitalRequestMinAggregateOutputType | null;
    _max: HospitalRequestMaxAggregateOutputType | null;
};
export type GetHospitalRequestGroupByPayload<T extends HospitalRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<HospitalRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof HospitalRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], HospitalRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], HospitalRequestGroupByOutputType[P]>;
}>>;
export type HospitalRequestWhereInput = {
    AND?: Prisma.HospitalRequestWhereInput | Prisma.HospitalRequestWhereInput[];
    OR?: Prisma.HospitalRequestWhereInput[];
    NOT?: Prisma.HospitalRequestWhereInput | Prisma.HospitalRequestWhereInput[];
    id?: Prisma.StringFilter<"HospitalRequest"> | string;
    requestCode?: Prisma.StringFilter<"HospitalRequest"> | string;
    facilityId?: Prisma.StringFilter<"HospitalRequest"> | string;
    bloodGroup?: Prisma.EnumBloodGroupFilter<"HospitalRequest"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFilter<"HospitalRequest"> | $Enums.ComponentType;
    quantity?: Prisma.IntFilter<"HospitalRequest"> | number;
    priority?: Prisma.EnumRequestPriorityFilter<"HospitalRequest"> | $Enums.RequestPriority;
    status?: Prisma.EnumRequestStatusFilter<"HospitalRequest"> | $Enums.RequestStatus;
    requiredBy?: Prisma.DateTimeNullableFilter<"HospitalRequest"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"HospitalRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"HospitalRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HospitalRequest"> | Date | string;
    facility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
    reservations?: Prisma.BloodReservationListRelationFilter;
};
export type HospitalRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requestCode?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requiredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    facility?: Prisma.FacilityOrderByWithRelationInput;
    reservations?: Prisma.BloodReservationOrderByRelationAggregateInput;
};
export type HospitalRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    requestCode?: string;
    AND?: Prisma.HospitalRequestWhereInput | Prisma.HospitalRequestWhereInput[];
    OR?: Prisma.HospitalRequestWhereInput[];
    NOT?: Prisma.HospitalRequestWhereInput | Prisma.HospitalRequestWhereInput[];
    facilityId?: Prisma.StringFilter<"HospitalRequest"> | string;
    bloodGroup?: Prisma.EnumBloodGroupFilter<"HospitalRequest"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFilter<"HospitalRequest"> | $Enums.ComponentType;
    quantity?: Prisma.IntFilter<"HospitalRequest"> | number;
    priority?: Prisma.EnumRequestPriorityFilter<"HospitalRequest"> | $Enums.RequestPriority;
    status?: Prisma.EnumRequestStatusFilter<"HospitalRequest"> | $Enums.RequestStatus;
    requiredBy?: Prisma.DateTimeNullableFilter<"HospitalRequest"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"HospitalRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"HospitalRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HospitalRequest"> | Date | string;
    facility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
    reservations?: Prisma.BloodReservationListRelationFilter;
}, "id" | "requestCode">;
export type HospitalRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requestCode?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requiredBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.HospitalRequestCountOrderByAggregateInput;
    _avg?: Prisma.HospitalRequestAvgOrderByAggregateInput;
    _max?: Prisma.HospitalRequestMaxOrderByAggregateInput;
    _min?: Prisma.HospitalRequestMinOrderByAggregateInput;
    _sum?: Prisma.HospitalRequestSumOrderByAggregateInput;
};
export type HospitalRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.HospitalRequestScalarWhereWithAggregatesInput | Prisma.HospitalRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.HospitalRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.HospitalRequestScalarWhereWithAggregatesInput | Prisma.HospitalRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"HospitalRequest"> | string;
    requestCode?: Prisma.StringWithAggregatesFilter<"HospitalRequest"> | string;
    facilityId?: Prisma.StringWithAggregatesFilter<"HospitalRequest"> | string;
    bloodGroup?: Prisma.EnumBloodGroupWithAggregatesFilter<"HospitalRequest"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeWithAggregatesFilter<"HospitalRequest"> | $Enums.ComponentType;
    quantity?: Prisma.IntWithAggregatesFilter<"HospitalRequest"> | number;
    priority?: Prisma.EnumRequestPriorityWithAggregatesFilter<"HospitalRequest"> | $Enums.RequestPriority;
    status?: Prisma.EnumRequestStatusWithAggregatesFilter<"HospitalRequest"> | $Enums.RequestStatus;
    requiredBy?: Prisma.DateTimeNullableWithAggregatesFilter<"HospitalRequest"> | Date | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"HospitalRequest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"HospitalRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"HospitalRequest"> | Date | string;
};
export type HospitalRequestCreateInput = {
    id?: string;
    requestCode: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    quantity: number;
    priority?: $Enums.RequestPriority;
    status?: $Enums.RequestStatus;
    requiredBy?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    facility: Prisma.FacilityCreateNestedOneWithoutHospitalRequestsInput;
    reservations?: Prisma.BloodReservationCreateNestedManyWithoutRequestInput;
};
export type HospitalRequestUncheckedCreateInput = {
    id?: string;
    requestCode: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    quantity: number;
    priority?: $Enums.RequestPriority;
    status?: $Enums.RequestStatus;
    requiredBy?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reservations?: Prisma.BloodReservationUncheckedCreateNestedManyWithoutRequestInput;
};
export type HospitalRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.EnumRequestPriorityFieldUpdateOperationsInput | $Enums.RequestPriority;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    requiredBy?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facility?: Prisma.FacilityUpdateOneRequiredWithoutHospitalRequestsNestedInput;
    reservations?: Prisma.BloodReservationUpdateManyWithoutRequestNestedInput;
};
export type HospitalRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestCode?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.EnumRequestPriorityFieldUpdateOperationsInput | $Enums.RequestPriority;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    requiredBy?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservations?: Prisma.BloodReservationUncheckedUpdateManyWithoutRequestNestedInput;
};
export type HospitalRequestCreateManyInput = {
    id?: string;
    requestCode: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    quantity: number;
    priority?: $Enums.RequestPriority;
    status?: $Enums.RequestStatus;
    requiredBy?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HospitalRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.EnumRequestPriorityFieldUpdateOperationsInput | $Enums.RequestPriority;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    requiredBy?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HospitalRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestCode?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.EnumRequestPriorityFieldUpdateOperationsInput | $Enums.RequestPriority;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    requiredBy?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HospitalRequestListRelationFilter = {
    every?: Prisma.HospitalRequestWhereInput;
    some?: Prisma.HospitalRequestWhereInput;
    none?: Prisma.HospitalRequestWhereInput;
};
export type HospitalRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type HospitalRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestCode?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requiredBy?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HospitalRequestAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type HospitalRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestCode?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requiredBy?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HospitalRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestCode?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requiredBy?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type HospitalRequestSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
};
export type HospitalRequestScalarRelationFilter = {
    is?: Prisma.HospitalRequestWhereInput;
    isNot?: Prisma.HospitalRequestWhereInput;
};
export type HospitalRequestCreateNestedManyWithoutFacilityInput = {
    create?: Prisma.XOR<Prisma.HospitalRequestCreateWithoutFacilityInput, Prisma.HospitalRequestUncheckedCreateWithoutFacilityInput> | Prisma.HospitalRequestCreateWithoutFacilityInput[] | Prisma.HospitalRequestUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.HospitalRequestCreateOrConnectWithoutFacilityInput | Prisma.HospitalRequestCreateOrConnectWithoutFacilityInput[];
    createMany?: Prisma.HospitalRequestCreateManyFacilityInputEnvelope;
    connect?: Prisma.HospitalRequestWhereUniqueInput | Prisma.HospitalRequestWhereUniqueInput[];
};
export type HospitalRequestUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: Prisma.XOR<Prisma.HospitalRequestCreateWithoutFacilityInput, Prisma.HospitalRequestUncheckedCreateWithoutFacilityInput> | Prisma.HospitalRequestCreateWithoutFacilityInput[] | Prisma.HospitalRequestUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.HospitalRequestCreateOrConnectWithoutFacilityInput | Prisma.HospitalRequestCreateOrConnectWithoutFacilityInput[];
    createMany?: Prisma.HospitalRequestCreateManyFacilityInputEnvelope;
    connect?: Prisma.HospitalRequestWhereUniqueInput | Prisma.HospitalRequestWhereUniqueInput[];
};
export type HospitalRequestUpdateManyWithoutFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.HospitalRequestCreateWithoutFacilityInput, Prisma.HospitalRequestUncheckedCreateWithoutFacilityInput> | Prisma.HospitalRequestCreateWithoutFacilityInput[] | Prisma.HospitalRequestUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.HospitalRequestCreateOrConnectWithoutFacilityInput | Prisma.HospitalRequestCreateOrConnectWithoutFacilityInput[];
    upsert?: Prisma.HospitalRequestUpsertWithWhereUniqueWithoutFacilityInput | Prisma.HospitalRequestUpsertWithWhereUniqueWithoutFacilityInput[];
    createMany?: Prisma.HospitalRequestCreateManyFacilityInputEnvelope;
    set?: Prisma.HospitalRequestWhereUniqueInput | Prisma.HospitalRequestWhereUniqueInput[];
    disconnect?: Prisma.HospitalRequestWhereUniqueInput | Prisma.HospitalRequestWhereUniqueInput[];
    delete?: Prisma.HospitalRequestWhereUniqueInput | Prisma.HospitalRequestWhereUniqueInput[];
    connect?: Prisma.HospitalRequestWhereUniqueInput | Prisma.HospitalRequestWhereUniqueInput[];
    update?: Prisma.HospitalRequestUpdateWithWhereUniqueWithoutFacilityInput | Prisma.HospitalRequestUpdateWithWhereUniqueWithoutFacilityInput[];
    updateMany?: Prisma.HospitalRequestUpdateManyWithWhereWithoutFacilityInput | Prisma.HospitalRequestUpdateManyWithWhereWithoutFacilityInput[];
    deleteMany?: Prisma.HospitalRequestScalarWhereInput | Prisma.HospitalRequestScalarWhereInput[];
};
export type HospitalRequestUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.HospitalRequestCreateWithoutFacilityInput, Prisma.HospitalRequestUncheckedCreateWithoutFacilityInput> | Prisma.HospitalRequestCreateWithoutFacilityInput[] | Prisma.HospitalRequestUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.HospitalRequestCreateOrConnectWithoutFacilityInput | Prisma.HospitalRequestCreateOrConnectWithoutFacilityInput[];
    upsert?: Prisma.HospitalRequestUpsertWithWhereUniqueWithoutFacilityInput | Prisma.HospitalRequestUpsertWithWhereUniqueWithoutFacilityInput[];
    createMany?: Prisma.HospitalRequestCreateManyFacilityInputEnvelope;
    set?: Prisma.HospitalRequestWhereUniqueInput | Prisma.HospitalRequestWhereUniqueInput[];
    disconnect?: Prisma.HospitalRequestWhereUniqueInput | Prisma.HospitalRequestWhereUniqueInput[];
    delete?: Prisma.HospitalRequestWhereUniqueInput | Prisma.HospitalRequestWhereUniqueInput[];
    connect?: Prisma.HospitalRequestWhereUniqueInput | Prisma.HospitalRequestWhereUniqueInput[];
    update?: Prisma.HospitalRequestUpdateWithWhereUniqueWithoutFacilityInput | Prisma.HospitalRequestUpdateWithWhereUniqueWithoutFacilityInput[];
    updateMany?: Prisma.HospitalRequestUpdateManyWithWhereWithoutFacilityInput | Prisma.HospitalRequestUpdateManyWithWhereWithoutFacilityInput[];
    deleteMany?: Prisma.HospitalRequestScalarWhereInput | Prisma.HospitalRequestScalarWhereInput[];
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumRequestPriorityFieldUpdateOperationsInput = {
    set?: $Enums.RequestPriority;
};
export type EnumRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.RequestStatus;
};
export type HospitalRequestCreateNestedOneWithoutReservationsInput = {
    create?: Prisma.XOR<Prisma.HospitalRequestCreateWithoutReservationsInput, Prisma.HospitalRequestUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.HospitalRequestCreateOrConnectWithoutReservationsInput;
    connect?: Prisma.HospitalRequestWhereUniqueInput;
};
export type HospitalRequestUpdateOneRequiredWithoutReservationsNestedInput = {
    create?: Prisma.XOR<Prisma.HospitalRequestCreateWithoutReservationsInput, Prisma.HospitalRequestUncheckedCreateWithoutReservationsInput>;
    connectOrCreate?: Prisma.HospitalRequestCreateOrConnectWithoutReservationsInput;
    upsert?: Prisma.HospitalRequestUpsertWithoutReservationsInput;
    connect?: Prisma.HospitalRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.HospitalRequestUpdateToOneWithWhereWithoutReservationsInput, Prisma.HospitalRequestUpdateWithoutReservationsInput>, Prisma.HospitalRequestUncheckedUpdateWithoutReservationsInput>;
};
export type HospitalRequestCreateWithoutFacilityInput = {
    id?: string;
    requestCode: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    quantity: number;
    priority?: $Enums.RequestPriority;
    status?: $Enums.RequestStatus;
    requiredBy?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reservations?: Prisma.BloodReservationCreateNestedManyWithoutRequestInput;
};
export type HospitalRequestUncheckedCreateWithoutFacilityInput = {
    id?: string;
    requestCode: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    quantity: number;
    priority?: $Enums.RequestPriority;
    status?: $Enums.RequestStatus;
    requiredBy?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reservations?: Prisma.BloodReservationUncheckedCreateNestedManyWithoutRequestInput;
};
export type HospitalRequestCreateOrConnectWithoutFacilityInput = {
    where: Prisma.HospitalRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.HospitalRequestCreateWithoutFacilityInput, Prisma.HospitalRequestUncheckedCreateWithoutFacilityInput>;
};
export type HospitalRequestCreateManyFacilityInputEnvelope = {
    data: Prisma.HospitalRequestCreateManyFacilityInput | Prisma.HospitalRequestCreateManyFacilityInput[];
    skipDuplicates?: boolean;
};
export type HospitalRequestUpsertWithWhereUniqueWithoutFacilityInput = {
    where: Prisma.HospitalRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.HospitalRequestUpdateWithoutFacilityInput, Prisma.HospitalRequestUncheckedUpdateWithoutFacilityInput>;
    create: Prisma.XOR<Prisma.HospitalRequestCreateWithoutFacilityInput, Prisma.HospitalRequestUncheckedCreateWithoutFacilityInput>;
};
export type HospitalRequestUpdateWithWhereUniqueWithoutFacilityInput = {
    where: Prisma.HospitalRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.HospitalRequestUpdateWithoutFacilityInput, Prisma.HospitalRequestUncheckedUpdateWithoutFacilityInput>;
};
export type HospitalRequestUpdateManyWithWhereWithoutFacilityInput = {
    where: Prisma.HospitalRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.HospitalRequestUpdateManyMutationInput, Prisma.HospitalRequestUncheckedUpdateManyWithoutFacilityInput>;
};
export type HospitalRequestScalarWhereInput = {
    AND?: Prisma.HospitalRequestScalarWhereInput | Prisma.HospitalRequestScalarWhereInput[];
    OR?: Prisma.HospitalRequestScalarWhereInput[];
    NOT?: Prisma.HospitalRequestScalarWhereInput | Prisma.HospitalRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"HospitalRequest"> | string;
    requestCode?: Prisma.StringFilter<"HospitalRequest"> | string;
    facilityId?: Prisma.StringFilter<"HospitalRequest"> | string;
    bloodGroup?: Prisma.EnumBloodGroupFilter<"HospitalRequest"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFilter<"HospitalRequest"> | $Enums.ComponentType;
    quantity?: Prisma.IntFilter<"HospitalRequest"> | number;
    priority?: Prisma.EnumRequestPriorityFilter<"HospitalRequest"> | $Enums.RequestPriority;
    status?: Prisma.EnumRequestStatusFilter<"HospitalRequest"> | $Enums.RequestStatus;
    requiredBy?: Prisma.DateTimeNullableFilter<"HospitalRequest"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"HospitalRequest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"HospitalRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"HospitalRequest"> | Date | string;
};
export type HospitalRequestCreateWithoutReservationsInput = {
    id?: string;
    requestCode: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    quantity: number;
    priority?: $Enums.RequestPriority;
    status?: $Enums.RequestStatus;
    requiredBy?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    facility: Prisma.FacilityCreateNestedOneWithoutHospitalRequestsInput;
};
export type HospitalRequestUncheckedCreateWithoutReservationsInput = {
    id?: string;
    requestCode: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    quantity: number;
    priority?: $Enums.RequestPriority;
    status?: $Enums.RequestStatus;
    requiredBy?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HospitalRequestCreateOrConnectWithoutReservationsInput = {
    where: Prisma.HospitalRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.HospitalRequestCreateWithoutReservationsInput, Prisma.HospitalRequestUncheckedCreateWithoutReservationsInput>;
};
export type HospitalRequestUpsertWithoutReservationsInput = {
    update: Prisma.XOR<Prisma.HospitalRequestUpdateWithoutReservationsInput, Prisma.HospitalRequestUncheckedUpdateWithoutReservationsInput>;
    create: Prisma.XOR<Prisma.HospitalRequestCreateWithoutReservationsInput, Prisma.HospitalRequestUncheckedCreateWithoutReservationsInput>;
    where?: Prisma.HospitalRequestWhereInput;
};
export type HospitalRequestUpdateToOneWithWhereWithoutReservationsInput = {
    where?: Prisma.HospitalRequestWhereInput;
    data: Prisma.XOR<Prisma.HospitalRequestUpdateWithoutReservationsInput, Prisma.HospitalRequestUncheckedUpdateWithoutReservationsInput>;
};
export type HospitalRequestUpdateWithoutReservationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.EnumRequestPriorityFieldUpdateOperationsInput | $Enums.RequestPriority;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    requiredBy?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facility?: Prisma.FacilityUpdateOneRequiredWithoutHospitalRequestsNestedInput;
};
export type HospitalRequestUncheckedUpdateWithoutReservationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestCode?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.EnumRequestPriorityFieldUpdateOperationsInput | $Enums.RequestPriority;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    requiredBy?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HospitalRequestCreateManyFacilityInput = {
    id?: string;
    requestCode: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    quantity: number;
    priority?: $Enums.RequestPriority;
    status?: $Enums.RequestStatus;
    requiredBy?: Date | string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type HospitalRequestUpdateWithoutFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.EnumRequestPriorityFieldUpdateOperationsInput | $Enums.RequestPriority;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    requiredBy?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservations?: Prisma.BloodReservationUpdateManyWithoutRequestNestedInput;
};
export type HospitalRequestUncheckedUpdateWithoutFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.EnumRequestPriorityFieldUpdateOperationsInput | $Enums.RequestPriority;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    requiredBy?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reservations?: Prisma.BloodReservationUncheckedUpdateManyWithoutRequestNestedInput;
};
export type HospitalRequestUncheckedUpdateManyWithoutFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priority?: Prisma.EnumRequestPriorityFieldUpdateOperationsInput | $Enums.RequestPriority;
    status?: Prisma.EnumRequestStatusFieldUpdateOperationsInput | $Enums.RequestStatus;
    requiredBy?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type HospitalRequestCountOutputType = {
    reservations: number;
};
export type HospitalRequestCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reservations?: boolean | HospitalRequestCountOutputTypeCountReservationsArgs;
};
export type HospitalRequestCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalRequestCountOutputTypeSelect<ExtArgs> | null;
};
export type HospitalRequestCountOutputTypeCountReservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodReservationWhereInput;
};
export type HospitalRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestCode?: boolean;
    facilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    quantity?: boolean;
    priority?: boolean;
    status?: boolean;
    requiredBy?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    reservations?: boolean | Prisma.HospitalRequest$reservationsArgs<ExtArgs>;
    _count?: boolean | Prisma.HospitalRequestCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hospitalRequest"]>;
export type HospitalRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestCode?: boolean;
    facilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    quantity?: boolean;
    priority?: boolean;
    status?: boolean;
    requiredBy?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hospitalRequest"]>;
export type HospitalRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestCode?: boolean;
    facilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    quantity?: boolean;
    priority?: boolean;
    status?: boolean;
    requiredBy?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["hospitalRequest"]>;
export type HospitalRequestSelectScalar = {
    id?: boolean;
    requestCode?: boolean;
    facilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    quantity?: boolean;
    priority?: boolean;
    status?: boolean;
    requiredBy?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type HospitalRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requestCode" | "facilityId" | "bloodGroup" | "component" | "quantity" | "priority" | "status" | "requiredBy" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["hospitalRequest"]>;
export type HospitalRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    reservations?: boolean | Prisma.HospitalRequest$reservationsArgs<ExtArgs>;
    _count?: boolean | Prisma.HospitalRequestCountOutputTypeDefaultArgs<ExtArgs>;
};
export type HospitalRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
};
export type HospitalRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
};
export type $HospitalRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "HospitalRequest";
    objects: {
        facility: Prisma.$FacilityPayload<ExtArgs>;
        reservations: Prisma.$BloodReservationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        requestCode: string;
        facilityId: string;
        bloodGroup: $Enums.BloodGroup;
        component: $Enums.ComponentType;
        quantity: number;
        priority: $Enums.RequestPriority;
        status: $Enums.RequestStatus;
        requiredBy: Date | null;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["hospitalRequest"]>;
    composites: {};
};
export type HospitalRequestGetPayload<S extends boolean | null | undefined | HospitalRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$HospitalRequestPayload, S>;
export type HospitalRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<HospitalRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: HospitalRequestCountAggregateInputType | true;
};
export interface HospitalRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['HospitalRequest'];
        meta: {
            name: 'HospitalRequest';
        };
    };
    findUnique<T extends HospitalRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, HospitalRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__HospitalRequestClient<runtime.Types.Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends HospitalRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, HospitalRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__HospitalRequestClient<runtime.Types.Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends HospitalRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, HospitalRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__HospitalRequestClient<runtime.Types.Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends HospitalRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, HospitalRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__HospitalRequestClient<runtime.Types.Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends HospitalRequestFindManyArgs>(args?: Prisma.SelectSubset<T, HospitalRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends HospitalRequestCreateArgs>(args: Prisma.SelectSubset<T, HospitalRequestCreateArgs<ExtArgs>>): Prisma.Prisma__HospitalRequestClient<runtime.Types.Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends HospitalRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, HospitalRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends HospitalRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, HospitalRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends HospitalRequestDeleteArgs>(args: Prisma.SelectSubset<T, HospitalRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__HospitalRequestClient<runtime.Types.Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends HospitalRequestUpdateArgs>(args: Prisma.SelectSubset<T, HospitalRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__HospitalRequestClient<runtime.Types.Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends HospitalRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, HospitalRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends HospitalRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, HospitalRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends HospitalRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, HospitalRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends HospitalRequestUpsertArgs>(args: Prisma.SelectSubset<T, HospitalRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__HospitalRequestClient<runtime.Types.Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends HospitalRequestCountArgs>(args?: Prisma.Subset<T, HospitalRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], HospitalRequestCountAggregateOutputType> : number>;
    aggregate<T extends HospitalRequestAggregateArgs>(args: Prisma.Subset<T, HospitalRequestAggregateArgs>): Prisma.PrismaPromise<GetHospitalRequestAggregateType<T>>;
    groupBy<T extends HospitalRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: HospitalRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: HospitalRequestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, HospitalRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHospitalRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: HospitalRequestFieldRefs;
}
export interface Prisma__HospitalRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    facility<T extends Prisma.FacilityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FacilityDefaultArgs<ExtArgs>>): Prisma.Prisma__FacilityClient<runtime.Types.Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reservations<T extends Prisma.HospitalRequest$reservationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HospitalRequest$reservationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface HospitalRequestFieldRefs {
    readonly id: Prisma.FieldRef<"HospitalRequest", 'String'>;
    readonly requestCode: Prisma.FieldRef<"HospitalRequest", 'String'>;
    readonly facilityId: Prisma.FieldRef<"HospitalRequest", 'String'>;
    readonly bloodGroup: Prisma.FieldRef<"HospitalRequest", 'BloodGroup'>;
    readonly component: Prisma.FieldRef<"HospitalRequest", 'ComponentType'>;
    readonly quantity: Prisma.FieldRef<"HospitalRequest", 'Int'>;
    readonly priority: Prisma.FieldRef<"HospitalRequest", 'RequestPriority'>;
    readonly status: Prisma.FieldRef<"HospitalRequest", 'RequestStatus'>;
    readonly requiredBy: Prisma.FieldRef<"HospitalRequest", 'DateTime'>;
    readonly notes: Prisma.FieldRef<"HospitalRequest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"HospitalRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"HospitalRequest", 'DateTime'>;
}
export type HospitalRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalRequestSelect<ExtArgs> | null;
    omit?: Prisma.HospitalRequestOmit<ExtArgs> | null;
    include?: Prisma.HospitalRequestInclude<ExtArgs> | null;
    where: Prisma.HospitalRequestWhereUniqueInput;
};
export type HospitalRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalRequestSelect<ExtArgs> | null;
    omit?: Prisma.HospitalRequestOmit<ExtArgs> | null;
    include?: Prisma.HospitalRequestInclude<ExtArgs> | null;
    where: Prisma.HospitalRequestWhereUniqueInput;
};
export type HospitalRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalRequestSelect<ExtArgs> | null;
    omit?: Prisma.HospitalRequestOmit<ExtArgs> | null;
    include?: Prisma.HospitalRequestInclude<ExtArgs> | null;
    where?: Prisma.HospitalRequestWhereInput;
    orderBy?: Prisma.HospitalRequestOrderByWithRelationInput | Prisma.HospitalRequestOrderByWithRelationInput[];
    cursor?: Prisma.HospitalRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HospitalRequestScalarFieldEnum | Prisma.HospitalRequestScalarFieldEnum[];
};
export type HospitalRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalRequestSelect<ExtArgs> | null;
    omit?: Prisma.HospitalRequestOmit<ExtArgs> | null;
    include?: Prisma.HospitalRequestInclude<ExtArgs> | null;
    where?: Prisma.HospitalRequestWhereInput;
    orderBy?: Prisma.HospitalRequestOrderByWithRelationInput | Prisma.HospitalRequestOrderByWithRelationInput[];
    cursor?: Prisma.HospitalRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HospitalRequestScalarFieldEnum | Prisma.HospitalRequestScalarFieldEnum[];
};
export type HospitalRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalRequestSelect<ExtArgs> | null;
    omit?: Prisma.HospitalRequestOmit<ExtArgs> | null;
    include?: Prisma.HospitalRequestInclude<ExtArgs> | null;
    where?: Prisma.HospitalRequestWhereInput;
    orderBy?: Prisma.HospitalRequestOrderByWithRelationInput | Prisma.HospitalRequestOrderByWithRelationInput[];
    cursor?: Prisma.HospitalRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.HospitalRequestScalarFieldEnum | Prisma.HospitalRequestScalarFieldEnum[];
};
export type HospitalRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalRequestSelect<ExtArgs> | null;
    omit?: Prisma.HospitalRequestOmit<ExtArgs> | null;
    include?: Prisma.HospitalRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HospitalRequestCreateInput, Prisma.HospitalRequestUncheckedCreateInput>;
};
export type HospitalRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.HospitalRequestCreateManyInput | Prisma.HospitalRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type HospitalRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalRequestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HospitalRequestOmit<ExtArgs> | null;
    data: Prisma.HospitalRequestCreateManyInput | Prisma.HospitalRequestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.HospitalRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type HospitalRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalRequestSelect<ExtArgs> | null;
    omit?: Prisma.HospitalRequestOmit<ExtArgs> | null;
    include?: Prisma.HospitalRequestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HospitalRequestUpdateInput, Prisma.HospitalRequestUncheckedUpdateInput>;
    where: Prisma.HospitalRequestWhereUniqueInput;
};
export type HospitalRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.HospitalRequestUpdateManyMutationInput, Prisma.HospitalRequestUncheckedUpdateManyInput>;
    where?: Prisma.HospitalRequestWhereInput;
    limit?: number;
};
export type HospitalRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.HospitalRequestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.HospitalRequestUpdateManyMutationInput, Prisma.HospitalRequestUncheckedUpdateManyInput>;
    where?: Prisma.HospitalRequestWhereInput;
    limit?: number;
    include?: Prisma.HospitalRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type HospitalRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalRequestSelect<ExtArgs> | null;
    omit?: Prisma.HospitalRequestOmit<ExtArgs> | null;
    include?: Prisma.HospitalRequestInclude<ExtArgs> | null;
    where: Prisma.HospitalRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.HospitalRequestCreateInput, Prisma.HospitalRequestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.HospitalRequestUpdateInput, Prisma.HospitalRequestUncheckedUpdateInput>;
};
export type HospitalRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalRequestSelect<ExtArgs> | null;
    omit?: Prisma.HospitalRequestOmit<ExtArgs> | null;
    include?: Prisma.HospitalRequestInclude<ExtArgs> | null;
    where: Prisma.HospitalRequestWhereUniqueInput;
};
export type HospitalRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.HospitalRequestWhereInput;
    limit?: number;
};
export type HospitalRequest$reservationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type HospitalRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.HospitalRequestSelect<ExtArgs> | null;
    omit?: Prisma.HospitalRequestOmit<ExtArgs> | null;
    include?: Prisma.HospitalRequestInclude<ExtArgs> | null;
};
