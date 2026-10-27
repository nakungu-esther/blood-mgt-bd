import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type LabTestModel = runtime.Types.Result.DefaultSelection<Prisma.$LabTestPayload>;
export type AggregateLabTest = {
    _count: LabTestCountAggregateOutputType | null;
    _min: LabTestMinAggregateOutputType | null;
    _max: LabTestMaxAggregateOutputType | null;
};
export type LabTestMinAggregateOutputType = {
    id: string | null;
    bloodUnitId: string | null;
    testName: string | null;
    result: $Enums.TestResult | null;
    testedAt: Date | null;
    technicianId: string | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LabTestMaxAggregateOutputType = {
    id: string | null;
    bloodUnitId: string | null;
    testName: string | null;
    result: $Enums.TestResult | null;
    testedAt: Date | null;
    technicianId: string | null;
    notes: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type LabTestCountAggregateOutputType = {
    id: number;
    bloodUnitId: number;
    testName: number;
    result: number;
    testedAt: number;
    technicianId: number;
    notes: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type LabTestMinAggregateInputType = {
    id?: true;
    bloodUnitId?: true;
    testName?: true;
    result?: true;
    testedAt?: true;
    technicianId?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LabTestMaxAggregateInputType = {
    id?: true;
    bloodUnitId?: true;
    testName?: true;
    result?: true;
    testedAt?: true;
    technicianId?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type LabTestCountAggregateInputType = {
    id?: true;
    bloodUnitId?: true;
    testName?: true;
    result?: true;
    testedAt?: true;
    technicianId?: true;
    notes?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type LabTestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LabTestWhereInput;
    orderBy?: Prisma.LabTestOrderByWithRelationInput | Prisma.LabTestOrderByWithRelationInput[];
    cursor?: Prisma.LabTestWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | LabTestCountAggregateInputType;
    _min?: LabTestMinAggregateInputType;
    _max?: LabTestMaxAggregateInputType;
};
export type GetLabTestAggregateType<T extends LabTestAggregateArgs> = {
    [P in keyof T & keyof AggregateLabTest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateLabTest[P]> : Prisma.GetScalarType<T[P], AggregateLabTest[P]>;
};
export type LabTestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LabTestWhereInput;
    orderBy?: Prisma.LabTestOrderByWithAggregationInput | Prisma.LabTestOrderByWithAggregationInput[];
    by: Prisma.LabTestScalarFieldEnum[] | Prisma.LabTestScalarFieldEnum;
    having?: Prisma.LabTestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: LabTestCountAggregateInputType | true;
    _min?: LabTestMinAggregateInputType;
    _max?: LabTestMaxAggregateInputType;
};
export type LabTestGroupByOutputType = {
    id: string;
    bloodUnitId: string;
    testName: string;
    result: $Enums.TestResult;
    testedAt: Date | null;
    technicianId: string | null;
    notes: string | null;
    createdAt: Date;
    updatedAt: Date;
    _count: LabTestCountAggregateOutputType | null;
    _min: LabTestMinAggregateOutputType | null;
    _max: LabTestMaxAggregateOutputType | null;
};
export type GetLabTestGroupByPayload<T extends LabTestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<LabTestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof LabTestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], LabTestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], LabTestGroupByOutputType[P]>;
}>>;
export type LabTestWhereInput = {
    AND?: Prisma.LabTestWhereInput | Prisma.LabTestWhereInput[];
    OR?: Prisma.LabTestWhereInput[];
    NOT?: Prisma.LabTestWhereInput | Prisma.LabTestWhereInput[];
    id?: Prisma.StringFilter<"LabTest"> | string;
    bloodUnitId?: Prisma.StringFilter<"LabTest"> | string;
    testName?: Prisma.StringFilter<"LabTest"> | string;
    result?: Prisma.EnumTestResultFilter<"LabTest"> | $Enums.TestResult;
    testedAt?: Prisma.DateTimeNullableFilter<"LabTest"> | Date | string | null;
    technicianId?: Prisma.StringNullableFilter<"LabTest"> | string | null;
    notes?: Prisma.StringNullableFilter<"LabTest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LabTest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LabTest"> | Date | string;
    bloodUnit?: Prisma.XOR<Prisma.BloodUnitScalarRelationFilter, Prisma.BloodUnitWhereInput>;
};
export type LabTestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    testName?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    testedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    technicianId?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    bloodUnit?: Prisma.BloodUnitOrderByWithRelationInput;
};
export type LabTestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.LabTestWhereInput | Prisma.LabTestWhereInput[];
    OR?: Prisma.LabTestWhereInput[];
    NOT?: Prisma.LabTestWhereInput | Prisma.LabTestWhereInput[];
    bloodUnitId?: Prisma.StringFilter<"LabTest"> | string;
    testName?: Prisma.StringFilter<"LabTest"> | string;
    result?: Prisma.EnumTestResultFilter<"LabTest"> | $Enums.TestResult;
    testedAt?: Prisma.DateTimeNullableFilter<"LabTest"> | Date | string | null;
    technicianId?: Prisma.StringNullableFilter<"LabTest"> | string | null;
    notes?: Prisma.StringNullableFilter<"LabTest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LabTest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LabTest"> | Date | string;
    bloodUnit?: Prisma.XOR<Prisma.BloodUnitScalarRelationFilter, Prisma.BloodUnitWhereInput>;
}, "id">;
export type LabTestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    testName?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    testedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    technicianId?: Prisma.SortOrderInput | Prisma.SortOrder;
    notes?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.LabTestCountOrderByAggregateInput;
    _max?: Prisma.LabTestMaxOrderByAggregateInput;
    _min?: Prisma.LabTestMinOrderByAggregateInput;
};
export type LabTestScalarWhereWithAggregatesInput = {
    AND?: Prisma.LabTestScalarWhereWithAggregatesInput | Prisma.LabTestScalarWhereWithAggregatesInput[];
    OR?: Prisma.LabTestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.LabTestScalarWhereWithAggregatesInput | Prisma.LabTestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"LabTest"> | string;
    bloodUnitId?: Prisma.StringWithAggregatesFilter<"LabTest"> | string;
    testName?: Prisma.StringWithAggregatesFilter<"LabTest"> | string;
    result?: Prisma.EnumTestResultWithAggregatesFilter<"LabTest"> | $Enums.TestResult;
    testedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"LabTest"> | Date | string | null;
    technicianId?: Prisma.StringNullableWithAggregatesFilter<"LabTest"> | string | null;
    notes?: Prisma.StringNullableWithAggregatesFilter<"LabTest"> | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"LabTest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"LabTest"> | Date | string;
};
export type LabTestCreateInput = {
    id?: string;
    testName: string;
    result?: $Enums.TestResult;
    testedAt?: Date | string | null;
    technicianId?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    bloodUnit: Prisma.BloodUnitCreateNestedOneWithoutLabTestsInput;
};
export type LabTestUncheckedCreateInput = {
    id?: string;
    bloodUnitId: string;
    testName: string;
    result?: $Enums.TestResult;
    testedAt?: Date | string | null;
    technicianId?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LabTestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    testName?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult;
    testedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    technicianId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    bloodUnit?: Prisma.BloodUnitUpdateOneRequiredWithoutLabTestsNestedInput;
};
export type LabTestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodUnitId?: Prisma.StringFieldUpdateOperationsInput | string;
    testName?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult;
    testedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    technicianId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LabTestCreateManyInput = {
    id?: string;
    bloodUnitId: string;
    testName: string;
    result?: $Enums.TestResult;
    testedAt?: Date | string | null;
    technicianId?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LabTestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    testName?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult;
    testedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    technicianId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LabTestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodUnitId?: Prisma.StringFieldUpdateOperationsInput | string;
    testName?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult;
    testedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    technicianId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LabTestListRelationFilter = {
    every?: Prisma.LabTestWhereInput;
    some?: Prisma.LabTestWhereInput;
    none?: Prisma.LabTestWhereInput;
};
export type LabTestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type LabTestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    testName?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    testedAt?: Prisma.SortOrder;
    technicianId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LabTestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    testName?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    testedAt?: Prisma.SortOrder;
    technicianId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LabTestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    bloodUnitId?: Prisma.SortOrder;
    testName?: Prisma.SortOrder;
    result?: Prisma.SortOrder;
    testedAt?: Prisma.SortOrder;
    technicianId?: Prisma.SortOrder;
    notes?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type LabTestCreateNestedManyWithoutBloodUnitInput = {
    create?: Prisma.XOR<Prisma.LabTestCreateWithoutBloodUnitInput, Prisma.LabTestUncheckedCreateWithoutBloodUnitInput> | Prisma.LabTestCreateWithoutBloodUnitInput[] | Prisma.LabTestUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.LabTestCreateOrConnectWithoutBloodUnitInput | Prisma.LabTestCreateOrConnectWithoutBloodUnitInput[];
    createMany?: Prisma.LabTestCreateManyBloodUnitInputEnvelope;
    connect?: Prisma.LabTestWhereUniqueInput | Prisma.LabTestWhereUniqueInput[];
};
export type LabTestUncheckedCreateNestedManyWithoutBloodUnitInput = {
    create?: Prisma.XOR<Prisma.LabTestCreateWithoutBloodUnitInput, Prisma.LabTestUncheckedCreateWithoutBloodUnitInput> | Prisma.LabTestCreateWithoutBloodUnitInput[] | Prisma.LabTestUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.LabTestCreateOrConnectWithoutBloodUnitInput | Prisma.LabTestCreateOrConnectWithoutBloodUnitInput[];
    createMany?: Prisma.LabTestCreateManyBloodUnitInputEnvelope;
    connect?: Prisma.LabTestWhereUniqueInput | Prisma.LabTestWhereUniqueInput[];
};
export type LabTestUpdateManyWithoutBloodUnitNestedInput = {
    create?: Prisma.XOR<Prisma.LabTestCreateWithoutBloodUnitInput, Prisma.LabTestUncheckedCreateWithoutBloodUnitInput> | Prisma.LabTestCreateWithoutBloodUnitInput[] | Prisma.LabTestUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.LabTestCreateOrConnectWithoutBloodUnitInput | Prisma.LabTestCreateOrConnectWithoutBloodUnitInput[];
    upsert?: Prisma.LabTestUpsertWithWhereUniqueWithoutBloodUnitInput | Prisma.LabTestUpsertWithWhereUniqueWithoutBloodUnitInput[];
    createMany?: Prisma.LabTestCreateManyBloodUnitInputEnvelope;
    set?: Prisma.LabTestWhereUniqueInput | Prisma.LabTestWhereUniqueInput[];
    disconnect?: Prisma.LabTestWhereUniqueInput | Prisma.LabTestWhereUniqueInput[];
    delete?: Prisma.LabTestWhereUniqueInput | Prisma.LabTestWhereUniqueInput[];
    connect?: Prisma.LabTestWhereUniqueInput | Prisma.LabTestWhereUniqueInput[];
    update?: Prisma.LabTestUpdateWithWhereUniqueWithoutBloodUnitInput | Prisma.LabTestUpdateWithWhereUniqueWithoutBloodUnitInput[];
    updateMany?: Prisma.LabTestUpdateManyWithWhereWithoutBloodUnitInput | Prisma.LabTestUpdateManyWithWhereWithoutBloodUnitInput[];
    deleteMany?: Prisma.LabTestScalarWhereInput | Prisma.LabTestScalarWhereInput[];
};
export type LabTestUncheckedUpdateManyWithoutBloodUnitNestedInput = {
    create?: Prisma.XOR<Prisma.LabTestCreateWithoutBloodUnitInput, Prisma.LabTestUncheckedCreateWithoutBloodUnitInput> | Prisma.LabTestCreateWithoutBloodUnitInput[] | Prisma.LabTestUncheckedCreateWithoutBloodUnitInput[];
    connectOrCreate?: Prisma.LabTestCreateOrConnectWithoutBloodUnitInput | Prisma.LabTestCreateOrConnectWithoutBloodUnitInput[];
    upsert?: Prisma.LabTestUpsertWithWhereUniqueWithoutBloodUnitInput | Prisma.LabTestUpsertWithWhereUniqueWithoutBloodUnitInput[];
    createMany?: Prisma.LabTestCreateManyBloodUnitInputEnvelope;
    set?: Prisma.LabTestWhereUniqueInput | Prisma.LabTestWhereUniqueInput[];
    disconnect?: Prisma.LabTestWhereUniqueInput | Prisma.LabTestWhereUniqueInput[];
    delete?: Prisma.LabTestWhereUniqueInput | Prisma.LabTestWhereUniqueInput[];
    connect?: Prisma.LabTestWhereUniqueInput | Prisma.LabTestWhereUniqueInput[];
    update?: Prisma.LabTestUpdateWithWhereUniqueWithoutBloodUnitInput | Prisma.LabTestUpdateWithWhereUniqueWithoutBloodUnitInput[];
    updateMany?: Prisma.LabTestUpdateManyWithWhereWithoutBloodUnitInput | Prisma.LabTestUpdateManyWithWhereWithoutBloodUnitInput[];
    deleteMany?: Prisma.LabTestScalarWhereInput | Prisma.LabTestScalarWhereInput[];
};
export type EnumTestResultFieldUpdateOperationsInput = {
    set?: $Enums.TestResult;
};
export type LabTestCreateWithoutBloodUnitInput = {
    id?: string;
    testName: string;
    result?: $Enums.TestResult;
    testedAt?: Date | string | null;
    technicianId?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LabTestUncheckedCreateWithoutBloodUnitInput = {
    id?: string;
    testName: string;
    result?: $Enums.TestResult;
    testedAt?: Date | string | null;
    technicianId?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LabTestCreateOrConnectWithoutBloodUnitInput = {
    where: Prisma.LabTestWhereUniqueInput;
    create: Prisma.XOR<Prisma.LabTestCreateWithoutBloodUnitInput, Prisma.LabTestUncheckedCreateWithoutBloodUnitInput>;
};
export type LabTestCreateManyBloodUnitInputEnvelope = {
    data: Prisma.LabTestCreateManyBloodUnitInput | Prisma.LabTestCreateManyBloodUnitInput[];
    skipDuplicates?: boolean;
};
export type LabTestUpsertWithWhereUniqueWithoutBloodUnitInput = {
    where: Prisma.LabTestWhereUniqueInput;
    update: Prisma.XOR<Prisma.LabTestUpdateWithoutBloodUnitInput, Prisma.LabTestUncheckedUpdateWithoutBloodUnitInput>;
    create: Prisma.XOR<Prisma.LabTestCreateWithoutBloodUnitInput, Prisma.LabTestUncheckedCreateWithoutBloodUnitInput>;
};
export type LabTestUpdateWithWhereUniqueWithoutBloodUnitInput = {
    where: Prisma.LabTestWhereUniqueInput;
    data: Prisma.XOR<Prisma.LabTestUpdateWithoutBloodUnitInput, Prisma.LabTestUncheckedUpdateWithoutBloodUnitInput>;
};
export type LabTestUpdateManyWithWhereWithoutBloodUnitInput = {
    where: Prisma.LabTestScalarWhereInput;
    data: Prisma.XOR<Prisma.LabTestUpdateManyMutationInput, Prisma.LabTestUncheckedUpdateManyWithoutBloodUnitInput>;
};
export type LabTestScalarWhereInput = {
    AND?: Prisma.LabTestScalarWhereInput | Prisma.LabTestScalarWhereInput[];
    OR?: Prisma.LabTestScalarWhereInput[];
    NOT?: Prisma.LabTestScalarWhereInput | Prisma.LabTestScalarWhereInput[];
    id?: Prisma.StringFilter<"LabTest"> | string;
    bloodUnitId?: Prisma.StringFilter<"LabTest"> | string;
    testName?: Prisma.StringFilter<"LabTest"> | string;
    result?: Prisma.EnumTestResultFilter<"LabTest"> | $Enums.TestResult;
    testedAt?: Prisma.DateTimeNullableFilter<"LabTest"> | Date | string | null;
    technicianId?: Prisma.StringNullableFilter<"LabTest"> | string | null;
    notes?: Prisma.StringNullableFilter<"LabTest"> | string | null;
    createdAt?: Prisma.DateTimeFilter<"LabTest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"LabTest"> | Date | string;
};
export type LabTestCreateManyBloodUnitInput = {
    id?: string;
    testName: string;
    result?: $Enums.TestResult;
    testedAt?: Date | string | null;
    technicianId?: string | null;
    notes?: string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type LabTestUpdateWithoutBloodUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    testName?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult;
    testedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    technicianId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LabTestUncheckedUpdateWithoutBloodUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    testName?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult;
    testedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    technicianId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LabTestUncheckedUpdateManyWithoutBloodUnitInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    testName?: Prisma.StringFieldUpdateOperationsInput | string;
    result?: Prisma.EnumTestResultFieldUpdateOperationsInput | $Enums.TestResult;
    testedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    technicianId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    notes?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type LabTestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bloodUnitId?: boolean;
    testName?: boolean;
    result?: boolean;
    testedAt?: boolean;
    technicianId?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["labTest"]>;
export type LabTestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bloodUnitId?: boolean;
    testName?: boolean;
    result?: boolean;
    testedAt?: boolean;
    technicianId?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["labTest"]>;
export type LabTestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    bloodUnitId?: boolean;
    testName?: boolean;
    result?: boolean;
    testedAt?: boolean;
    technicianId?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["labTest"]>;
export type LabTestSelectScalar = {
    id?: boolean;
    bloodUnitId?: boolean;
    testName?: boolean;
    result?: boolean;
    testedAt?: boolean;
    technicianId?: boolean;
    notes?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type LabTestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "bloodUnitId" | "testName" | "result" | "testedAt" | "technicianId" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["labTest"]>;
export type LabTestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
};
export type LabTestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
};
export type LabTestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    bloodUnit?: boolean | Prisma.BloodUnitDefaultArgs<ExtArgs>;
};
export type $LabTestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "LabTest";
    objects: {
        bloodUnit: Prisma.$BloodUnitPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        bloodUnitId: string;
        testName: string;
        result: $Enums.TestResult;
        testedAt: Date | null;
        technicianId: string | null;
        notes: string | null;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["labTest"]>;
    composites: {};
};
export type LabTestGetPayload<S extends boolean | null | undefined | LabTestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$LabTestPayload, S>;
export type LabTestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<LabTestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: LabTestCountAggregateInputType | true;
};
export interface LabTestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['LabTest'];
        meta: {
            name: 'LabTest';
        };
    };
    findUnique<T extends LabTestFindUniqueArgs>(args: Prisma.SelectSubset<T, LabTestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__LabTestClient<runtime.Types.Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends LabTestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, LabTestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__LabTestClient<runtime.Types.Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends LabTestFindFirstArgs>(args?: Prisma.SelectSubset<T, LabTestFindFirstArgs<ExtArgs>>): Prisma.Prisma__LabTestClient<runtime.Types.Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends LabTestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, LabTestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__LabTestClient<runtime.Types.Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends LabTestFindManyArgs>(args?: Prisma.SelectSubset<T, LabTestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends LabTestCreateArgs>(args: Prisma.SelectSubset<T, LabTestCreateArgs<ExtArgs>>): Prisma.Prisma__LabTestClient<runtime.Types.Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends LabTestCreateManyArgs>(args?: Prisma.SelectSubset<T, LabTestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends LabTestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, LabTestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends LabTestDeleteArgs>(args: Prisma.SelectSubset<T, LabTestDeleteArgs<ExtArgs>>): Prisma.Prisma__LabTestClient<runtime.Types.Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends LabTestUpdateArgs>(args: Prisma.SelectSubset<T, LabTestUpdateArgs<ExtArgs>>): Prisma.Prisma__LabTestClient<runtime.Types.Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends LabTestDeleteManyArgs>(args?: Prisma.SelectSubset<T, LabTestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends LabTestUpdateManyArgs>(args: Prisma.SelectSubset<T, LabTestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends LabTestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, LabTestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends LabTestUpsertArgs>(args: Prisma.SelectSubset<T, LabTestUpsertArgs<ExtArgs>>): Prisma.Prisma__LabTestClient<runtime.Types.Result.GetResult<Prisma.$LabTestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends LabTestCountArgs>(args?: Prisma.Subset<T, LabTestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], LabTestCountAggregateOutputType> : number>;
    aggregate<T extends LabTestAggregateArgs>(args: Prisma.Subset<T, LabTestAggregateArgs>): Prisma.PrismaPromise<GetLabTestAggregateType<T>>;
    groupBy<T extends LabTestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: LabTestGroupByArgs['orderBy'];
    } : {
        orderBy?: LabTestGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, LabTestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLabTestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: LabTestFieldRefs;
}
export interface Prisma__LabTestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    bloodUnit<T extends Prisma.BloodUnitDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BloodUnitDefaultArgs<ExtArgs>>): Prisma.Prisma__BloodUnitClient<runtime.Types.Result.GetResult<Prisma.$BloodUnitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface LabTestFieldRefs {
    readonly id: Prisma.FieldRef<"LabTest", 'String'>;
    readonly bloodUnitId: Prisma.FieldRef<"LabTest", 'String'>;
    readonly testName: Prisma.FieldRef<"LabTest", 'String'>;
    readonly result: Prisma.FieldRef<"LabTest", 'TestResult'>;
    readonly testedAt: Prisma.FieldRef<"LabTest", 'DateTime'>;
    readonly technicianId: Prisma.FieldRef<"LabTest", 'String'>;
    readonly notes: Prisma.FieldRef<"LabTest", 'String'>;
    readonly createdAt: Prisma.FieldRef<"LabTest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"LabTest", 'DateTime'>;
}
export type LabTestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabTestSelect<ExtArgs> | null;
    omit?: Prisma.LabTestOmit<ExtArgs> | null;
    include?: Prisma.LabTestInclude<ExtArgs> | null;
    where: Prisma.LabTestWhereUniqueInput;
};
export type LabTestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabTestSelect<ExtArgs> | null;
    omit?: Prisma.LabTestOmit<ExtArgs> | null;
    include?: Prisma.LabTestInclude<ExtArgs> | null;
    where: Prisma.LabTestWhereUniqueInput;
};
export type LabTestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LabTestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LabTestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type LabTestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabTestSelect<ExtArgs> | null;
    omit?: Prisma.LabTestOmit<ExtArgs> | null;
    include?: Prisma.LabTestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LabTestCreateInput, Prisma.LabTestUncheckedCreateInput>;
};
export type LabTestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.LabTestCreateManyInput | Prisma.LabTestCreateManyInput[];
    skipDuplicates?: boolean;
};
export type LabTestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabTestSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LabTestOmit<ExtArgs> | null;
    data: Prisma.LabTestCreateManyInput | Prisma.LabTestCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.LabTestIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type LabTestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabTestSelect<ExtArgs> | null;
    omit?: Prisma.LabTestOmit<ExtArgs> | null;
    include?: Prisma.LabTestInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LabTestUpdateInput, Prisma.LabTestUncheckedUpdateInput>;
    where: Prisma.LabTestWhereUniqueInput;
};
export type LabTestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.LabTestUpdateManyMutationInput, Prisma.LabTestUncheckedUpdateManyInput>;
    where?: Prisma.LabTestWhereInput;
    limit?: number;
};
export type LabTestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabTestSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.LabTestOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.LabTestUpdateManyMutationInput, Prisma.LabTestUncheckedUpdateManyInput>;
    where?: Prisma.LabTestWhereInput;
    limit?: number;
    include?: Prisma.LabTestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type LabTestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabTestSelect<ExtArgs> | null;
    omit?: Prisma.LabTestOmit<ExtArgs> | null;
    include?: Prisma.LabTestInclude<ExtArgs> | null;
    where: Prisma.LabTestWhereUniqueInput;
    create: Prisma.XOR<Prisma.LabTestCreateInput, Prisma.LabTestUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.LabTestUpdateInput, Prisma.LabTestUncheckedUpdateInput>;
};
export type LabTestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabTestSelect<ExtArgs> | null;
    omit?: Prisma.LabTestOmit<ExtArgs> | null;
    include?: Prisma.LabTestInclude<ExtArgs> | null;
    where: Prisma.LabTestWhereUniqueInput;
};
export type LabTestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.LabTestWhereInput;
    limit?: number;
};
export type LabTestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.LabTestSelect<ExtArgs> | null;
    omit?: Prisma.LabTestOmit<ExtArgs> | null;
    include?: Prisma.LabTestInclude<ExtArgs> | null;
};
