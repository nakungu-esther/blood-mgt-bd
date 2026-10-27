import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type BloodUnitEventModel = runtime.Types.Result.DefaultSelection<Prisma.$BloodUnitEventPayload>;
export type AggregateBloodUnitEvent = {
    _count: BloodUnitEventCountAggregateOutputType | null;
    _min: BloodUnitEventMinAggregateOutputType | null;
    _max: BloodUnitEventMaxAggregateOutputType | null;
};
export type BloodUnitEventMinAggregateOutputType = {
    id: string | null;
    bloodUnitId: string | null;
    eventType: string | null;
    description: string | null;
    actorId: string | null;
    facilityId: string | null;
    occurredAt: Date | null;
};
export type BloodUnitEventMaxAggregateOutputType = {
    id: string | null;
    bloodUnitId: string | null;
    eventType: string | null;
    description: string | null;
    actorId: string | null;
    facilityId: string | null;
    occurredAt: Date | null;
};
export type BloodUnitEventCountAggregateOutputType = {
    id: number;
    bloodUnitId: number;
    eventType: number;
    description: number;
    actorId: number;
    facilityId: number;
    metadata: number;
    occurredAt: number;
    _all: number;
};
export type BloodUnitEventMinAggregateInputType = {
    id?: true;
    bloodUnitId?: true;
    eventType?: true;
    description?: true;
    actorId?: true;
    facilityId?: true;
    occurredAt?: true;
};
export type BloodUnitEventMaxAggregateInputType = {
    id?: true;
    bloodUnitId?: true;
    eventType?: true;
    description?: true;
    actorId?: true;
    facilityId?: true;
    occurredAt?: true;
};
export type BloodUnitEventCountAggregateInputType = {
    id?: true;
    bloodUnitId?: true;
    eventType?: true;
    description?: true;
    actorId?: true;
    facilityId?: true;
    metadata?: true;
    occurredAt?: true;
    _all?: true;
};
export type BloodUnitEventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodUnitEventWhereInput;
    orderBy?: Prisma.BloodUnitEventOrderByWithRelationInput | Prisma.BloodUnitEventOrderByWithRelationInput[];
    cursor?: Prisma.BloodUnitEventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BloodUnitEventCountAggregateInputType;
    _min?: BloodUnitEventMinAggregateInputType;
    _max?: BloodUnitEventMaxAggregateInputType;
};
export type GetBloodUnitEventAggregateType<T extends BloodUnitEventAggregateArgs> = {
    [P in keyof T & keyof AggregateBloodUnitEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBloodUnitEvent[P]> : Prisma.GetScalarType<T[P], AggregateBloodUnitEvent[P]>;
};
export type BloodUnitEventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodUnitEventWhereInput;
    orderBy?: Prisma.BloodUnitEventOrderByWithAggregationInput | Prisma.BloodUnitEventOrderByWithAggregationInput[];
    by: Prisma.BloodUnitEventScalarFieldEnum[] | Prisma.BloodUnitEventScalarFieldEnum;
    having?: Prisma.BloodUnitEventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BloodUnitEventCountAggregateInputType | true;
    _min?: BloodUnitEventMinAggregateInputType;
    _max?: BloodUnitEventMaxAggregateInputType;
};
export type BloodUnitEventGroupByOutputType = {
    id: string;
    bloodUnitId: string;
    eventType: string;
    description: string | null;
    actorId: string | null;
    facilityId: string | null;
    metadata: runtime.JsonValue | null;
    occurredAt: Date;
    _count: BloodUnitEventCountAggregateOutputType | null;
    _min: BloodUnitEventMinAggregateOutputType | null;
    _max: BloodUnitEventMaxAggregateOutputType | null;
};
export type GetBloodUnitEventGroupByPayload<T extends BloodUnitEventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BloodUnitEventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BloodUnitEventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BloodUnitEventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BloodUnitEventGroupByOutputType[P]>;
}>>;
export type BloodUnitEventWhereInput = {
    AND?: Prisma.BloodUnitEventWhereInput | Prisma.BloodUnitEventWhereInput[];
    OR?: Prisma.BloodUnitEventWhereInput[];
    NOT?: Prisma.BloodUnitEventWhereInput | Prisma.BloodUnitEventWhereInput[];
    id?: Prisma.StringFilter<"BloodUnitEvent"> | string;
    bloodUnitId?: Prisma.StringFilter<"BloodUnitEvent"> | string;
    eventType?: Prisma.StringFilter<"BloodUnitEvent"> | string;
    description?: Prisma.StringNullableFilter<"BloodUnitEvent"> | string | null;
    actorId?: Prisma.StringNullableFilter<"BloodUnitEvent"> | string | null;
    facilityId?: Prisma.StringNullableFilter<"BloodUnitEvent"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"BloodUnitEvent">;
    occurredAt?: Prisma.DateTimeFilter<"BloodUnitEvent"> | Date | string;
    bloodUnit?: Prisma.XOR<Prisma.BloodUnitScalarRelationFilter, Prisma.BloodUnitWhereInput>;
};
export type BloodUnitEventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    actorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    facilityId?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    bloodUnit?: Prisma.BloodUnitOrderByWithRelationInput;
};
export type BloodUnitEventWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BloodUnitEventWhereInput | Prisma.BloodUnitEventWhereInput[];
    OR?: Prisma.BloodUnitEventWhereInput[];
    NOT?: Prisma.BloodUnitEventWhereInput | Prisma.BloodUnitEventWhereInput[];
    bloodUnitId?: Prisma.StringFilter<"BloodUnitEvent"> | string;
    eventType?: Prisma.StringFilter<"BloodUnitEvent"> | string;
    description?: Prisma.StringNullableFilter<"BloodUnitEvent"> | string | null;
    actorId?: Prisma.StringNullableFilter<"BloodUnitEvent"> | string | null;
    facilityId?: Prisma.StringNullableFilter<"BloodUnitEvent"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"BloodUnitEvent">;
    occurredAt?: Prisma.DateTimeFilter<"BloodUnitEvent"> | Date | string;
    bloodUnit?: Prisma.XOR<Prisma.BloodUnitScalarRelationFilter, Prisma.BloodUnitWhereInput>;
}, "id">;
export type BloodUnitEventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    description?: Prisma.SortOrderInput | Prisma.SortOrder;
    actorId?: Prisma.SortOrderInput | Prisma.SortOrder;
    facilityId?: Prisma.SortOrderInput | Prisma.SortOrder;
    metadata?: Prisma.SortOrderInput | Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
    _count?: Prisma.BloodUnitEventCountOrderByAggregateInput;
    _max?: Prisma.BloodUnitEventMaxOrderByAggregateInput;
    _min?: Prisma.BloodUnitEventMinOrderByAggregateInput;
};
export type BloodUnitEventScalarWhereWithAggregatesInput = {
    AND?: Prisma.BloodUnitEventScalarWhereWithAggregatesInput | Prisma.BloodUnitEventScalarWhereWithAggregatesInput[];
    OR?: Prisma.BloodUnitEventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BloodUnitEventScalarWhereWithAggregatesInput | Prisma.BloodUnitEventScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"BloodUnitEvent"> | string;
    bloodUnitId?: Prisma.StringWithAggregatesFilter<"BloodUnitEvent"> | string;
    eventType?: Prisma.StringWithAggregatesFilter<"BloodUnitEvent"> | string;
    description?: Prisma.StringNullableWithAggregatesFilter<"BloodUnitEvent"> | string | null;
    actorId?: Prisma.StringNullableWithAggregatesFilter<"BloodUnitEvent"> | string | null;
    facilityId?: Prisma.StringNullableWithAggregatesFilter<"BloodUnitEvent"> | string | null;
    metadata?: Prisma.JsonNullableWithAggregatesFilter<"BloodUnitEvent">;
    occurredAt?: Prisma.DateTimeWithAggregatesFilter<"BloodUnitEvent"> | Date | string;
};
export type BloodUnitEventCreateInput = {
    id?: string;
    eventType: string;
    description?: string | null;
    actorId?: string | null;
    facilityId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
    bloodUnit: Prisma.BloodUnitCreateNestedOneWithoutEventsInput;
};
export type BloodUnitEventUncheckedCreateInput = {
    id?: string;
    bloodUnitId: string;
    eventType: string;
    description?: string | null;
    actorId?: string | null;
    facilityId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
};
export type BloodUnitEventUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facilityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bloodUnit?: Prisma.BloodUnitUpdateOneRequiredWithoutEventsNestedInput;
};
export type BloodUnitEventUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodUnitId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facilityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BloodUnitEventCreateManyInput = {
    id?: string;
    bloodUnitId: string;
    eventType: string;
    description?: string | null;
    actorId?: string | null;
    facilityId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
};
export type BloodUnitEventUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facilityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BloodUnitEventUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodUnitId?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facilityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BloodUnitEventListRelationFilter = {
    every?: Prisma.BloodUnitEventWhereInput;
    some?: Prisma.BloodUnitEventWhereInput;
    none?: Prisma.BloodUnitEventWhereInput;
};
export type BloodUnitEventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BloodUnitEventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    metadata?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type BloodUnitEventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type BloodUnitEventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    eventType?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    actorId?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    occurredAt?: Prisma.SortOrder;
};
export type BloodUnitEventCreateNestedManyWithoutBloodUnitInput = {
    create?: Prisma.XOR<Prisma.BloodUnitEventCreateWithoutBloodUnitInput, Prisma.BloodUnitEventUncheckedCreateWithoutBloodUnitInput> | Prisma.BloodUnitEventCreateWithoutBloodUnitInput[] | Prisma.BloodUnitEventUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.BloodUnitEventCreateOrConnectWithoutBloodUnitInput | Prisma.BloodUnitEventCreateOrConnectWithoutBloodUnitInput[];
    createMany?: Prisma.BloodUnitEventCreateManyBloodUnitInputEnvelope;
    connect?: Prisma.BloodUnitEventWhereUniqueInput | Prisma.BloodUnitEventWhereUniqueInput[];
};
export type BloodUnitEventUncheckedCreateNestedManyWithoutBloodUnitInput = {
    create?: Prisma.XOR<Prisma.BloodUnitEventCreateWithoutBloodUnitInput, Prisma.BloodUnitEventUncheckedCreateWithoutBloodUnitInput> | Prisma.BloodUnitEventCreateWithoutBloodUnitInput[] | Prisma.BloodUnitEventUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.BloodUnitEventCreateOrConnectWithoutBloodUnitInput | Prisma.BloodUnitEventCreateOrConnectWithoutBloodUnitInput[];
    createMany?: Prisma.BloodUnitEventCreateManyBloodUnitInputEnvelope;
    connect?: Prisma.BloodUnitEventWhereUniqueInput | Prisma.BloodUnitEventWhereUniqueInput[];
};
export type BloodUnitEventUpdateManyWithoutBloodUnitNestedInput = {
    create?: Prisma.XOR<Prisma.BloodUnitEventCreateWithoutBloodUnitInput, Prisma.BloodUnitEventUncheckedCreateWithoutBloodUnitInput> | Prisma.BloodUnitEventCreateWithoutBloodUnitInput[] | Prisma.BloodUnitEventUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.BloodUnitEventCreateOrConnectWithoutBloodUnitInput | Prisma.BloodUnitEventCreateOrConnectWithoutBloodUnitInput[];
    upsert?: Prisma.BloodUnitEventUpsertWithWhereUniqueWithoutBloodUnitInput | Prisma.BloodUnitEventUpsertWithWhereUniqueWithoutBloodUnitInput[];
    createMany?: Prisma.BloodUnitEventCreateManyBloodUnitInputEnvelope;
    set?: Prisma.BloodUnitEventWhereUniqueInput | Prisma.BloodUnitEventWhereUniqueInput[];
    disconnect?: Prisma.BloodUnitEventWhereUniqueInput | Prisma.BloodUnitEventWhereUniqueInput[];
    delete?: Prisma.BloodUnitEventWhereUniqueInput | Prisma.BloodUnitEventWhereUniqueInput[];
    connect?: Prisma.BloodUnitEventWhereUniqueInput | Prisma.BloodUnitEventWhereUniqueInput[];
    update?: Prisma.BloodUnitEventUpdateWithWhereUniqueWithoutBloodUnitInput | Prisma.BloodUnitEventUpdateWithWhereUniqueWithoutBloodUnitInput[];
    updateMany?: Prisma.BloodUnitEventUpdateManyWithWhereWithoutBloodUnitInput | Prisma.BloodUnitEventUpdateManyWithWhereWithoutBloodUnitInput[];
    deleteMany?: Prisma.BloodUnitEventScalarWhereInput | Prisma.BloodUnitEventScalarWhereInput[];
};
export type BloodUnitEventUncheckedUpdateManyWithoutBloodUnitNestedInput = {
    create?: Prisma.XOR<Prisma.BloodUnitEventCreateWithoutBloodUnitInput, Prisma.BloodUnitEventUncheckedCreateWithoutBloodUnitInput> | Prisma.BloodUnitEventCreateWithoutBloodUnitInput[] | Prisma.BloodUnitEventUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.BloodUnitEventCreateOrConnectWithoutBloodUnitInput | Prisma.BloodUnitEventCreateOrConnectWithoutBloodUnitInput[];
    upsert?: Prisma.BloodUnitEventUpsertWithWhereUniqueWithoutBloodUnitInput | Prisma.BloodUnitEventUpsertWithWhereUniqueWithoutBloodUnitInput[];
    createMany?: Prisma.BloodUnitEventCreateManyBloodUnitInputEnvelope;
    set?: Prisma.BloodUnitEventWhereUniqueInput | Prisma.BloodUnitEventWhereUniqueInput[];
    disconnect?: Prisma.BloodUnitEventWhereUniqueInput | Prisma.BloodUnitEventWhereUniqueInput[];
    delete?: Prisma.BloodUnitEventWhereUniqueInput | Prisma.BloodUnitEventWhereUniqueInput[];
    connect?: Prisma.BloodUnitEventWhereUniqueInput | Prisma.BloodUnitEventWhereUniqueInput[];
    update?: Prisma.BloodUnitEventUpdateWithWhereUniqueWithoutBloodUnitInput | Prisma.BloodUnitEventUpdateWithWhereUniqueWithoutBloodUnitInput[];
    updateMany?: Prisma.BloodUnitEventUpdateManyWithWhereWithoutBloodUnitInput | Prisma.BloodUnitEventUpdateManyWithWhereWithoutBloodUnitInput[];
    deleteMany?: Prisma.BloodUnitEventScalarWhereInput | Prisma.BloodUnitEventScalarWhereInput[];
};
export type BloodUnitEventCreateWithoutBloodUnitInput = {
    id?: string;
    eventType: string;
    description?: string | null;
    actorId?: string | null;
    facilityId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
};
export type BloodUnitEventUncheckedCreateWithoutBloodUnitInput = {
    id?: string;
    eventType: string;
    description?: string | null;
    actorId?: string | null;
    facilityId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
};
export type BloodUnitEventCreateOrConnectWithoutBloodUnitInput = {
    where: Prisma.BloodUnitEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodUnitEventCreateWithoutBloodUnitInput, Prisma.BloodUnitEventUncheckedCreateWithoutBloodUnitInput>;
};
export type BloodUnitEventCreateManyBloodUnitInputEnvelope = {
    data: Prisma.BloodUnitEventCreateManyBloodUnitInput | Prisma.BloodUnitEventCreateManyBloodUnitInput[];
    skipDuplicates?: boolean;
};
export type BloodUnitEventUpsertWithWhereUniqueWithoutBloodUnitInput = {
    where: Prisma.BloodUnitEventWhereUniqueInput;
    update: Prisma.XOR<Prisma.BloodUnitEventUpdateWithoutBloodUnitInput, Prisma.BloodUnitEventUncheckedUpdateWithoutBloodUnitInput>;
    create: Prisma.XOR<Prisma.BloodUnitEventCreateWithoutBloodUnitInput, Prisma.BloodUnitEventUncheckedCreateWithoutBloodUnitInput>;
};
export type BloodUnitEventUpdateWithWhereUniqueWithoutBloodUnitInput = {
    where: Prisma.BloodUnitEventWhereUniqueInput;
    data: Prisma.XOR<Prisma.BloodUnitEventUpdateWithoutBloodUnitInput, Prisma.BloodUnitEventUncheckedUpdateWithoutBloodUnitInput>;
};
export type BloodUnitEventUpdateManyWithWhereWithoutBloodUnitInput = {
    where: Prisma.BloodUnitEventScalarWhereInput;
    data: Prisma.XOR<Prisma.BloodUnitEventUpdateManyMutationInput, Prisma.BloodUnitEventUncheckedUpdateManyWithoutBloodUnitInput>;
};
export type BloodUnitEventScalarWhereInput = {
    AND?: Prisma.BloodUnitEventScalarWhereInput | Prisma.BloodUnitEventScalarWhereInput[];
    OR?: Prisma.BloodUnitEventScalarWhereInput[];
    NOT?: Prisma.BloodUnitEventScalarWhereInput | Prisma.BloodUnitEventScalarWhereInput[];
    id?: Prisma.StringFilter<"BloodUnitEvent"> | string;
    bloodUnitId?: Prisma.StringFilter<"BloodUnitEvent"> | string;
    eventType?: Prisma.StringFilter<"BloodUnitEvent"> | string;
    description?: Prisma.StringNullableFilter<"BloodUnitEvent"> | string | null;
    actorId?: Prisma.StringNullableFilter<"BloodUnitEvent"> | string | null;
    facilityId?: Prisma.StringNullableFilter<"BloodUnitEvent"> | string | null;
    metadata?: Prisma.JsonNullableFilter<"BloodUnitEvent">;
    occurredAt?: Prisma.DateTimeFilter<"BloodUnitEvent"> | Date | string;
};
export type BloodUnitEventCreateManyBloodUnitInput = {
    id?: string;
    eventType: string;
    description?: string | null;
    actorId?: string | null;
    facilityId?: string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Date | string;
};
export type BloodUnitEventUpdateWithoutBloodUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facilityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BloodUnitEventUncheckedUpdateWithoutBloodUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facilityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BloodUnitEventUncheckedUpdateManyWithoutBloodUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    eventType?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    actorId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    facilityId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    metadata?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    occurredAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BloodUnitEventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bloodUnitId?: boolean;
    eventType?: boolean;
    description?: boolean;
    actorId?: boolean;
    facilityId?: boolean;
    metadata?: boolean;
    occurredAt?: boolean;
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bloodUnitEvent"]>;
export type BloodUnitEventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bloodUnitId?: boolean;
    eventType?: boolean;
    description?: boolean;
    actorId?: boolean;
    facilityId?: boolean;
    metadata?: boolean;
    occurredAt?: boolean;
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bloodUnitEvent"]>;
export type BloodUnitEventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bloodUnitId?: boolean;
    eventType?: boolean;
    description?: boolean;
    actorId?: boolean;
    facilityId?: boolean;
    metadata?: boolean;
    occurredAt?: boolean;
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["bloodUnitEvent"]>;
export type BloodUnitEventSelectScalar = {
    id?: boolean;
    bloodUnitId?: boolean;
    eventType?: boolean;
    description?: boolean;
    actorId?: boolean;
    facilityId?: boolean;
    metadata?: boolean;
    occurredAt?: boolean;
};
export type BloodUnitEventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bloodUnitId" | "eventType" | "description" | "actorId" | "facilityId" | "metadata" | "occurredAt", ExtArgs["result"]["bloodUnitEvent"]>;
export type BloodUnitEventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
};
export type BloodUnitEventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
};
export type BloodUnitEventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
};
export type $BloodUnitEventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "BloodUnitEvent";
    objects: {
        bloodUnit: Prisma.$BloodUnitPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bloodUnitId: string;
        eventType: string;
        description: string | null;
        actorId: string | null;
        facilityId: string | null;
        metadata: runtime.JsonValue | null;
        occurredAt: Date;
    }, ExtArgs["result"]["bloodUnitEvent"]>;
    composites: {};
};
export type BloodUnitEventGetPayload<S extends boolean | null | undefined | BloodUnitEventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BloodUnitEventPayload, S>;
export type BloodUnitEventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BloodUnitEventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BloodUnitEventCountAggregateInputType | true;
};
export interface BloodUnitEventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['BloodUnitEvent'];
        meta: {
            name: 'BloodUnitEvent';
        };
    };
    findUnique<T extends BloodUnitEventFindUniqueArgs>(args: Prisma.SelectSubset<T, BloodUnitEventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BloodUnitEventClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitEventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BloodUnitEventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BloodUnitEventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BloodUnitEventClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitEventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BloodUnitEventFindFirstArgs>(args?: Prisma.SelectSubset<T, BloodUnitEventFindFirstArgs<ExtArgs>>): Prisma.Prisma__BloodUnitEventClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitEventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BloodUnitEventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BloodUnitEventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BloodUnitEventClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitEventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BloodUnitEventFindManyArgs>(args?: Prisma.SelectSubset<T, BloodUnitEventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodUnitEventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BloodUnitEventCreateArgs>(args: Prisma.SelectSubset<T, BloodUnitEventCreateArgs<ExtArgs>>): Prisma.Prisma__BloodUnitEventClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitEventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BloodUnitEventCreateManyArgs>(args?: Prisma.SelectSubset<T, BloodUnitEventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BloodUnitEventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BloodUnitEventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodUnitEventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BloodUnitEventDeleteArgs>(args: Prisma.SelectSubset<T, BloodUnitEventDeleteArgs<ExtArgs>>): Prisma.Prisma__BloodUnitEventClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitEventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BloodUnitEventUpdateArgs>(args: Prisma.SelectSubset<T, BloodUnitEventUpdateArgs<ExtArgs>>): Prisma.Prisma__BloodUnitEventClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitEventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BloodUnitEventDeleteManyArgs>(args?: Prisma.SelectSubset<T, BloodUnitEventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BloodUnitEventUpdateManyArgs>(args: Prisma.SelectSubset<T, BloodUnitEventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BloodUnitEventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BloodUnitEventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BloodUnitEventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BloodUnitEventUpsertArgs>(args: Prisma.SelectSubset<T, BloodUnitEventUpsertArgs<ExtArgs>>): Prisma.Prisma__BloodUnitEventClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitEventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BloodUnitEventCountArgs>(args?: Prisma.Subset<T, BloodUnitEventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BloodUnitEventCountAggregateOutputType> : number>;
    aggregate<T extends BloodUnitEventAggregateArgs>(args: Prisma.Subset<T, BloodUnitEventAggregateArgs>): Prisma.PrismaPromise<GetBloodUnitEventAggregateType<T>>;
    groupBy<T extends BloodUnitEventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BloodUnitEventGroupByArgs['orderBy'];
    } : {
        orderBy?: BloodUnitEventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BloodUnitEventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBloodUnitEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BloodUnitEventFieldRefs;
}
export interface Prisma__BloodUnitEventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bloodUnit<T extends Prisma.BloodUnitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BloodUnitDefaultArgs<ExtArgs>>): Prisma.Prisma__BloodUnitClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BloodUnitEventFieldRefs {
    readonly id: Prisma.FieldRef<"BloodUnitEvent", 'String'>;
    readonly bloodUnitId: Prisma.FieldRef<"BloodUnitEvent", 'String'>;
    readonly eventType: Prisma.FieldRef<"BloodUnitEvent", 'String'>;
    readonly description: Prisma.FieldRef<"BloodUnitEvent", 'String'>;
    readonly actorId: Prisma.FieldRef<"BloodUnitEvent", 'String'>;
    readonly facilityId: Prisma.FieldRef<"BloodUnitEvent", 'String'>;
    readonly metadata: Prisma.FieldRef<"BloodUnitEvent", 'Json'>;
    readonly occurredAt: Prisma.FieldRef<"BloodUnitEvent", 'DateTime'>;
}
export type BloodUnitEventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitEventSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitEventOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitEventInclude<ExtArgs> | null;
    where: Prisma.BloodUnitEventWhereUniqueInput;
};
export type BloodUnitEventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitEventSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitEventOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitEventInclude<ExtArgs> | null;
    where: Prisma.BloodUnitEventWhereUniqueInput;
};
export type BloodUnitEventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BloodUnitEventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BloodUnitEventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type BloodUnitEventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitEventSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitEventOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BloodUnitEventCreateInput, Prisma.BloodUnitEventUncheckedCreateInput>;
};
export type BloodUnitEventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BloodUnitEventCreateManyInput | Prisma.BloodUnitEventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BloodUnitEventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitEventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BloodUnitEventOmit<ExtArgs> | null;
    data: Prisma.BloodUnitEventCreateManyInput | Prisma.BloodUnitEventCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BloodUnitEventIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BloodUnitEventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitEventSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitEventOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitEventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BloodUnitEventUpdateInput, Prisma.BloodUnitEventUncheckedUpdateInput>;
    where: Prisma.BloodUnitEventWhereUniqueInput;
};
export type BloodUnitEventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BloodUnitEventUpdateManyMutationInput, Prisma.BloodUnitEventUncheckedUpdateManyInput>;
    where?: Prisma.BloodUnitEventWhereInput;
    limit?: number;
};
export type BloodUnitEventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitEventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BloodUnitEventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BloodUnitEventUpdateManyMutationInput, Prisma.BloodUnitEventUncheckedUpdateManyInput>;
    where?: Prisma.BloodUnitEventWhereInput;
    limit?: number;
    include?: Prisma.BloodUnitEventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BloodUnitEventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitEventSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitEventOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitEventInclude<ExtArgs> | null;
    where: Prisma.BloodUnitEventWhereUniqueInput;
    create: Prisma.XOR<Prisma.BloodUnitEventCreateInput, Prisma.BloodUnitEventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BloodUnitEventUpdateInput, Prisma.BloodUnitEventUncheckedUpdateInput>;
};
export type BloodUnitEventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitEventSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitEventOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitEventInclude<ExtArgs> | null;
    where: Prisma.BloodUnitEventWhereUniqueInput;
};
export type BloodUnitEventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BloodUnitEventWhereInput;
    limit?: number;
};
export type BloodUnitEventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BloodUnitEventSelect<ExtArgs> | null;
    omit?: Prisma.BloodUnitEventOmit<ExtArgs> | null;
    include?: Prisma.BloodUnitEventInclude<ExtArgs> | null;
};
