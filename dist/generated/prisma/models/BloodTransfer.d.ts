import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BloodTransferModel = runtime.Types.Result.DefaultSelection<Prisma.$BloodTransferPayload>;
export type AggregateBloodTransfer = {
    _count: BloodTransferCountAggregateOutputType | null;
    _min: BloodTransferMinAggregateOutputType | null;
    _max: BloodTransferMaxAggregateOutputType | null;
};
export type BloodTransferMinAggregateOutputType = {
    id: string | null;
    transferCode: string | null;
    bloodUnitId: string | null;
    sourceFacilityId: string | null;
    destinationFacilityId: string | null;
    status: $Enums.TransferStatus | null;
    requestedAt: Date | null;
    approvedAt: Date | null;
    dispatchedAt: Date | null;
    receivedAt: Date | null;
    notes: string | null;
};
export type BloodTransferMaxAggregateOutputType = {
    id: string | null;
    transferCode: string | null;
    bloodUnitId: string | null;
    sourceFacilityId: string | null;
    destinationFacilityId: string | null;
    status: $Enums.TransferStatus | null;
    requestedAt: Date | null;
    approvedAt: Date | null;
    dispatchedAt: Date | null;
    receivedAt: Date | null;
    notes: string | null;
};
export type BloodTransferCountAggregateOutputType = {
    id: number;
    transferCode: number;
    bloodUnitId: number;
    sourceFacilityId: number;
    destinationFacilityId: number;
    status: number;
    requestedAt: number;
    approvedAt: number;
    dispatchedAt: number;
    receivedAt: number;
    notes: number;
    _all: number;
};
export type BloodTransferMinAggregateInputType = {
    id?: true;
    transferCode?: true;
    bloodUnitId?: true;
    sourceFacilityId?: true;
    destinationFacilityId?: true;
    status?: true;
    requestedAt?: true;
    approvedAt?: true;
    dispatchedAt?: true;
    receivedAt?: true;
    notes?: true;
};
export type BloodTransferMaxAggregateInputType = {
    id?: true;
    transferCode?: true;
    bloodUnitId?: true;
    sourceFacilityId?: true;
    destinationFacilityId?: true;
    status?: true;
    requestedAt?: true;
    approvedAt?: true;
    dispatchedAt?: true;
    receivedAt?: true;
    notes?: true;
};
export type BloodTransferCountAggregateInputType = {
    id?: true;
    transferCode?: true;
    bloodUnitId?: true;
    sourceFacilityId?: true;
    destinationFacilityId?: true;
    status?: true;
    requestedAt?: true;
    approvedAt?: true;
    dispatchedAt?: true;
    receivedAt?: true;
    notes?: true;
    _all?: true;
};
export type BloodTransferAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodTransferWhereInput;
    orderBy?: Prisma.BloodTransferOrderByWithRelationInput | Prisma.BloodTransferOrderByWithRelationInput[];
    cursor?: Prisma.BloodTransferWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BloodTransferCountAggregateInputType;
    _min?: BloodTransferMinAggregateInputType;
    _max?: BloodTransferMaxAggregateInputType;
};
export type GetBloodTransferAggregateType<T extends BloodTransferAggregateArgs> = {
    [P in keyof T & keyof AggregateBloodTransfer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBloodTransfer[P]> : Prisma.GetScalarType<T[P], AggregateBloodTransfer[P]>;
};
export type BloodTransferGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodTransferWhereInput;
    orderBy?: Prisma.BloodTransferOrderByWithAggregationInput | Prisma.BloodTransferOrderByWithAggregationInput[];
    by: Prisma.BloodTransferScalarFieldEnum[] | Prisma.BloodTransferScalarFieldEnum;
    having?: Prisma.BloodTransferScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BloodTransferCountAggregateInputType | true;
    _min?: BloodTransferMinAggregateInputType;
    _max?: BloodTransferMaxAggregateInputType;
};
export type BloodTransferGroupByOutputType = {
    id: string;
    transferCode: string;
    bloodUnitId: string;
    sourceFacilityId: string;
    destinationFacilityId: string;
    status: $Enums.TransferStatus;
    requestedAt: Date;
    approvedAt: Date | null;
    dispatchedAt: Date | null;
    receivedAt: Date | null;
    notes: string | null;
    _count: BloodTransferCountAggregateOutputType | null;
    _min: BloodTransferMinAggregateOutputType | null;
    _max: BloodTransferMaxAggregateOutputType | null;
};
export type GetBloodTransferGroupByPayload<T extends BloodTransferGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BloodTransferGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BloodTransferGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BloodTransferGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BloodTransferGroupByOutputType[P]>;
}>>;
export type BloodTransferWhereInput = {
    AND?: Prisma.BloodTransferWhereInput | Prisma.BloodTransferWhereInput[];
    OR?: Prisma.BloodTransferWhereInput[];
    NOT?: Prisma.BloodTransferWhereInput | Prisma.BloodTransferWhereInput[];
    id?: Prisma.StringFilter<"BloodTransfer"> | string;
    transferCode?: Prisma.StringFilter<"BloodTransfer"> | string;
    bloodUnitId?: Prisma.StringFilter<"BloodTransfer"> | string;
    sourceFacilityId?: Prisma.StringFilter<"BloodTransfer"> | string;
    destinationFacilityId?: Prisma.StringFilter<"BloodTransfer"> | string;
    status?: Prisma.EnumTransferStatusFilter<"BloodTransfer"> | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFilter<"BloodTransfer"> | Date | string;
    approvedAt?: Prisma.DateTimeNullableFilter<"BloodTransfer"> | Date | string | null;
    dispatchedAt?: Prisma.DateTimeNullableFilter<"BloodTransfer"> | Date | string | null;
    receivedAt?: Prisma.DateTimeNullableFilter<"BloodTransfer"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"BloodTransfer"> | string | null;
    bloodUnit?: Prisma.XOR<Prisma.BloodUnitScalarRelationFilter, Prisma.BloodUnitWhereInput>;
    sourceFacility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
    destinationFacility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
};
export type BloodTransferOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    transferCode?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    sourceFacilityId?: Prisma.SortOrder;
    destinationFacilityId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    dispatchedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    receivedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    bloodUnit?: Prisma.BloodUnitOrderByWithRelationInput;
    sourceFacility?: Prisma.FacilityOrderByWithRelationInput;
    destinationFacility?: Prisma.FacilityOrderByWithRelationInput;
};
export type BloodTransferWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    transferCode?: string;
    AND?: Prisma.BloodTransferWhereInput | Prisma.BloodTransferWhereInput[];
    OR?: Prisma.BloodTransferWhereInput[];
    NOT?: Prisma.BloodTransferWhereInput | Prisma.BloodTransferWhereInput[];
    bloodUnitId?: Prisma.StringFilter<"BloodTransfer"> | string;
    sourceFacilityId?: Prisma.StringFilter<"BloodTransfer"> | string;
    destinationFacilityId?: Prisma.StringFilter<"BloodTransfer"> | string;
    status?: Prisma.EnumTransferStatusFilter<"BloodTransfer"> | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFilter<"BloodTransfer"> | Date | string;
    approvedAt?: Prisma.DateTimeNullableFilter<"BloodTransfer"> | Date | string | null;
    dispatchedAt?: Prisma.DateTimeNullableFilter<"BloodTransfer"> | Date | string | null;
    receivedAt?: Prisma.DateTimeNullableFilter<"BloodTransfer"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"BloodTransfer"> | string | null;
    bloodUnit?: Prisma.XOR<Prisma.BloodUnitScalarRelationFilter, Prisma.BloodUnitWhereInput>;
    sourceFacility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
    destinationFacility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
}, "id" | "transferCode">;
export type BloodTransferOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    transferCode?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    sourceFacilityId?: Prisma.SortOrder;
    destinationFacilityId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    dispatchedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    receivedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.BloodTransferCountOrderByAggregateInput;
    _max?: Prisma.BloodTransferMaxOrderByAggregateInput;
    _min?: Prisma.BloodTransferMinOrderByAggregateInput;
};
export type BloodTransferScalarWhereWithAggregatesInput = {
    AND?: Prisma.BloodTransferScalarWhereWithAggregatesInput | Prisma.BloodTransferScalarWhereWithAggregatesInput[];
    OR?: Prisma.BloodTransferScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BloodTransferScalarWhereWithAggregatesInput | Prisma.BloodTransferScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BloodTransfer"> | string;
    transferCode?: Prisma.StringWithAggregatesFilter<"BloodTransfer"> | string;
    bloodUnitId?: Prisma.StringWithAggregatesFilter<"BloodTransfer"> | string;
    sourceFacilityId?: Prisma.StringWithAggregatesFilter<"BloodTransfer"> | string;
    destinationFacilityId?: Prisma.StringWithAggregatesFilter<"BloodTransfer"> | string;
    status?: Prisma.EnumTransferStatusWithAggregatesFilter<"BloodTransfer"> | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeWithAggregatesFilter<"BloodTransfer"> | Date | string;
    approvedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BloodTransfer"> | Date | string | null;
    dispatchedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BloodTransfer"> | Date | string | null;
    receivedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BloodTransfer"> | Date | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"BloodTransfer"> | string | null;
};
export type BloodTransferCreateInput = {
    id?: string;
    transferCode: string;
    status?: $Enums.TransferStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string | null;
    dispatchedAt?: Date | string | null;
    receivedAt?: Date | string | null;
    notes?: string | null;
    bloodUnit: Prisma.BloodUnitCreateNestedOneWithoutTransfersInput;
    sourceFacility: Prisma.FacilityCreateNestedOneWithoutOutgoingTransfersInput;
    destinationFacility: Prisma.FacilityCreateNestedOneWithoutIncomingTransfersInput;
};
export type BloodTransferUncheckedCreateInput = {
    id?: string;
    transferCode: string;
    bloodUnitId: string;
    sourceFacilityId: string;
    destinationFacilityId: string;
    status?: $Enums.TransferStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string | null;
    dispatchedAt?: Date | string | null;
    receivedAt?: Date | string | null;
    notes?: string | null;
};
export type BloodTransferUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transferCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bloodUnit?: Prisma.BloodUnitUpdateOneRequiredWithoutTransfersNestedInput;
    sourceFacility?: Prisma.FacilityUpdateOneRequiredWithoutOutgoingTransfersNestedInput;
    destinationFacility?: Prisma.FacilityUpdateOneRequiredWithoutIncomingTransfersNestedInput;
};
export type BloodTransferUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transferCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodUnitId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BloodTransferCreateManyInput = {
    id?: string;
    transferCode: string;
    bloodUnitId: string;
    sourceFacilityId: string;
    destinationFacilityId: string;
    status?: $Enums.TransferStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string | null;
    dispatchedAt?: Date | string | null;
    receivedAt?: Date | string | null;
    notes?: string | null;
};
export type BloodTransferUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transferCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BloodTransferUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transferCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodUnitId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BloodTransferListRelationFilter = {
    every?: Prisma.BloodTransferWhereInput;
    some?: Prisma.BloodTransferWhereInput;
    none?: Prisma.BloodTransferWhereInput;
};
export type BloodTransferOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BloodTransferCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transferCode?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    sourceFacilityId?: Prisma.SortOrder;
    destinationFacilityId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    dispatchedAt?: Prisma.SortOrder;
    receivedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type BloodTransferMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transferCode?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    sourceFacilityId?: Prisma.SortOrder;
    destinationFacilityId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    dispatchedAt?: Prisma.SortOrder;
    receivedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type BloodTransferMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    transferCode?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    sourceFacilityId?: Prisma.SortOrder;
    destinationFacilityId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    approvedAt?: Prisma.SortOrder;
    dispatchedAt?: Prisma.SortOrder;
    receivedAt?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
};
export type BloodTransferCreateNestedManyWithoutSourceFacilityInput = {
    create?: Prisma.XOR<Prisma.BloodTransferCreateWithoutSourceFacilityInput, Prisma.BloodTransferUncheckedCreateWithoutSourceFacilityInput> | Prisma.BloodTransferCreateWithoutSourceFacilityInput[] | Prisma.BloodTransferUncheckedCreateWithoutSourceFacilityInput[];
    connectOrCreate?: Prisma.BloodTransferCreateOrConnectWithoutSourceFacilityInput | Prisma.BloodTransferCreateOrConnectWithoutSourceFacilityInput[];
    createMany?: Prisma.BloodTransferCreateManySourceFacilityInputEnvelope;
    connect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
};
export type BloodTransferCreateNestedManyWithoutDestinationFacilityInput = {
    create?: Prisma.XOR<Prisma.BloodTransferCreateWithoutDestinationFacilityInput, Prisma.BloodTransferUncheckedCreateWithoutDestinationFacilityInput> | Prisma.BloodTransferCreateWithoutDestinationFacilityInput[] | Prisma.BloodTransferUncheckedCreateWithoutDestinationFacilityInput[];
    connectOrCreate?: Prisma.BloodTransferCreateOrConnectWithoutDestinationFacilityInput | Prisma.BloodTransferCreateOrConnectWithoutDestinationFacilityInput[];
    createMany?: Prisma.BloodTransferCreateManyDestinationFacilityInputEnvelope;
    connect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
};
export type BloodTransferUncheckedCreateNestedManyWithoutSourceFacilityInput = {
    create?: Prisma.XOR<Prisma.BloodTransferCreateWithoutSourceFacilityInput, Prisma.BloodTransferUncheckedCreateWithoutSourceFacilityInput> | Prisma.BloodTransferCreateWithoutSourceFacilityInput[] | Prisma.BloodTransferUncheckedCreateWithoutSourceFacilityInput[];
    connectOrCreate?: Prisma.BloodTransferCreateOrConnectWithoutSourceFacilityInput | Prisma.BloodTransferCreateOrConnectWithoutSourceFacilityInput[];
    createMany?: Prisma.BloodTransferCreateManySourceFacilityInputEnvelope;
    connect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
};
export type BloodTransferUncheckedCreateNestedManyWithoutDestinationFacilityInput = {
    create?: Prisma.XOR<Prisma.BloodTransferCreateWithoutDestinationFacilityInput, Prisma.BloodTransferUncheckedCreateWithoutDestinationFacilityInput> | Prisma.BloodTransferCreateWithoutDestinationFacilityInput[] | Prisma.BloodTransferUncheckedCreateWithoutDestinationFacilityInput[];
    connectOrCreate?: Prisma.BloodTransferCreateOrConnectWithoutDestinationFacilityInput | Prisma.BloodTransferCreateOrConnectWithoutDestinationFacilityInput[];
    createMany?: Prisma.BloodTransferCreateManyDestinationFacilityInputEnvelope;
    connect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
};
export type BloodTransferUpdateManyWithoutSourceFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.BloodTransferCreateWithoutSourceFacilityInput, Prisma.BloodTransferUncheckedCreateWithoutSourceFacilityInput> | Prisma.BloodTransferCreateWithoutSourceFacilityInput[] | Prisma.BloodTransferUncheckedCreateWithoutSourceFacilityInput[];
    connectOrCreate?: Prisma.BloodTransferCreateOrConnectWithoutSourceFacilityInput | Prisma.BloodTransferCreateOrConnectWithoutSourceFacilityInput[];
    upsert?: Prisma.BloodTransferUpsertWithWhereUniqueWithoutSourceFacilityInput | Prisma.BloodTransferUpsertWithWhereUniqueWithoutSourceFacilityInput[];
    createMany?: Prisma.BloodTransferCreateManySourceFacilityInputEnvelope;
    set?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    disconnect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    delete?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    connect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    update?: Prisma.BloodTransferUpdateWithWhereUniqueWithoutSourceFacilityInput | Prisma.BloodTransferUpdateWithWhereUniqueWithoutSourceFacilityInput[];
    updateMany?: Prisma.BloodTransferUpdateManyWithWhereWithoutSourceFacilityInput | Prisma.BloodTransferUpdateManyWithWhereWithoutSourceFacilityInput[];
    deleteMany?: Prisma.BloodTransferScalarWhereInput | Prisma.BloodTransferScalarWhereInput[];
};
export type BloodTransferUpdateManyWithoutDestinationFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.BloodTransferCreateWithoutDestinationFacilityInput, Prisma.BloodTransferUncheckedCreateWithoutDestinationFacilityInput> | Prisma.BloodTransferCreateWithoutDestinationFacilityInput[] | Prisma.BloodTransferUncheckedCreateWithoutDestinationFacilityInput[];
    connectOrCreate?: Prisma.BloodTransferCreateOrConnectWithoutDestinationFacilityInput | Prisma.BloodTransferCreateOrConnectWithoutDestinationFacilityInput[];
    upsert?: Prisma.BloodTransferUpsertWithWhereUniqueWithoutDestinationFacilityInput | Prisma.BloodTransferUpsertWithWhereUniqueWithoutDestinationFacilityInput[];
    createMany?: Prisma.BloodTransferCreateManyDestinationFacilityInputEnvelope;
    set?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    disconnect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    delete?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    connect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    update?: Prisma.BloodTransferUpdateWithWhereUniqueWithoutDestinationFacilityInput | Prisma.BloodTransferUpdateWithWhereUniqueWithoutDestinationFacilityInput[];
    updateMany?: Prisma.BloodTransferUpdateManyWithWhereWithoutDestinationFacilityInput | Prisma.BloodTransferUpdateManyWithWhereWithoutDestinationFacilityInput[];
    deleteMany?: Prisma.BloodTransferScalarWhereInput | Prisma.BloodTransferScalarWhereInput[];
};
export type BloodTransferUncheckedUpdateManyWithoutSourceFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.BloodTransferCreateWithoutSourceFacilityInput, Prisma.BloodTransferUncheckedCreateWithoutSourceFacilityInput> | Prisma.BloodTransferCreateWithoutSourceFacilityInput[] | Prisma.BloodTransferUncheckedCreateWithoutSourceFacilityInput[];
    connectOrCreate?: Prisma.BloodTransferCreateOrConnectWithoutSourceFacilityInput | Prisma.BloodTransferCreateOrConnectWithoutSourceFacilityInput[];
    upsert?: Prisma.BloodTransferUpsertWithWhereUniqueWithoutSourceFacilityInput | Prisma.BloodTransferUpsertWithWhereUniqueWithoutSourceFacilityInput[];
    createMany?: Prisma.BloodTransferCreateManySourceFacilityInputEnvelope;
    set?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    disconnect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    delete?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    connect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    update?: Prisma.BloodTransferUpdateWithWhereUniqueWithoutSourceFacilityInput | Prisma.BloodTransferUpdateWithWhereUniqueWithoutSourceFacilityInput[];
    updateMany?: Prisma.BloodTransferUpdateManyWithWhereWithoutSourceFacilityInput | Prisma.BloodTransferUpdateManyWithWhereWithoutSourceFacilityInput[];
    deleteMany?: Prisma.BloodTransferScalarWhereInput | Prisma.BloodTransferScalarWhereInput[];
};
export type BloodTransferUncheckedUpdateManyWithoutDestinationFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.BloodTransferCreateWithoutDestinationFacilityInput, Prisma.BloodTransferUncheckedCreateWithoutDestinationFacilityInput> | Prisma.BloodTransferCreateWithoutDestinationFacilityInput[] | Prisma.BloodTransferUncheckedCreateWithoutDestinationFacilityInput[];
    connectOrCreate?: Prisma.BloodTransferCreateOrConnectWithoutDestinationFacilityInput | Prisma.BloodTransferCreateOrConnectWithoutDestinationFacilityInput[];
    upsert?: Prisma.BloodTransferUpsertWithWhereUniqueWithoutDestinationFacilityInput | Prisma.BloodTransferUpsertWithWhereUniqueWithoutDestinationFacilityInput[];
    createMany?: Prisma.BloodTransferCreateManyDestinationFacilityInputEnvelope;
    set?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    disconnect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    delete?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    connect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    update?: Prisma.BloodTransferUpdateWithWhereUniqueWithoutDestinationFacilityInput | Prisma.BloodTransferUpdateWithWhereUniqueWithoutDestinationFacilityInput[];
    updateMany?: Prisma.BloodTransferUpdateManyWithWhereWithoutDestinationFacilityInput | Prisma.BloodTransferUpdateManyWithWhereWithoutDestinationFacilityInput[];
    deleteMany?: Prisma.BloodTransferScalarWhereInput | Prisma.BloodTransferScalarWhereInput[];
};
export type BloodTransferCreateNestedManyWithoutBloodUnitInput = {
    create?: Prisma.XOR<Prisma.BloodTransferCreateWithoutBloodUnitInput, Prisma.BloodTransferUncheckedCreateWithoutBloodUnitInput> | Prisma.BloodTransferCreateWithoutBloodUnitInput[] | Prisma.BloodTransferUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.BloodTransferCreateOrConnectWithoutBloodUnitInput | Prisma.BloodTransferCreateOrConnectWithoutBloodUnitInput[];
    createMany?: Prisma.BloodTransferCreateManyBloodUnitInputEnvelope;
    connect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
};
export type BloodTransferUncheckedCreateNestedManyWithoutBloodUnitInput = {
    create?: Prisma.XOR<Prisma.BloodTransferCreateWithoutBloodUnitInput, Prisma.BloodTransferUncheckedCreateWithoutBloodUnitInput> | Prisma.BloodTransferCreateWithoutBloodUnitInput[] | Prisma.BloodTransferUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.BloodTransferCreateOrConnectWithoutBloodUnitInput | Prisma.BloodTransferCreateOrConnectWithoutBloodUnitInput[];
    createMany?: Prisma.BloodTransferCreateManyBloodUnitInputEnvelope;
    connect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
};
export type BloodTransferUpdateManyWithoutBloodUnitNestedInput = {
    create?: Prisma.XOR<Prisma.BloodTransferCreateWithoutBloodUnitInput, Prisma.BloodTransferUncheckedCreateWithoutBloodUnitInput> | Prisma.BloodTransferCreateWithoutBloodUnitInput[] | Prisma.BloodTransferUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.BloodTransferCreateOrConnectWithoutBloodUnitInput | Prisma.BloodTransferCreateOrConnectWithoutBloodUnitInput[];
    upsert?: Prisma.BloodTransferUpsertWithWhereUniqueWithoutBloodUnitInput | Prisma.BloodTransferUpsertWithWhereUniqueWithoutBloodUnitInput[];
    createMany?: Prisma.BloodTransferCreateManyBloodUnitInputEnvelope;
    set?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    disconnect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    delete?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    connect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    update?: Prisma.BloodTransferUpdateWithWhereUniqueWithoutBloodUnitInput | Prisma.BloodTransferUpdateWithWhereUniqueWithoutBloodUnitInput[];
    updateMany?: Prisma.BloodTransferUpdateManyWithWhereWithoutBloodUnitInput | Prisma.BloodTransferUpdateManyWithWhereWithoutBloodUnitInput[];
    deleteMany?: Prisma.BloodTransferScalarWhereInput | Prisma.BloodTransferScalarWhereInput[];
};
export type BloodTransferUncheckedUpdateManyWithoutBloodUnitNestedInput = {
    create?: Prisma.XOR<Prisma.BloodTransferCreateWithoutBloodUnitInput, Prisma.BloodTransferUncheckedCreateWithoutBloodUnitInput> | Prisma.BloodTransferCreateWithoutBloodUnitInput[] | Prisma.BloodTransferUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.BloodTransferCreateOrConnectWithoutBloodUnitInput | Prisma.BloodTransferCreateOrConnectWithoutBloodUnitInput[];
    upsert?: Prisma.BloodTransferUpsertWithWhereUniqueWithoutBloodUnitInput | Prisma.BloodTransferUpsertWithWhereUniqueWithoutBloodUnitInput[];
    createMany?: Prisma.BloodTransferCreateManyBloodUnitInputEnvelope;
    set?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    disconnect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    delete?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    connect?: Prisma.BloodTransferWhereUniqueInput | Prisma.BloodTransferWhereUniqueInput[];
    update?: Prisma.BloodTransferUpdateWithWhereUniqueWithoutBloodUnitInput | Prisma.BloodTransferUpdateWithWhereUniqueWithoutBloodUnitInput[];
    updateMany?: Prisma.BloodTransferUpdateManyWithWhereWithoutBloodUnitInput | Prisma.BloodTransferUpdateManyWithWhereWithoutBloodUnitInput[];
    deleteMany?: Prisma.BloodTransferScalarWhereInput | Prisma.BloodTransferScalarWhereInput[];
};
export type EnumTransferStatusFieldUpdateOperationsInput = {
    set?: $Enums.TransferStatus;
};
export type BloodTransferCreateWithoutSourceFacilityInput = {
    id?: string;
    transferCode: string;
    status?: $Enums.TransferStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string | null;
    dispatchedAt?: Date | string | null;
    receivedAt?: Date | string | null;
    notes?: string | null;
    bloodUnit: Prisma.BloodUnitCreateNestedOneWithoutTransfersInput;
    destinationFacility: Prisma.FacilityCreateNestedOneWithoutIncomingTransfersInput;
};
export type BloodTransferUncheckedCreateWithoutSourceFacilityInput = {
    id?: string;
    transferCode: string;
    bloodUnitId: string;
    destinationFacilityId: string;
    status?: $Enums.TransferStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string | null;
    dispatchedAt?: Date | string | null;
    receivedAt?: Date | string | null;
    notes?: string | null;
};
export type BloodTransferCreateOrConnectWithoutSourceFacilityInput = {
    where: Prisma.BloodTransferWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodTransferCreateWithoutSourceFacilityInput, Prisma.BloodTransferUncheckedCreateWithoutSourceFacilityInput>;
};
export type BloodTransferCreateManySourceFacilityInputEnvelope = {
    data: Prisma.BloodTransferCreateManySourceFacilityInput | Prisma.BloodTransferCreateManySourceFacilityInput[];
    skipDuplicates?: boolean;
};
export type BloodTransferCreateWithoutDestinationFacilityInput = {
    id?: string;
    transferCode: string;
    status?: $Enums.TransferStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string | null;
    dispatchedAt?: Date | string | null;
    receivedAt?: Date | string | null;
    notes?: string | null;
    bloodUnit: Prisma.BloodUnitCreateNestedOneWithoutTransfersInput;
    sourceFacility: Prisma.FacilityCreateNestedOneWithoutOutgoingTransfersInput;
};
export type BloodTransferUncheckedCreateWithoutDestinationFacilityInput = {
    id?: string;
    transferCode: string;
    bloodUnitId: string;
    sourceFacilityId: string;
    status?: $Enums.TransferStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string | null;
    dispatchedAt?: Date | string | null;
    receivedAt?: Date | string | null;
    notes?: string | null;
};
export type BloodTransferCreateOrConnectWithoutDestinationFacilityInput = {
    where: Prisma.BloodTransferWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodTransferCreateWithoutDestinationFacilityInput, Prisma.BloodTransferUncheckedCreateWithoutDestinationFacilityInput>;
};
export type BloodTransferCreateManyDestinationFacilityInputEnvelope = {
    data: Prisma.BloodTransferCreateManyDestinationFacilityInput | Prisma.BloodTransferCreateManyDestinationFacilityInput[];
    skipDuplicates?: boolean;
};
export type BloodTransferUpsertWithWhereUniqueWithoutSourceFacilityInput = {
    where: Prisma.BloodTransferWhereUniqueInput;
    update: Prisma.XOR<Prisma.BloodTransferUpdateWithoutSourceFacilityInput, Prisma.BloodTransferUncheckedUpdateWithoutSourceFacilityInput>;
    create: Prisma.XOR<Prisma.BloodTransferCreateWithoutSourceFacilityInput, Prisma.BloodTransferUncheckedCreateWithoutSourceFacilityInput>;
};
export type BloodTransferUpdateWithWhereUniqueWithoutSourceFacilityInput = {
    where: Prisma.BloodTransferWhereUniqueInput;
    data: Prisma.XOR<Prisma.BloodTransferUpdateWithoutSourceFacilityInput, Prisma.BloodTransferUncheckedUpdateWithoutSourceFacilityInput>;
};
export type BloodTransferUpdateManyWithWhereWithoutSourceFacilityInput = {
    where: Prisma.BloodTransferScalarWhereInput;
    data: Prisma.XOR<Prisma.BloodTransferUpdateManyMutationInput, Prisma.BloodTransferUncheckedUpdateManyWithoutSourceFacilityInput>;
};
export type BloodTransferScalarWhereInput = {
    AND?: Prisma.BloodTransferScalarWhereInput | Prisma.BloodTransferScalarWhereInput[];
    OR?: Prisma.BloodTransferScalarWhereInput[];
    NOT?: Prisma.BloodTransferScalarWhereInput | Prisma.BloodTransferScalarWhereInput[];
    id?: Prisma.StringFilter<"BloodTransfer"> | string;
    transferCode?: Prisma.StringFilter<"BloodTransfer"> | string;
    bloodUnitId?: Prisma.StringFilter<"BloodTransfer"> | string;
    sourceFacilityId?: Prisma.StringFilter<"BloodTransfer"> | string;
    destinationFacilityId?: Prisma.StringFilter<"BloodTransfer"> | string;
    status?: Prisma.EnumTransferStatusFilter<"BloodTransfer"> | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFilter<"BloodTransfer"> | Date | string;
    approvedAt?: Prisma.DateTimeNullableFilter<"BloodTransfer"> | Date | string | null;
    dispatchedAt?: Prisma.DateTimeNullableFilter<"BloodTransfer"> | Date | string | null;
    receivedAt?: Prisma.DateTimeNullableFilter<"BloodTransfer"> | Date | string | null;
    notes?: Prisma.StringNullableFilter<"BloodTransfer"> | string | null;
};
export type BloodTransferUpsertWithWhereUniqueWithoutDestinationFacilityInput = {
    where: Prisma.BloodTransferWhereUniqueInput;
    update: Prisma.XOR<Prisma.BloodTransferUpdateWithoutDestinationFacilityInput, Prisma.BloodTransferUncheckedUpdateWithoutDestinationFacilityInput>;
    create: Prisma.XOR<Prisma.BloodTransferCreateWithoutDestinationFacilityInput, Prisma.BloodTransferUncheckedCreateWithoutDestinationFacilityInput>;
};
export type BloodTransferUpdateWithWhereUniqueWithoutDestinationFacilityInput = {
    where: Prisma.BloodTransferWhereUniqueInput;
    data: Prisma.XOR<Prisma.BloodTransferUpdateWithoutDestinationFacilityInput, Prisma.BloodTransferUncheckedUpdateWithoutDestinationFacilityInput>;
};
export type BloodTransferUpdateManyWithWhereWithoutDestinationFacilityInput = {
    where: Prisma.BloodTransferScalarWhereInput;
    data: Prisma.XOR<Prisma.BloodTransferUpdateManyMutationInput, Prisma.BloodTransferUncheckedUpdateManyWithoutDestinationFacilityInput>;
};
export type BloodTransferCreateWithoutBloodUnitInput = {
    id?: string;
    transferCode: string;
    status?: $Enums.TransferStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string | null;
    dispatchedAt?: Date | string | null;
    receivedAt?: Date | string | null;
    notes?: string | null;
    sourceFacility: Prisma.FacilityCreateNestedOneWithoutOutgoingTransfersInput;
    destinationFacility: Prisma.FacilityCreateNestedOneWithoutIncomingTransfersInput;
};
export type BloodTransferUncheckedCreateWithoutBloodUnitInput = {
    id?: string;
    transferCode: string;
    sourceFacilityId: string;
    destinationFacilityId: string;
    status?: $Enums.TransferStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string | null;
    dispatchedAt?: Date | string | null;
    receivedAt?: Date | string | null;
    notes?: string | null;
};
export type BloodTransferCreateOrConnectWithoutBloodUnitInput = {
    where: Prisma.BloodTransferWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodTransferCreateWithoutBloodUnitInput, Prisma.BloodTransferUncheckedCreateWithoutBloodUnitInput>;
};
export type BloodTransferCreateManyBloodUnitInputEnvelope = {
    data: Prisma.BloodTransferCreateManyBloodUnitInput | Prisma.BloodTransferCreateManyBloodUnitInput[];
    skipDuplicates?: boolean;
};
export type BloodTransferUpsertWithWhereUniqueWithoutBloodUnitInput = {
    where: Prisma.BloodTransferWhereUniqueInput;
    update: Prisma.XOR<Prisma.BloodTransferUpdateWithoutBloodUnitInput, Prisma.BloodTransferUncheckedUpdateWithoutBloodUnitInput>;
    create: Prisma.XOR<Prisma.BloodTransferCreateWithoutBloodUnitInput, Prisma.BloodTransferUncheckedCreateWithoutBloodUnitInput>;
};
export type BloodTransferUpdateWithWhereUniqueWithoutBloodUnitInput = {
    where: Prisma.BloodTransferWhereUniqueInput;
    data: Prisma.XOR<Prisma.BloodTransferUpdateWithoutBloodUnitInput, Prisma.BloodTransferUncheckedUpdateWithoutBloodUnitInput>;
};
export type BloodTransferUpdateManyWithWhereWithoutBloodUnitInput = {
    where: Prisma.BloodTransferScalarWhereInput;
    data: Prisma.XOR<Prisma.BloodTransferUpdateManyMutationInput, Prisma.BloodTransferUncheckedUpdateManyWithoutBloodUnitInput>;
};
export type BloodTransferCreateManySourceFacilityInput = {
    id?: string;
    transferCode: string;
    bloodUnitId: string;
    destinationFacilityId: string;
    status?: $Enums.TransferStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string | null;
    dispatchedAt?: Date | string | null;
    receivedAt?: Date | string | null;
    notes?: string | null;
};
export type BloodTransferCreateManyDestinationFacilityInput = {
    id?: string;
    transferCode: string;
    bloodUnitId: string;
    sourceFacilityId: string;
    status?: $Enums.TransferStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string | null;
    dispatchedAt?: Date | string | null;
    receivedAt?: Date | string | null;
    notes?: string | null;
};
export type BloodTransferUpdateWithoutSourceFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transferCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bloodUnit?: Prisma.BloodUnitUpdateOneRequiredWithoutTransfersNestedInput;
    destinationFacility?: Prisma.FacilityUpdateOneRequiredWithoutIncomingTransfersNestedInput;
};
export type BloodTransferUncheckedUpdateWithoutSourceFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transferCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodUnitId?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BloodTransferUncheckedUpdateManyWithoutSourceFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transferCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodUnitId?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BloodTransferUpdateWithoutDestinationFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transferCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    bloodUnit?: Prisma.BloodUnitUpdateOneRequiredWithoutTransfersNestedInput;
    sourceFacility?: Prisma.FacilityUpdateOneRequiredWithoutOutgoingTransfersNestedInput;
};
export type BloodTransferUncheckedUpdateWithoutDestinationFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transferCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodUnitId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BloodTransferUncheckedUpdateManyWithoutDestinationFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transferCode?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodUnitId?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BloodTransferCreateManyBloodUnitInput = {
    id?: string;
    transferCode: string;
    sourceFacilityId: string;
    destinationFacilityId: string;
    status?: $Enums.TransferStatus;
    requestedAt?: Date | string;
    approvedAt?: Date | string | null;
    dispatchedAt?: Date | string | null;
    receivedAt?: Date | string | null;
    notes?: string | null;
};
export type BloodTransferUpdateWithoutBloodUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transferCode?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceFacility?: Prisma.FacilityUpdateOneRequiredWithoutOutgoingTransfersNestedInput;
    destinationFacility?: Prisma.FacilityUpdateOneRequiredWithoutIncomingTransfersNestedInput;
};
export type BloodTransferUncheckedUpdateWithoutBloodUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transferCode?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BloodTransferUncheckedUpdateManyWithoutBloodUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    transferCode?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumTransferStatusFieldUpdateOperationsInput | $Enums.TransferStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    approvedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    dispatchedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    receivedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type BloodTransferSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transferCode?: boolean;
    bloodUnitId?: boolean;
    sourceFacilityId?: boolean;
    destinationFacilityId?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    approvedAt?: boolean;
    dispatchedAt?: boolean;
    receivedAt?: boolean;
    notes?: boolean;
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
    sourceFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    destinationFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bloodTransfer"]>;
export type BloodTransferSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transferCode?: boolean;
    bloodUnitId?: boolean;
    sourceFacilityId?: boolean;
    destinationFacilityId?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    approvedAt?: boolean;
    dispatchedAt?: boolean;
    receivedAt?: boolean;
    notes?: boolean;
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
    sourceFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    destinationFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bloodTransfer"]>;
export type BloodTransferSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    transferCode?: boolean;
    bloodUnitId?: boolean;
    sourceFacilityId?: boolean;
    destinationFacilityId?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    approvedAt?: boolean;
    dispatchedAt?: boolean;
    receivedAt?: boolean;
    notes?: boolean;
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
    sourceFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    destinationFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bloodTransfer"]>;
export type BloodTransferSelectScalar = {
    id?: boolean;
    transferCode?: boolean;
    bloodUnitId?: boolean;
    sourceFacilityId?: boolean;
    destinationFacilityId?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    approvedAt?: boolean;
    dispatchedAt?: boolean;
    receivedAt?: boolean;
    notes?: boolean;
};
export type BloodTransferOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "transferCode" | "bloodUnitId" | "sourceFacilityId" | "destinationFacilityId" | "status" | "requestedAt" | "approvedAt" | "dispatchedAt" | "receivedAt" | "notes", ExtArgs["result"]["bloodTransfer"]>;
export type BloodTransferInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
    sourceFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    destinationFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
};
export type BloodTransferIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
    sourceFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    destinationFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
};
export type BloodTransferIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
    sourceFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    destinationFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
};
export type $BloodTransferPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BloodTransfer";
    objects: {
        bloodUnit: Prisma.$BloodUnitPayload<ExtArgs>;
        sourceFacility: Prisma.$FacilityPayload<ExtArgs>;
        destinationFacility: Prisma.$FacilityPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        transferCode: string;
        bloodUnitId: string;
        sourceFacilityId: string;
        destinationFacilityId: string;
        status: $Enums.TransferStatus;
        requestedAt: Date;
        approvedAt: Date | null;
        dispatchedAt: Date | null;
        receivedAt: Date | null;
        notes: string | null;
    }, ExtArgs["result"]["bloodTransfer"]>;
    composites: {};
};
export type BloodTransferGetPayload<S extends boolean | null | undefined | BloodTransferDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BloodTransferPayload, S>;
export type BloodTransferCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BloodTransferFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BloodTransferCountAggregateInputType | true;
};
export interface BloodTransferDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BloodTransfer'];
        meta: {
            name: 'BloodTransfer';
        };
    };
    findUnique<T extends BloodTransferFindUniqueArgs>(args: Prisma.SelectSubset<T, BloodTransferFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BloodTransferClient<runtime.Types.Result.GetResult<Prisma.$BloodTransferPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BloodTransferFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BloodTransferFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BloodTransferClient<runtime.Types.Result.GetResult<Prisma.$BloodTransferPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BloodTransferFindFirstArgs>(args?: Prisma.SelectSubset<T, BloodTransferFindFirstArgs<ExtArgs>>): Prisma.Prisma__BloodTransferClient<runtime.Types.Result.GetResult<Prisma.$BloodTransferPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BloodTransferFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BloodTransferFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BloodTransferClient<runtime.Types.Result.GetResult<Prisma.$BloodTransferPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BloodTransferFindManyArgs>(args?: Prisma.SelectSubset<T, BloodTransferFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodTransferPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BloodTransferCreateArgs>(args: Prisma.SelectSubset<T, BloodTransferCreateArgs<ExtArgs>>): Prisma.Prisma__BloodTransferClient<runtime.Types.Result.GetResult<Prisma.$BloodTransferPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BloodTransferCreateManyArgs>(args?: Prisma.SelectSubset<T, BloodTransferCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BloodTransferCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BloodTransferCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodTransferPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BloodTransferDeleteArgs>(args: Prisma.SelectSubset<T, BloodTransferDeleteArgs<ExtArgs>>): Prisma.Prisma__BloodTransferClient<runtime.Types.Result.GetResult<Prisma.$BloodTransferPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BloodTransferUpdateArgs>(args: Prisma.SelectSubset<T, BloodTransferUpdateArgs<ExtArgs>>): Prisma.Prisma__BloodTransferClient<runtime.Types.Result.GetResult<Prisma.$BloodTransferPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BloodTransferDeleteManyArgs>(args?: Prisma.SelectSubset<T, BloodTransferDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BloodTransferUpdateManyArgs>(args: Prisma.SelectSubset<T, BloodTransferUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BloodTransferUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BloodTransferUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodTransferPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BloodTransferUpsertArgs>(args: Prisma.SelectSubset<T, BloodTransferUpsertArgs<ExtArgs>>): Prisma.Prisma__BloodTransferClient<runtime.Types.Result.GetResult<Prisma.$BloodTransferPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BloodTransferCountArgs>(args?: Prisma.Subset<T, BloodTransferCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BloodTransferCountAggregateOutputType> : number>;
    aggregate<T extends BloodTransferAggregateArgs>(args: Prisma.Subset<T, BloodTransferAggregateArgs>): Prisma.PrismaPromise<GetBloodTransferAggregateType<T>>;
    groupBy<T extends BloodTransferGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BloodTransferGroupByArgs['orderBy'];
    } : {
        orderBy?: BloodTransferGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BloodTransferGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloodTransferGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BloodTransferFieldRefs;
}
export interface Prisma__BloodTransferClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bloodUnit<T extends Prisma.BloodUnitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BloodUnitDefaultArgs<ExtArgs>>): Prisma.Prisma__BloodUnitClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sourceFacility<T extends Prisma.FacilityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FacilityDefaultArgs<ExtArgs>>): Prisma.Prisma__FacilityClient<runtime.Types.Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    destinationFacility<T extends Prisma.FacilityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FacilityDefaultArgs<ExtArgs>>): Prisma.Prisma__FacilityClient<runtime.Types.Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BloodTransferFieldRefs {
    readonly id: Prisma.FieldRef<"BloodTransfer", 'String'>;
    readonly transferCode: Prisma.FieldRef<"BloodTransfer", 'String'>;
    readonly bloodUnitId: Prisma.FieldRef<"BloodTransfer", 'String'>;
    readonly sourceFacilityId: Prisma.FieldRef<"BloodTransfer", 'String'>;
    readonly destinationFacilityId: Prisma.FieldRef<"BloodTransfer", 'String'>;
    readonly status: Prisma.FieldRef<"BloodTransfer", 'TransferStatus'>;
    readonly requestedAt: Prisma.FieldRef<"BloodTransfer", 'DateTime'>;
    readonly approvedAt: Prisma.FieldRef<"BloodTransfer", 'DateTime'>;
    readonly dispatchedAt: Prisma.FieldRef<"BloodTransfer", 'DateTime'>;
    readonly receivedAt: Prisma.FieldRef<"BloodTransfer", 'DateTime'>;
    readonly notes: Prisma.FieldRef<"BloodTransfer", 'String'>;
}
export type BloodTransferFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodTransferSelect<ExtArgs> | null;
    omit?: Prisma.BloodTransferOmit<ExtArgs> | null;
    include?: Prisma.BloodTransferInclude<ExtArgs> | null;
    where: Prisma.BloodTransferWhereUniqueInput;
};
export type BloodTransferFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodTransferSelect<ExtArgs> | null;
    omit?: Prisma.BloodTransferOmit<ExtArgs> | null;
    include?: Prisma.BloodTransferInclude<ExtArgs> | null;
    where: Prisma.BloodTransferWhereUniqueInput;
};
export type BloodTransferFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BloodTransferFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BloodTransferFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BloodTransferCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodTransferSelect<ExtArgs> | null;
    omit?: Prisma.BloodTransferOmit<ExtArgs> | null;
    include?: Prisma.BloodTransferInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BloodTransferCreateInput, Prisma.BloodTransferUncheckedCreateInput>;
};
export type BloodTransferCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BloodTransferCreateManyInput | Prisma.BloodTransferCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BloodTransferCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodTransferSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BloodTransferOmit<ExtArgs> | null;
    data: Prisma.BloodTransferCreateManyInput | Prisma.BloodTransferCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BloodTransferIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BloodTransferUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodTransferSelect<ExtArgs> | null;
    omit?: Prisma.BloodTransferOmit<ExtArgs> | null;
    include?: Prisma.BloodTransferInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BloodTransferUpdateInput, Prisma.BloodTransferUncheckedUpdateInput>;
    where: Prisma.BloodTransferWhereUniqueInput;
};
export type BloodTransferUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BloodTransferUpdateManyMutationInput, Prisma.BloodTransferUncheckedUpdateManyInput>;
    where?: Prisma.BloodTransferWhereInput;
    limit?: number;
};
export type BloodTransferUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodTransferSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BloodTransferOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BloodTransferUpdateManyMutationInput, Prisma.BloodTransferUncheckedUpdateManyInput>;
    where?: Prisma.BloodTransferWhereInput;
    limit?: number;
    include?: Prisma.BloodTransferIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BloodTransferUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodTransferSelect<ExtArgs> | null;
    omit?: Prisma.BloodTransferOmit<ExtArgs> | null;
    include?: Prisma.BloodTransferInclude<ExtArgs> | null;
    where: Prisma.BloodTransferWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodTransferCreateInput, Prisma.BloodTransferUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BloodTransferUpdateInput, Prisma.BloodTransferUncheckedUpdateInput>;
};
export type BloodTransferDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodTransferSelect<ExtArgs> | null;
    omit?: Prisma.BloodTransferOmit<ExtArgs> | null;
    include?: Prisma.BloodTransferInclude<ExtArgs> | null;
    where: Prisma.BloodTransferWhereUniqueInput;
};
export type BloodTransferDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodTransferWhereInput;
    limit?: number;
};
export type BloodTransferDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodTransferSelect<ExtArgs> | null;
    omit?: Prisma.BloodTransferOmit<ExtArgs> | null;
    include?: Prisma.BloodTransferInclude<ExtArgs> | null;
};
