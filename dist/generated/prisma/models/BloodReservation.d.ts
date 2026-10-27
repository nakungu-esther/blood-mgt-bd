import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BloodReservationModel = runtime.Types.Result.DefaultSelection<Prisma.$BloodReservationPayload>;
export type AggregateBloodReservation = {
    _count: BloodReservationCountAggregateOutputType | null;
    _min: BloodReservationMinAggregateOutputType | null;
    _max: BloodReservationMaxAggregateOutputType | null;
};
export type BloodReservationMinAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    bloodUnitId: string | null;
    status: $Enums.ReservationStatus | null;
    reservedAt: Date | null;
    expiresAt: Date | null;
};
export type BloodReservationMaxAggregateOutputType = {
    id: string | null;
    requestId: string | null;
    bloodUnitId: string | null;
    status: $Enums.ReservationStatus | null;
    reservedAt: Date | null;
    expiresAt: Date | null;
};
export type BloodReservationCountAggregateOutputType = {
    id: number;
    requestId: number;
    bloodUnitId: number;
    status: number;
    reservedAt: number;
    expiresAt: number;
    _all: number;
};
export type BloodReservationMinAggregateInputType = {
    id?: true;
    requestId?: true;
    bloodUnitId?: true;
    status?: true;
    reservedAt?: true;
    expiresAt?: true;
};
export type BloodReservationMaxAggregateInputType = {
    id?: true;
    requestId?: true;
    bloodUnitId?: true;
    status?: true;
    reservedAt?: true;
    expiresAt?: true;
};
export type BloodReservationCountAggregateInputType = {
    id?: true;
    requestId?: true;
    bloodUnitId?: true;
    status?: true;
    reservedAt?: true;
    expiresAt?: true;
    _all?: true;
};
export type BloodReservationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodReservationWhereInput;
    orderBy?: Prisma.BloodReservationOrderByWithRelationInput | Prisma.BloodReservationOrderByWithRelationInput[];
    cursor?: Prisma.BloodReservationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BloodReservationCountAggregateInputType;
    _min?: BloodReservationMinAggregateInputType;
    _max?: BloodReservationMaxAggregateInputType;
};
export type GetBloodReservationAggregateType<T extends BloodReservationAggregateArgs> = {
    [P in keyof T & keyof AggregateBloodReservation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBloodReservation[P]> : Prisma.GetScalarType<T[P], AggregateBloodReservation[P]>;
};
export type BloodReservationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodReservationWhereInput;
    orderBy?: Prisma.BloodReservationOrderByWithAggregationInput | Prisma.BloodReservationOrderByWithAggregationInput[];
    by: Prisma.BloodReservationScalarFieldEnum[] | Prisma.BloodReservationScalarFieldEnum;
    having?: Prisma.BloodReservationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BloodReservationCountAggregateInputType | true;
    _min?: BloodReservationMinAggregateInputType;
    _max?: BloodReservationMaxAggregateInputType;
};
export type BloodReservationGroupByOutputType = {
    id: string;
    requestId: string;
    bloodUnitId: string;
    status: $Enums.ReservationStatus;
    reservedAt: Date;
    expiresAt: Date | null;
    _count: BloodReservationCountAggregateOutputType | null;
    _min: BloodReservationMinAggregateOutputType | null;
    _max: BloodReservationMaxAggregateOutputType | null;
};
export type GetBloodReservationGroupByPayload<T extends BloodReservationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BloodReservationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BloodReservationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BloodReservationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BloodReservationGroupByOutputType[P]>;
}>>;
export type BloodReservationWhereInput = {
    AND?: Prisma.BloodReservationWhereInput | Prisma.BloodReservationWhereInput[];
    OR?: Prisma.BloodReservationWhereInput[];
    NOT?: Prisma.BloodReservationWhereInput | Prisma.BloodReservationWhereInput[];
    id?: Prisma.StringFilter<"BloodReservation"> | string;
    requestId?: Prisma.StringFilter<"BloodReservation"> | string;
    bloodUnitId?: Prisma.StringFilter<"BloodReservation"> | string;
    status?: Prisma.EnumReservationStatusFilter<"BloodReservation"> | $Enums.ReservationStatus;
    reservedAt?: Prisma.DateTimeFilter<"BloodReservation"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"BloodReservation"> | Date | string | null;
    request?: Prisma.XOR<Prisma.HospitalRequestScalarRelationFilter, Prisma.HospitalRequestWhereInput>;
    bloodUnit?: Prisma.XOR<Prisma.BloodUnitScalarRelationFilter, Prisma.BloodUnitWhereInput>;
};
export type BloodReservationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reservedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    request?: Prisma.HospitalRequestOrderByWithRelationInput;
    bloodUnit?: Prisma.BloodUnitOrderByWithRelationInput;
};
export type BloodReservationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BloodReservationWhereInput | Prisma.BloodReservationWhereInput[];
    OR?: Prisma.BloodReservationWhereInput[];
    NOT?: Prisma.BloodReservationWhereInput | Prisma.BloodReservationWhereInput[];
    requestId?: Prisma.StringFilter<"BloodReservation"> | string;
    bloodUnitId?: Prisma.StringFilter<"BloodReservation"> | string;
    status?: Prisma.EnumReservationStatusFilter<"BloodReservation"> | $Enums.ReservationStatus;
    reservedAt?: Prisma.DateTimeFilter<"BloodReservation"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"BloodReservation"> | Date | string | null;
    request?: Prisma.XOR<Prisma.HospitalRequestScalarRelationFilter, Prisma.HospitalRequestWhereInput>;
    bloodUnit?: Prisma.XOR<Prisma.BloodUnitScalarRelationFilter, Prisma.BloodUnitWhereInput>;
}, "id">;
export type BloodReservationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reservedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.BloodReservationCountOrderByAggregateInput;
    _max?: Prisma.BloodReservationMaxOrderByAggregateInput;
    _min?: Prisma.BloodReservationMinOrderByAggregateInput;
};
export type BloodReservationScalarWhereWithAggregatesInput = {
    AND?: Prisma.BloodReservationScalarWhereWithAggregatesInput | Prisma.BloodReservationScalarWhereWithAggregatesInput[];
    OR?: Prisma.BloodReservationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BloodReservationScalarWhereWithAggregatesInput | Prisma.BloodReservationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BloodReservation"> | string;
    requestId?: Prisma.StringWithAggregatesFilter<"BloodReservation"> | string;
    bloodUnitId?: Prisma.StringWithAggregatesFilter<"BloodReservation"> | string;
    status?: Prisma.EnumReservationStatusWithAggregatesFilter<"BloodReservation"> | $Enums.ReservationStatus;
    reservedAt?: Prisma.DateTimeWithAggregatesFilter<"BloodReservation"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableWithAggregatesFilter<"BloodReservation"> | Date | string | null;
};
export type BloodReservationCreateInput = {
    id?: string;
    status?: $Enums.ReservationStatus;
    reservedAt?: Date | string;
    expiresAt?: Date | string | null;
    request: Prisma.HospitalRequestCreateNestedOneWithoutReservationsInput;
    bloodUnit: Prisma.BloodUnitCreateNestedOneWithoutReservationsInput;
};
export type BloodReservationUncheckedCreateInput = {
    id?: string;
    requestId: string;
    bloodUnitId: string;
    status?: $Enums.ReservationStatus;
    reservedAt?: Date | string;
    expiresAt?: Date | string | null;
};
export type BloodReservationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    reservedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    request?: Prisma.HospitalRequestUpdateOneRequiredWithoutReservationsNestedInput;
    bloodUnit?: Prisma.BloodUnitUpdateOneRequiredWithoutReservationsNestedInput;
};
export type BloodReservationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodUnitId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    reservedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BloodReservationCreateManyInput = {
    id?: string;
    requestId: string;
    bloodUnitId: string;
    status?: $Enums.ReservationStatus;
    reservedAt?: Date | string;
    expiresAt?: Date | string | null;
};
export type BloodReservationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    reservedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BloodReservationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodUnitId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    reservedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BloodReservationListRelationFilter = {
    every?: Prisma.BloodReservationWhereInput;
    some?: Prisma.BloodReservationWhereInput;
    none?: Prisma.BloodReservationWhereInput;
};
export type BloodReservationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BloodReservationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reservedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type BloodReservationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reservedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type BloodReservationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    requestId?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    reservedAt?: Prisma.SortOrder;
    expiresAt?: Prisma.SortOrder;
};
export type BloodReservationCreateNestedManyWithoutBloodUnitInput = {
    create?: Prisma.XOR<Prisma.BloodReservationCreateWithoutBloodUnitInput, Prisma.BloodReservationUncheckedCreateWithoutBloodUnitInput> | Prisma.BloodReservationCreateWithoutBloodUnitInput[] | Prisma.BloodReservationUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.BloodReservationCreateOrConnectWithoutBloodUnitInput | Prisma.BloodReservationCreateOrConnectWithoutBloodUnitInput[];
    createMany?: Prisma.BloodReservationCreateManyBloodUnitInputEnvelope;
    connect?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
};
export type BloodReservationUncheckedCreateNestedManyWithoutBloodUnitInput = {
    create?: Prisma.XOR<Prisma.BloodReservationCreateWithoutBloodUnitInput, Prisma.BloodReservationUncheckedCreateWithoutBloodUnitInput> | Prisma.BloodReservationCreateWithoutBloodUnitInput[] | Prisma.BloodReservationUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.BloodReservationCreateOrConnectWithoutBloodUnitInput | Prisma.BloodReservationCreateOrConnectWithoutBloodUnitInput[];
    createMany?: Prisma.BloodReservationCreateManyBloodUnitInputEnvelope;
    connect?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
};
export type BloodReservationUpdateManyWithoutBloodUnitNestedInput = {
    create?: Prisma.XOR<Prisma.BloodReservationCreateWithoutBloodUnitInput, Prisma.BloodReservationUncheckedCreateWithoutBloodUnitInput> | Prisma.BloodReservationCreateWithoutBloodUnitInput[] | Prisma.BloodReservationUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.BloodReservationCreateOrConnectWithoutBloodUnitInput | Prisma.BloodReservationCreateOrConnectWithoutBloodUnitInput[];
    upsert?: Prisma.BloodReservationUpsertWithWhereUniqueWithoutBloodUnitInput | Prisma.BloodReservationUpsertWithWhereUniqueWithoutBloodUnitInput[];
    createMany?: Prisma.BloodReservationCreateManyBloodUnitInputEnvelope;
    set?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    disconnect?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    delete?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    connect?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    update?: Prisma.BloodReservationUpdateWithWhereUniqueWithoutBloodUnitInput | Prisma.BloodReservationUpdateWithWhereUniqueWithoutBloodUnitInput[];
    updateMany?: Prisma.BloodReservationUpdateManyWithWhereWithoutBloodUnitInput | Prisma.BloodReservationUpdateManyWithWhereWithoutBloodUnitInput[];
    deleteMany?: Prisma.BloodReservationScalarWhereInput | Prisma.BloodReservationScalarWhereInput[];
};
export type BloodReservationUncheckedUpdateManyWithoutBloodUnitNestedInput = {
    create?: Prisma.XOR<Prisma.BloodReservationCreateWithoutBloodUnitInput, Prisma.BloodReservationUncheckedCreateWithoutBloodUnitInput> | Prisma.BloodReservationCreateWithoutBloodUnitInput[] | Prisma.BloodReservationUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.BloodReservationCreateOrConnectWithoutBloodUnitInput | Prisma.BloodReservationCreateOrConnectWithoutBloodUnitInput[];
    upsert?: Prisma.BloodReservationUpsertWithWhereUniqueWithoutBloodUnitInput | Prisma.BloodReservationUpsertWithWhereUniqueWithoutBloodUnitInput[];
    createMany?: Prisma.BloodReservationCreateManyBloodUnitInputEnvelope;
    set?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    disconnect?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    delete?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    connect?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    update?: Prisma.BloodReservationUpdateWithWhereUniqueWithoutBloodUnitInput | Prisma.BloodReservationUpdateWithWhereUniqueWithoutBloodUnitInput[];
    updateMany?: Prisma.BloodReservationUpdateManyWithWhereWithoutBloodUnitInput | Prisma.BloodReservationUpdateManyWithWhereWithoutBloodUnitInput[];
    deleteMany?: Prisma.BloodReservationScalarWhereInput | Prisma.BloodReservationScalarWhereInput[];
};
export type BloodReservationCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.BloodReservationCreateWithoutRequestInput, Prisma.BloodReservationUncheckedCreateWithoutRequestInput> | Prisma.BloodReservationCreateWithoutRequestInput[] | Prisma.BloodReservationUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.BloodReservationCreateOrConnectWithoutRequestInput | Prisma.BloodReservationCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.BloodReservationCreateManyRequestInputEnvelope;
    connect?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
};
export type BloodReservationUncheckedCreateNestedManyWithoutRequestInput = {
    create?: Prisma.XOR<Prisma.BloodReservationCreateWithoutRequestInput, Prisma.BloodReservationUncheckedCreateWithoutRequestInput> | Prisma.BloodReservationCreateWithoutRequestInput[] | Prisma.BloodReservationUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.BloodReservationCreateOrConnectWithoutRequestInput | Prisma.BloodReservationCreateOrConnectWithoutRequestInput[];
    createMany?: Prisma.BloodReservationCreateManyRequestInputEnvelope;
    connect?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
};
export type BloodReservationUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.BloodReservationCreateWithoutRequestInput, Prisma.BloodReservationUncheckedCreateWithoutRequestInput> | Prisma.BloodReservationCreateWithoutRequestInput[] | Prisma.BloodReservationUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.BloodReservationCreateOrConnectWithoutRequestInput | Prisma.BloodReservationCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.BloodReservationUpsertWithWhereUniqueWithoutRequestInput | Prisma.BloodReservationUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.BloodReservationCreateManyRequestInputEnvelope;
    set?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    disconnect?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    delete?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    connect?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    update?: Prisma.BloodReservationUpdateWithWhereUniqueWithoutRequestInput | Prisma.BloodReservationUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.BloodReservationUpdateManyWithWhereWithoutRequestInput | Prisma.BloodReservationUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.BloodReservationScalarWhereInput | Prisma.BloodReservationScalarWhereInput[];
};
export type BloodReservationUncheckedUpdateManyWithoutRequestNestedInput = {
    create?: Prisma.XOR<Prisma.BloodReservationCreateWithoutRequestInput, Prisma.BloodReservationUncheckedCreateWithoutRequestInput> | Prisma.BloodReservationCreateWithoutRequestInput[] | Prisma.BloodReservationUncheckedCreateWithoutRequestInput[];
    connectOrCreate?: Prisma.BloodReservationCreateOrConnectWithoutRequestInput | Prisma.BloodReservationCreateOrConnectWithoutRequestInput[];
    upsert?: Prisma.BloodReservationUpsertWithWhereUniqueWithoutRequestInput | Prisma.BloodReservationUpsertWithWhereUniqueWithoutRequestInput[];
    createMany?: Prisma.BloodReservationCreateManyRequestInputEnvelope;
    set?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    disconnect?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    delete?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    connect?: Prisma.BloodReservationWhereUniqueInput | Prisma.BloodReservationWhereUniqueInput[];
    update?: Prisma.BloodReservationUpdateWithWhereUniqueWithoutRequestInput | Prisma.BloodReservationUpdateWithWhereUniqueWithoutRequestInput[];
    updateMany?: Prisma.BloodReservationUpdateManyWithWhereWithoutRequestInput | Prisma.BloodReservationUpdateManyWithWhereWithoutRequestInput[];
    deleteMany?: Prisma.BloodReservationScalarWhereInput | Prisma.BloodReservationScalarWhereInput[];
};
export type EnumReservationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ReservationStatus;
};
export type BloodReservationCreateWithoutBloodUnitInput = {
    id?: string;
    status?: $Enums.ReservationStatus;
    reservedAt?: Date | string;
    expiresAt?: Date | string | null;
    request: Prisma.HospitalRequestCreateNestedOneWithoutReservationsInput;
};
export type BloodReservationUncheckedCreateWithoutBloodUnitInput = {
    id?: string;
    requestId: string;
    status?: $Enums.ReservationStatus;
    reservedAt?: Date | string;
    expiresAt?: Date | string | null;
};
export type BloodReservationCreateOrConnectWithoutBloodUnitInput = {
    where: Prisma.BloodReservationWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodReservationCreateWithoutBloodUnitInput, Prisma.BloodReservationUncheckedCreateWithoutBloodUnitInput>;
};
export type BloodReservationCreateManyBloodUnitInputEnvelope = {
    data: Prisma.BloodReservationCreateManyBloodUnitInput | Prisma.BloodReservationCreateManyBloodUnitInput[];
    skipDuplicates?: boolean;
};
export type BloodReservationUpsertWithWhereUniqueWithoutBloodUnitInput = {
    where: Prisma.BloodReservationWhereUniqueInput;
    update: Prisma.XOR<Prisma.BloodReservationUpdateWithoutBloodUnitInput, Prisma.BloodReservationUncheckedUpdateWithoutBloodUnitInput>;
    create: Prisma.XOR<Prisma.BloodReservationCreateWithoutBloodUnitInput, Prisma.BloodReservationUncheckedCreateWithoutBloodUnitInput>;
};
export type BloodReservationUpdateWithWhereUniqueWithoutBloodUnitInput = {
    where: Prisma.BloodReservationWhereUniqueInput;
    data: Prisma.XOR<Prisma.BloodReservationUpdateWithoutBloodUnitInput, Prisma.BloodReservationUncheckedUpdateWithoutBloodUnitInput>;
};
export type BloodReservationUpdateManyWithWhereWithoutBloodUnitInput = {
    where: Prisma.BloodReservationScalarWhereInput;
    data: Prisma.XOR<Prisma.BloodReservationUpdateManyMutationInput, Prisma.BloodReservationUncheckedUpdateManyWithoutBloodUnitInput>;
};
export type BloodReservationScalarWhereInput = {
    AND?: Prisma.BloodReservationScalarWhereInput | Prisma.BloodReservationScalarWhereInput[];
    OR?: Prisma.BloodReservationScalarWhereInput[];
    NOT?: Prisma.BloodReservationScalarWhereInput | Prisma.BloodReservationScalarWhereInput[];
    id?: Prisma.StringFilter<"BloodReservation"> | string;
    requestId?: Prisma.StringFilter<"BloodReservation"> | string;
    bloodUnitId?: Prisma.StringFilter<"BloodReservation"> | string;
    status?: Prisma.EnumReservationStatusFilter<"BloodReservation"> | $Enums.ReservationStatus;
    reservedAt?: Prisma.DateTimeFilter<"BloodReservation"> | Date | string;
    expiresAt?: Prisma.DateTimeNullableFilter<"BloodReservation"> | Date | string | null;
};
export type BloodReservationCreateWithoutRequestInput = {
    id?: string;
    status?: $Enums.ReservationStatus;
    reservedAt?: Date | string;
    expiresAt?: Date | string | null;
    bloodUnit: Prisma.BloodUnitCreateNestedOneWithoutReservationsInput;
};
export type BloodReservationUncheckedCreateWithoutRequestInput = {
    id?: string;
    bloodUnitId: string;
    status?: $Enums.ReservationStatus;
    reservedAt?: Date | string;
    expiresAt?: Date | string | null;
};
export type BloodReservationCreateOrConnectWithoutRequestInput = {
    where: Prisma.BloodReservationWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodReservationCreateWithoutRequestInput, Prisma.BloodReservationUncheckedCreateWithoutRequestInput>;
};
export type BloodReservationCreateManyRequestInputEnvelope = {
    data: Prisma.BloodReservationCreateManyRequestInput | Prisma.BloodReservationCreateManyRequestInput[];
    skipDuplicates?: boolean;
};
export type BloodReservationUpsertWithWhereUniqueWithoutRequestInput = {
    where: Prisma.BloodReservationWhereUniqueInput;
    update: Prisma.XOR<Prisma.BloodReservationUpdateWithoutRequestInput, Prisma.BloodReservationUncheckedUpdateWithoutRequestInput>;
    create: Prisma.XOR<Prisma.BloodReservationCreateWithoutRequestInput, Prisma.BloodReservationUncheckedCreateWithoutRequestInput>;
};
export type BloodReservationUpdateWithWhereUniqueWithoutRequestInput = {
    where: Prisma.BloodReservationWhereUniqueInput;
    data: Prisma.XOR<Prisma.BloodReservationUpdateWithoutRequestInput, Prisma.BloodReservationUncheckedUpdateWithoutRequestInput>;
};
export type BloodReservationUpdateManyWithWhereWithoutRequestInput = {
    where: Prisma.BloodReservationScalarWhereInput;
    data: Prisma.XOR<Prisma.BloodReservationUpdateManyMutationInput, Prisma.BloodReservationUncheckedUpdateManyWithoutRequestInput>;
};
export type BloodReservationCreateManyBloodUnitInput = {
    id?: string;
    requestId: string;
    status?: $Enums.ReservationStatus;
    reservedAt?: Date | string;
    expiresAt?: Date | string | null;
};
export type BloodReservationUpdateWithoutBloodUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    reservedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    request?: Prisma.HospitalRequestUpdateOneRequiredWithoutReservationsNestedInput;
};
export type BloodReservationUncheckedUpdateWithoutBloodUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    reservedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BloodReservationUncheckedUpdateManyWithoutBloodUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    requestId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    reservedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BloodReservationCreateManyRequestInput = {
    id?: string;
    bloodUnitId: string;
    status?: $Enums.ReservationStatus;
    reservedAt?: Date | string;
    expiresAt?: Date | string | null;
};
export type BloodReservationUpdateWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    reservedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    bloodUnit?: Prisma.BloodUnitUpdateOneRequiredWithoutReservationsNestedInput;
};
export type BloodReservationUncheckedUpdateWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodUnitId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    reservedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BloodReservationUncheckedUpdateManyWithoutRequestInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodUnitId?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.EnumReservationStatusFieldUpdateOperationsInput | $Enums.ReservationStatus;
    reservedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    expiresAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
};
export type BloodReservationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    bloodUnitId?: boolean;
    status?: boolean;
    reservedAt?: boolean;
    expiresAt?: boolean;
    request?: boolean | Prisma.HospitalRequestDefaultArgs<ExtArgs>;
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bloodReservation"]>;
export type BloodReservationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    bloodUnitId?: boolean;
    status?: boolean;
    reservedAt?: boolean;
    expiresAt?: boolean;
    request?: boolean | Prisma.HospitalRequestDefaultArgs<ExtArgs>;
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bloodReservation"]>;
export type BloodReservationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    requestId?: boolean;
    bloodUnitId?: boolean;
    status?: boolean;
    reservedAt?: boolean;
    expiresAt?: boolean;
    request?: boolean | Prisma.HospitalRequestDefaultArgs<ExtArgs>;
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bloodReservation"]>;
export type BloodReservationSelectScalar = {
    id?: boolean;
    requestId?: boolean;
    bloodUnitId?: boolean;
    status?: boolean;
    reservedAt?: boolean;
    expiresAt?: boolean;
};
export type BloodReservationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "requestId" | "bloodUnitId" | "status" | "reservedAt" | "expiresAt", ExtArgs["result"]["bloodReservation"]>;
export type BloodReservationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.HospitalRequestDefaultArgs<ExtArgs>;
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
};
export type BloodReservationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.HospitalRequestDefaultArgs<ExtArgs>;
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
};
export type BloodReservationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    request?: boolean | Prisma.HospitalRequestDefaultArgs<ExtArgs>;
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
};
export type $BloodReservationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BloodReservation";
    objects: {
        request: Prisma.$HospitalRequestPayload<ExtArgs>;
        bloodUnit: Prisma.$BloodUnitPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        requestId: string;
        bloodUnitId: string;
        status: $Enums.ReservationStatus;
        reservedAt: Date;
        expiresAt: Date | null;
    }, ExtArgs["result"]["bloodReservation"]>;
    composites: {};
};
export type BloodReservationGetPayload<S extends boolean | null | undefined | BloodReservationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BloodReservationPayload, S>;
export type BloodReservationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BloodReservationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BloodReservationCountAggregateInputType | true;
};
export interface BloodReservationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BloodReservation'];
        meta: {
            name: 'BloodReservation';
        };
    };
    findUnique<T extends BloodReservationFindUniqueArgs>(args: Prisma.SelectSubset<T, BloodReservationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BloodReservationClient<runtime.Types.Result.GetResult<Prisma.$BloodReservationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BloodReservationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BloodReservationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BloodReservationClient<runtime.Types.Result.GetResult<Prisma.$BloodReservationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BloodReservationFindFirstArgs>(args?: Prisma.SelectSubset<T, BloodReservationFindFirstArgs<ExtArgs>>): Prisma.Prisma__BloodReservationClient<runtime.Types.Result.GetResult<Prisma.$BloodReservationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BloodReservationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BloodReservationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BloodReservationClient<runtime.Types.Result.GetResult<Prisma.$BloodReservationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BloodReservationFindManyArgs>(args?: Prisma.SelectSubset<T, BloodReservationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodReservationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BloodReservationCreateArgs>(args: Prisma.SelectSubset<T, BloodReservationCreateArgs<ExtArgs>>): Prisma.Prisma__BloodReservationClient<runtime.Types.Result.GetResult<Prisma.$BloodReservationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BloodReservationCreateManyArgs>(args?: Prisma.SelectSubset<T, BloodReservationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BloodReservationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BloodReservationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodReservationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BloodReservationDeleteArgs>(args: Prisma.SelectSubset<T, BloodReservationDeleteArgs<ExtArgs>>): Prisma.Prisma__BloodReservationClient<runtime.Types.Result.GetResult<Prisma.$BloodReservationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BloodReservationUpdateArgs>(args: Prisma.SelectSubset<T, BloodReservationUpdateArgs<ExtArgs>>): Prisma.Prisma__BloodReservationClient<runtime.Types.Result.GetResult<Prisma.$BloodReservationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BloodReservationDeleteManyArgs>(args?: Prisma.SelectSubset<T, BloodReservationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BloodReservationUpdateManyArgs>(args: Prisma.SelectSubset<T, BloodReservationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BloodReservationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BloodReservationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodReservationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BloodReservationUpsertArgs>(args: Prisma.SelectSubset<T, BloodReservationUpsertArgs<ExtArgs>>): Prisma.Prisma__BloodReservationClient<runtime.Types.Result.GetResult<Prisma.$BloodReservationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BloodReservationCountArgs>(args?: Prisma.Subset<T, BloodReservationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BloodReservationCountAggregateOutputType> : number>;
    aggregate<T extends BloodReservationAggregateArgs>(args: Prisma.Subset<T, BloodReservationAggregateArgs>): Prisma.PrismaPromise<GetBloodReservationAggregateType<T>>;
    groupBy<T extends BloodReservationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BloodReservationGroupByArgs['orderBy'];
    } : {
        orderBy?: BloodReservationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BloodReservationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloodReservationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BloodReservationFieldRefs;
}
export interface Prisma__BloodReservationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    request<T extends Prisma.HospitalRequestDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.HospitalRequestDefaultArgs<ExtArgs>>): Prisma.Prisma__HospitalRequestClient<runtime.Types.Result.GetResult<Prisma.$HospitalRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    bloodUnit<T extends Prisma.BloodUnitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BloodUnitDefaultArgs<ExtArgs>>): Prisma.Prisma__BloodUnitClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BloodReservationFieldRefs {
    readonly id: Prisma.FieldRef<"BloodReservation", 'String'>;
    readonly requestId: Prisma.FieldRef<"BloodReservation", 'String'>;
    readonly bloodUnitId: Prisma.FieldRef<"BloodReservation", 'String'>;
    readonly status: Prisma.FieldRef<"BloodReservation", 'ReservationStatus'>;
    readonly reservedAt: Prisma.FieldRef<"BloodReservation", 'DateTime'>;
    readonly expiresAt: Prisma.FieldRef<"BloodReservation", 'DateTime'>;
}
export type BloodReservationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodReservationSelect<ExtArgs> | null;
    omit?: Prisma.BloodReservationOmit<ExtArgs> | null;
    include?: Prisma.BloodReservationInclude<ExtArgs> | null;
    where: Prisma.BloodReservationWhereUniqueInput;
};
export type BloodReservationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodReservationSelect<ExtArgs> | null;
    omit?: Prisma.BloodReservationOmit<ExtArgs> | null;
    include?: Prisma.BloodReservationInclude<ExtArgs> | null;
    where: Prisma.BloodReservationWhereUniqueInput;
};
export type BloodReservationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BloodReservationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BloodReservationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BloodReservationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodReservationSelect<ExtArgs> | null;
    omit?: Prisma.BloodReservationOmit<ExtArgs> | null;
    include?: Prisma.BloodReservationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BloodReservationCreateInput, Prisma.BloodReservationUncheckedCreateInput>;
};
export type BloodReservationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BloodReservationCreateManyInput | Prisma.BloodReservationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BloodReservationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodReservationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BloodReservationOmit<ExtArgs> | null;
    data: Prisma.BloodReservationCreateManyInput | Prisma.BloodReservationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BloodReservationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BloodReservationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodReservationSelect<ExtArgs> | null;
    omit?: Prisma.BloodReservationOmit<ExtArgs> | null;
    include?: Prisma.BloodReservationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BloodReservationUpdateInput, Prisma.BloodReservationUncheckedUpdateInput>;
    where: Prisma.BloodReservationWhereUniqueInput;
};
export type BloodReservationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BloodReservationUpdateManyMutationInput, Prisma.BloodReservationUncheckedUpdateManyInput>;
    where?: Prisma.BloodReservationWhereInput;
    limit?: number;
};
export type BloodReservationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodReservationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BloodReservationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BloodReservationUpdateManyMutationInput, Prisma.BloodReservationUncheckedUpdateManyInput>;
    where?: Prisma.BloodReservationWhereInput;
    limit?: number;
    include?: Prisma.BloodReservationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BloodReservationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodReservationSelect<ExtArgs> | null;
    omit?: Prisma.BloodReservationOmit<ExtArgs> | null;
    include?: Prisma.BloodReservationInclude<ExtArgs> | null;
    where: Prisma.BloodReservationWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodReservationCreateInput, Prisma.BloodReservationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BloodReservationUpdateInput, Prisma.BloodReservationUncheckedUpdateInput>;
};
export type BloodReservationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodReservationSelect<ExtArgs> | null;
    omit?: Prisma.BloodReservationOmit<ExtArgs> | null;
    include?: Prisma.BloodReservationInclude<ExtArgs> | null;
    where: Prisma.BloodReservationWhereUniqueInput;
};
export type BloodReservationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodReservationWhereInput;
    limit?: number;
};
export type BloodReservationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodReservationSelect<ExtArgs> | null;
    omit?: Prisma.BloodReservationOmit<ExtArgs> | null;
    include?: Prisma.BloodReservationInclude<ExtArgs> | null;
};
