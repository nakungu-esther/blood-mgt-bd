import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DemandForecastModel = runtime.Types.Result.DefaultSelection<Prisma.$DemandForecastPayload>;
export type AggregateDemandForecast = {
    _count: DemandForecastCountAggregateOutputType | null;
    _avg: DemandForecastAvgAggregateOutputType | null;
    _sum: DemandForecastSumAggregateOutputType | null;
    _min: DemandForecastMinAggregateOutputType | null;
    _max: DemandForecastMaxAggregateOutputType | null;
};
export type DemandForecastAvgAggregateOutputType = {
    predictedUnits: number | null;
    confidenceScore: number | null;
};
export type DemandForecastSumAggregateOutputType = {
    predictedUnits: number | null;
    confidenceScore: number | null;
};
export type DemandForecastMinAggregateOutputType = {
    id: string | null;
    facilityId: string | null;
    bloodGroup: $Enums.BloodGroup | null;
    component: $Enums.ComponentType | null;
    forecastDate: Date | null;
    predictedUnits: number | null;
    modelVersion: string | null;
    confidenceScore: number | null;
    createdAt: Date | null;
};
export type DemandForecastMaxAggregateOutputType = {
    id: string | null;
    facilityId: string | null;
    bloodGroup: $Enums.BloodGroup | null;
    component: $Enums.ComponentType | null;
    forecastDate: Date | null;
    predictedUnits: number | null;
    modelVersion: string | null;
    confidenceScore: number | null;
    createdAt: Date | null;
};
export type DemandForecastCountAggregateOutputType = {
    id: number;
    facilityId: number;
    bloodGroup: number;
    component: number;
    forecastDate: number;
    predictedUnits: number;
    modelVersion: number;
    confidenceScore: number;
    createdAt: number;
    _all: number;
};
export type DemandForecastAvgAggregateInputType = {
    predictedUnits?: true;
    confidenceScore?: true;
};
export type DemandForecastSumAggregateInputType = {
    predictedUnits?: true;
    confidenceScore?: true;
};
export type DemandForecastMinAggregateInputType = {
    id?: true;
    facilityId?: true;
    bloodGroup?: true;
    component?: true;
    forecastDate?: true;
    predictedUnits?: true;
    modelVersion?: true;
    confidenceScore?: true;
    createdAt?: true;
};
export type DemandForecastMaxAggregateInputType = {
    id?: true;
    facilityId?: true;
    bloodGroup?: true;
    component?: true;
    forecastDate?: true;
    predictedUnits?: true;
    modelVersion?: true;
    confidenceScore?: true;
    createdAt?: true;
};
export type DemandForecastCountAggregateInputType = {
    id?: true;
    facilityId?: true;
    bloodGroup?: true;
    component?: true;
    forecastDate?: true;
    predictedUnits?: true;
    modelVersion?: true;
    confidenceScore?: true;
    createdAt?: true;
    _all?: true;
};
export type DemandForecastAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DemandForecastWhereInput;
    orderBy?: Prisma.DemandForecastOrderByWithRelationInput | Prisma.DemandForecastOrderByWithRelationInput[];
    cursor?: Prisma.DemandForecastWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DemandForecastCountAggregateInputType;
    _avg?: DemandForecastAvgAggregateInputType;
    _sum?: DemandForecastSumAggregateInputType;
    _min?: DemandForecastMinAggregateInputType;
    _max?: DemandForecastMaxAggregateInputType;
};
export type GetDemandForecastAggregateType<T extends DemandForecastAggregateArgs> = {
    [P in keyof T & keyof AggregateDemandForecast]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDemandForecast[P]> : Prisma.GetScalarType<T[P], AggregateDemandForecast[P]>;
};
export type DemandForecastGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DemandForecastWhereInput;
    orderBy?: Prisma.DemandForecastOrderByWithAggregationInput | Prisma.DemandForecastOrderByWithAggregationInput[];
    by: Prisma.DemandForecastScalarFieldEnum[] | Prisma.DemandForecastScalarFieldEnum;
    having?: Prisma.DemandForecastScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DemandForecastCountAggregateInputType | true;
    _avg?: DemandForecastAvgAggregateInputType;
    _sum?: DemandForecastSumAggregateInputType;
    _min?: DemandForecastMinAggregateInputType;
    _max?: DemandForecastMaxAggregateInputType;
};
export type DemandForecastGroupByOutputType = {
    id: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    forecastDate: Date;
    predictedUnits: number;
    modelVersion: string | null;
    confidenceScore: number | null;
    createdAt: Date;
    _count: DemandForecastCountAggregateOutputType | null;
    _avg: DemandForecastAvgAggregateOutputType | null;
    _sum: DemandForecastSumAggregateOutputType | null;
    _min: DemandForecastMinAggregateOutputType | null;
    _max: DemandForecastMaxAggregateOutputType | null;
};
export type GetDemandForecastGroupByPayload<T extends DemandForecastGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DemandForecastGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DemandForecastGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DemandForecastGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DemandForecastGroupByOutputType[P]>;
}>>;
export type DemandForecastWhereInput = {
    AND?: Prisma.DemandForecastWhereInput | Prisma.DemandForecastWhereInput[];
    OR?: Prisma.DemandForecastWhereInput[];
    NOT?: Prisma.DemandForecastWhereInput | Prisma.DemandForecastWhereInput[];
    id?: Prisma.StringFilter<"DemandForecast"> | string;
    facilityId?: Prisma.StringFilter<"DemandForecast"> | string;
    bloodGroup?: Prisma.EnumBloodGroupFilter<"DemandForecast"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFilter<"DemandForecast"> | $Enums.ComponentType;
    forecastDate?: Prisma.DateTimeFilter<"DemandForecast"> | Date | string;
    predictedUnits?: Prisma.IntFilter<"DemandForecast"> | number;
    modelVersion?: Prisma.StringNullableFilter<"DemandForecast"> | string | null;
    confidenceScore?: Prisma.FloatNullableFilter<"DemandForecast"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"DemandForecast"> | Date | string;
    facility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
};
export type DemandForecastOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    forecastDate?: Prisma.SortOrder;
    predictedUnits?: Prisma.SortOrder;
    modelVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    facility?: Prisma.FacilityOrderByWithRelationInput;
};
export type DemandForecastWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.DemandForecastWhereInput | Prisma.DemandForecastWhereInput[];
    OR?: Prisma.DemandForecastWhereInput[];
    NOT?: Prisma.DemandForecastWhereInput | Prisma.DemandForecastWhereInput[];
    facilityId?: Prisma.StringFilter<"DemandForecast"> | string;
    bloodGroup?: Prisma.EnumBloodGroupFilter<"DemandForecast"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFilter<"DemandForecast"> | $Enums.ComponentType;
    forecastDate?: Prisma.DateTimeFilter<"DemandForecast"> | Date | string;
    predictedUnits?: Prisma.IntFilter<"DemandForecast"> | number;
    modelVersion?: Prisma.StringNullableFilter<"DemandForecast"> | string | null;
    confidenceScore?: Prisma.FloatNullableFilter<"DemandForecast"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"DemandForecast"> | Date | string;
    facility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
}, "id">;
export type DemandForecastOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    forecastDate?: Prisma.SortOrder;
    predictedUnits?: Prisma.SortOrder;
    modelVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.DemandForecastCountOrderByAggregateInput;
    _avg?: Prisma.DemandForecastAvgOrderByAggregateInput;
    _max?: Prisma.DemandForecastMaxOrderByAggregateInput;
    _min?: Prisma.DemandForecastMinOrderByAggregateInput;
    _sum?: Prisma.DemandForecastSumOrderByAggregateInput;
};
export type DemandForecastScalarWhereWithAggregatesInput = {
    AND?: Prisma.DemandForecastScalarWhereWithAggregatesInput | Prisma.DemandForecastScalarWhereWithAggregatesInput[];
    OR?: Prisma.DemandForecastScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DemandForecastScalarWhereWithAggregatesInput | Prisma.DemandForecastScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"DemandForecast"> | string;
    facilityId?: Prisma.StringWithAggregatesFilter<"DemandForecast"> | string;
    bloodGroup?: Prisma.EnumBloodGroupWithAggregatesFilter<"DemandForecast"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeWithAggregatesFilter<"DemandForecast"> | $Enums.ComponentType;
    forecastDate?: Prisma.DateTimeWithAggregatesFilter<"DemandForecast"> | Date | string;
    predictedUnits?: Prisma.IntWithAggregatesFilter<"DemandForecast"> | number;
    modelVersion?: Prisma.StringNullableWithAggregatesFilter<"DemandForecast"> | string | null;
    confidenceScore?: Prisma.FloatNullableWithAggregatesFilter<"DemandForecast"> | number | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"DemandForecast"> | Date | string;
};
export type DemandForecastCreateInput = {
    id?: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    forecastDate: Date | string;
    predictedUnits: number;
    modelVersion?: string | null;
    confidenceScore?: number | null;
    createdAt?: Date | string;
    facility: Prisma.FacilityCreateNestedOneWithoutForecastsInput;
};
export type DemandForecastUncheckedCreateInput = {
    id?: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    forecastDate: Date | string;
    predictedUnits: number;
    modelVersion?: string | null;
    confidenceScore?: number | null;
    createdAt?: Date | string;
};
export type DemandForecastUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    forecastDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    predictedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    modelVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    facility?: Prisma.FacilityUpdateOneRequiredWithoutForecastsNestedInput;
};
export type DemandForecastUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    forecastDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    predictedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    modelVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DemandForecastCreateManyInput = {
    id?: string;
    facilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    forecastDate: Date | string;
    predictedUnits: number;
    modelVersion?: string | null;
    confidenceScore?: number | null;
    createdAt?: Date | string;
};
export type DemandForecastUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    forecastDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    predictedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    modelVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DemandForecastUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    facilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    forecastDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    predictedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    modelVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DemandForecastListRelationFilter = {
    every?: Prisma.DemandForecastWhereInput;
    some?: Prisma.DemandForecastWhereInput;
    none?: Prisma.DemandForecastWhereInput;
};
export type DemandForecastOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type DemandForecastCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    forecastDate?: Prisma.SortOrder;
    predictedUnits?: Prisma.SortOrder;
    modelVersion?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DemandForecastAvgOrderByAggregateInput = {
    predictedUnits?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
};
export type DemandForecastMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    forecastDate?: Prisma.SortOrder;
    predictedUnits?: Prisma.SortOrder;
    modelVersion?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DemandForecastMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    facilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    forecastDate?: Prisma.SortOrder;
    predictedUnits?: Prisma.SortOrder;
    modelVersion?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type DemandForecastSumOrderByAggregateInput = {
    predictedUnits?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
};
export type DemandForecastCreateNestedManyWithoutFacilityInput = {
    create?: Prisma.XOR<Prisma.DemandForecastCreateWithoutFacilityInput, Prisma.DemandForecastUncheckedCreateWithoutFacilityInput> | Prisma.DemandForecastCreateWithoutFacilityInput[] | Prisma.DemandForecastUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.DemandForecastCreateOrConnectWithoutFacilityInput | Prisma.DemandForecastCreateOrConnectWithoutFacilityInput[];
    createMany?: Prisma.DemandForecastCreateManyFacilityInputEnvelope;
    connect?: Prisma.DemandForecastWhereUniqueInput | Prisma.DemandForecastWhereUniqueInput[];
};
export type DemandForecastUncheckedCreateNestedManyWithoutFacilityInput = {
    create?: Prisma.XOR<Prisma.DemandForecastCreateWithoutFacilityInput, Prisma.DemandForecastUncheckedCreateWithoutFacilityInput> | Prisma.DemandForecastCreateWithoutFacilityInput[] | Prisma.DemandForecastUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.DemandForecastCreateOrConnectWithoutFacilityInput | Prisma.DemandForecastCreateOrConnectWithoutFacilityInput[];
    createMany?: Prisma.DemandForecastCreateManyFacilityInputEnvelope;
    connect?: Prisma.DemandForecastWhereUniqueInput | Prisma.DemandForecastWhereUniqueInput[];
};
export type DemandForecastUpdateManyWithoutFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.DemandForecastCreateWithoutFacilityInput, Prisma.DemandForecastUncheckedCreateWithoutFacilityInput> | Prisma.DemandForecastCreateWithoutFacilityInput[] | Prisma.DemandForecastUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.DemandForecastCreateOrConnectWithoutFacilityInput | Prisma.DemandForecastCreateOrConnectWithoutFacilityInput[];
    upsert?: Prisma.DemandForecastUpsertWithWhereUniqueWithoutFacilityInput | Prisma.DemandForecastUpsertWithWhereUniqueWithoutFacilityInput[];
    createMany?: Prisma.DemandForecastCreateManyFacilityInputEnvelope;
    set?: Prisma.DemandForecastWhereUniqueInput | Prisma.DemandForecastWhereUniqueInput[];
    disconnect?: Prisma.DemandForecastWhereUniqueInput | Prisma.DemandForecastWhereUniqueInput[];
    delete?: Prisma.DemandForecastWhereUniqueInput | Prisma.DemandForecastWhereUniqueInput[];
    connect?: Prisma.DemandForecastWhereUniqueInput | Prisma.DemandForecastWhereUniqueInput[];
    update?: Prisma.DemandForecastUpdateWithWhereUniqueWithoutFacilityInput | Prisma.DemandForecastUpdateWithWhereUniqueWithoutFacilityInput[];
    updateMany?: Prisma.DemandForecastUpdateManyWithWhereWithoutFacilityInput | Prisma.DemandForecastUpdateManyWithWhereWithoutFacilityInput[];
    deleteMany?: Prisma.DemandForecastScalarWhereInput | Prisma.DemandForecastScalarWhereInput[];
};
export type DemandForecastUncheckedUpdateManyWithoutFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.DemandForecastCreateWithoutFacilityInput, Prisma.DemandForecastUncheckedCreateWithoutFacilityInput> | Prisma.DemandForecastCreateWithoutFacilityInput[] | Prisma.DemandForecastUncheckedCreateWithoutFacilityInput[];
    connectOrCreate?: Prisma.DemandForecastCreateOrConnectWithoutFacilityInput | Prisma.DemandForecastCreateOrConnectWithoutFacilityInput[];
    upsert?: Prisma.DemandForecastUpsertWithWhereUniqueWithoutFacilityInput | Prisma.DemandForecastUpsertWithWhereUniqueWithoutFacilityInput[];
    createMany?: Prisma.DemandForecastCreateManyFacilityInputEnvelope;
    set?: Prisma.DemandForecastWhereUniqueInput | Prisma.DemandForecastWhereUniqueInput[];
    disconnect?: Prisma.DemandForecastWhereUniqueInput | Prisma.DemandForecastWhereUniqueInput[];
    delete?: Prisma.DemandForecastWhereUniqueInput | Prisma.DemandForecastWhereUniqueInput[];
    connect?: Prisma.DemandForecastWhereUniqueInput | Prisma.DemandForecastWhereUniqueInput[];
    update?: Prisma.DemandForecastUpdateWithWhereUniqueWithoutFacilityInput | Prisma.DemandForecastUpdateWithWhereUniqueWithoutFacilityInput[];
    updateMany?: Prisma.DemandForecastUpdateManyWithWhereWithoutFacilityInput | Prisma.DemandForecastUpdateManyWithWhereWithoutFacilityInput[];
    deleteMany?: Prisma.DemandForecastScalarWhereInput | Prisma.DemandForecastScalarWhereInput[];
};
export type DemandForecastCreateWithoutFacilityInput = {
    id?: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    forecastDate: Date | string;
    predictedUnits: number;
    modelVersion?: string | null;
    confidenceScore?: number | null;
    createdAt?: Date | string;
};
export type DemandForecastUncheckedCreateWithoutFacilityInput = {
    id?: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    forecastDate: Date | string;
    predictedUnits: number;
    modelVersion?: string | null;
    confidenceScore?: number | null;
    createdAt?: Date | string;
};
export type DemandForecastCreateOrConnectWithoutFacilityInput = {
    where: Prisma.DemandForecastWhereUniqueInput;
    create: Prisma.XOR<Prisma.DemandForecastCreateWithoutFacilityInput, Prisma.DemandForecastUncheckedCreateWithoutFacilityInput>;
};
export type DemandForecastCreateManyFacilityInputEnvelope = {
    data: Prisma.DemandForecastCreateManyFacilityInput | Prisma.DemandForecastCreateManyFacilityInput[];
    skipDuplicates?: boolean;
};
export type DemandForecastUpsertWithWhereUniqueWithoutFacilityInput = {
    where: Prisma.DemandForecastWhereUniqueInput;
    update: Prisma.XOR<Prisma.DemandForecastUpdateWithoutFacilityInput, Prisma.DemandForecastUncheckedUpdateWithoutFacilityInput>;
    create: Prisma.XOR<Prisma.DemandForecastCreateWithoutFacilityInput, Prisma.DemandForecastUncheckedCreateWithoutFacilityInput>;
};
export type DemandForecastUpdateWithWhereUniqueWithoutFacilityInput = {
    where: Prisma.DemandForecastWhereUniqueInput;
    data: Prisma.XOR<Prisma.DemandForecastUpdateWithoutFacilityInput, Prisma.DemandForecastUncheckedUpdateWithoutFacilityInput>;
};
export type DemandForecastUpdateManyWithWhereWithoutFacilityInput = {
    where: Prisma.DemandForecastScalarWhereInput;
    data: Prisma.XOR<Prisma.DemandForecastUpdateManyMutationInput, Prisma.DemandForecastUncheckedUpdateManyWithoutFacilityInput>;
};
export type DemandForecastScalarWhereInput = {
    AND?: Prisma.DemandForecastScalarWhereInput | Prisma.DemandForecastScalarWhereInput[];
    OR?: Prisma.DemandForecastScalarWhereInput[];
    NOT?: Prisma.DemandForecastScalarWhereInput | Prisma.DemandForecastScalarWhereInput[];
    id?: Prisma.StringFilter<"DemandForecast"> | string;
    facilityId?: Prisma.StringFilter<"DemandForecast"> | string;
    bloodGroup?: Prisma.EnumBloodGroupFilter<"DemandForecast"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFilter<"DemandForecast"> | $Enums.ComponentType;
    forecastDate?: Prisma.DateTimeFilter<"DemandForecast"> | Date | string;
    predictedUnits?: Prisma.IntFilter<"DemandForecast"> | number;
    modelVersion?: Prisma.StringNullableFilter<"DemandForecast"> | string | null;
    confidenceScore?: Prisma.FloatNullableFilter<"DemandForecast"> | number | null;
    createdAt?: Prisma.DateTimeFilter<"DemandForecast"> | Date | string;
};
export type DemandForecastCreateManyFacilityInput = {
    id?: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    forecastDate: Date | string;
    predictedUnits: number;
    modelVersion?: string | null;
    confidenceScore?: number | null;
    createdAt?: Date | string;
};
export type DemandForecastUpdateWithoutFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    forecastDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    predictedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    modelVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DemandForecastUncheckedUpdateWithoutFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    forecastDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    predictedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    modelVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DemandForecastUncheckedUpdateManyWithoutFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    forecastDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    predictedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    modelVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DemandForecastSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    facilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    forecastDate?: boolean;
    predictedUnits?: boolean;
    modelVersion?: boolean;
    confidenceScore?: boolean;
    createdAt?: boolean;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["demandForecast"]>;
export type DemandForecastSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    facilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    forecastDate?: boolean;
    predictedUnits?: boolean;
    modelVersion?: boolean;
    confidenceScore?: boolean;
    createdAt?: boolean;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["demandForecast"]>;
export type DemandForecastSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    facilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    forecastDate?: boolean;
    predictedUnits?: boolean;
    modelVersion?: boolean;
    confidenceScore?: boolean;
    createdAt?: boolean;
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["demandForecast"]>;
export type DemandForecastSelectScalar = {
    id?: boolean;
    facilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    forecastDate?: boolean;
    predictedUnits?: boolean;
    modelVersion?: boolean;
    confidenceScore?: boolean;
    createdAt?: boolean;
};
export type DemandForecastOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "facilityId" | "bloodGroup" | "component" | "forecastDate" | "predictedUnits" | "modelVersion" | "confidenceScore" | "createdAt", ExtArgs["result"]["demandForecast"]>;
export type DemandForecastInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
};
export type DemandForecastIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
};
export type DemandForecastIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    facility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
};
export type $DemandForecastPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "DemandForecast";
    objects: {
        facility: Prisma.$FacilityPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        facilityId: string;
        bloodGroup: $Enums.BloodGroup;
        component: $Enums.ComponentType;
        forecastDate: Date;
        predictedUnits: number;
        modelVersion: string | null;
        confidenceScore: number | null;
        createdAt: Date;
    }, ExtArgs["result"]["demandForecast"]>;
    composites: {};
};
export type DemandForecastGetPayload<S extends boolean | null | undefined | DemandForecastDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DemandForecastPayload, S>;
export type DemandForecastCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DemandForecastFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DemandForecastCountAggregateInputType | true;
};
export interface DemandForecastDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['DemandForecast'];
        meta: {
            name: 'DemandForecast';
        };
    };
    findUnique<T extends DemandForecastFindUniqueArgs>(args: Prisma.SelectSubset<T, DemandForecastFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DemandForecastClient<runtime.Types.Result.GetResult<Prisma.$DemandForecastPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DemandForecastFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DemandForecastFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DemandForecastClient<runtime.Types.Result.GetResult<Prisma.$DemandForecastPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DemandForecastFindFirstArgs>(args?: Prisma.SelectSubset<T, DemandForecastFindFirstArgs<ExtArgs>>): Prisma.Prisma__DemandForecastClient<runtime.Types.Result.GetResult<Prisma.$DemandForecastPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DemandForecastFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DemandForecastFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DemandForecastClient<runtime.Types.Result.GetResult<Prisma.$DemandForecastPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DemandForecastFindManyArgs>(args?: Prisma.SelectSubset<T, DemandForecastFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DemandForecastPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DemandForecastCreateArgs>(args: Prisma.SelectSubset<T, DemandForecastCreateArgs<ExtArgs>>): Prisma.Prisma__DemandForecastClient<runtime.Types.Result.GetResult<Prisma.$DemandForecastPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DemandForecastCreateManyArgs>(args?: Prisma.SelectSubset<T, DemandForecastCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DemandForecastCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DemandForecastCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DemandForecastPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DemandForecastDeleteArgs>(args: Prisma.SelectSubset<T, DemandForecastDeleteArgs<ExtArgs>>): Prisma.Prisma__DemandForecastClient<runtime.Types.Result.GetResult<Prisma.$DemandForecastPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DemandForecastUpdateArgs>(args: Prisma.SelectSubset<T, DemandForecastUpdateArgs<ExtArgs>>): Prisma.Prisma__DemandForecastClient<runtime.Types.Result.GetResult<Prisma.$DemandForecastPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DemandForecastDeleteManyArgs>(args?: Prisma.SelectSubset<T, DemandForecastDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DemandForecastUpdateManyArgs>(args: Prisma.SelectSubset<T, DemandForecastUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DemandForecastUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DemandForecastUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DemandForecastPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DemandForecastUpsertArgs>(args: Prisma.SelectSubset<T, DemandForecastUpsertArgs<ExtArgs>>): Prisma.Prisma__DemandForecastClient<runtime.Types.Result.GetResult<Prisma.$DemandForecastPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DemandForecastCountArgs>(args?: Prisma.Subset<T, DemandForecastCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DemandForecastCountAggregateOutputType> : number>;
    aggregate<T extends DemandForecastAggregateArgs>(args: Prisma.Subset<T, DemandForecastAggregateArgs>): Prisma.PrismaPromise<GetDemandForecastAggregateType<T>>;
    groupBy<T extends DemandForecastGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DemandForecastGroupByArgs['orderBy'];
    } : {
        orderBy?: DemandForecastGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DemandForecastGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDemandForecastGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DemandForecastFieldRefs;
}
export interface Prisma__DemandForecastClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    facility<T extends Prisma.FacilityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FacilityDefaultArgs<ExtArgs>>): Prisma.Prisma__FacilityClient<runtime.Types.Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DemandForecastFieldRefs {
    readonly id: Prisma.FieldRef<"DemandForecast", 'String'>;
    readonly facilityId: Prisma.FieldRef<"DemandForecast", 'String'>;
    readonly bloodGroup: Prisma.FieldRef<"DemandForecast", 'BloodGroup'>;
    readonly component: Prisma.FieldRef<"DemandForecast", 'ComponentType'>;
    readonly forecastDate: Prisma.FieldRef<"DemandForecast", 'DateTime'>;
    readonly predictedUnits: Prisma.FieldRef<"DemandForecast", 'Int'>;
    readonly modelVersion: Prisma.FieldRef<"DemandForecast", 'String'>;
    readonly confidenceScore: Prisma.FieldRef<"DemandForecast", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"DemandForecast", 'DateTime'>;
}
export type DemandForecastFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandForecastSelect<ExtArgs> | null;
    omit?: Prisma.DemandForecastOmit<ExtArgs> | null;
    include?: Prisma.DemandForecastInclude<ExtArgs> | null;
    where: Prisma.DemandForecastWhereUniqueInput;
};
export type DemandForecastFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandForecastSelect<ExtArgs> | null;
    omit?: Prisma.DemandForecastOmit<ExtArgs> | null;
    include?: Prisma.DemandForecastInclude<ExtArgs> | null;
    where: Prisma.DemandForecastWhereUniqueInput;
};
export type DemandForecastFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandForecastSelect<ExtArgs> | null;
    omit?: Prisma.DemandForecastOmit<ExtArgs> | null;
    include?: Prisma.DemandForecastInclude<ExtArgs> | null;
    where?: Prisma.DemandForecastWhereInput;
    orderBy?: Prisma.DemandForecastOrderByWithRelationInput | Prisma.DemandForecastOrderByWithRelationInput[];
    cursor?: Prisma.DemandForecastWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DemandForecastScalarFieldEnum | Prisma.DemandForecastScalarFieldEnum[];
};
export type DemandForecastFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandForecastSelect<ExtArgs> | null;
    omit?: Prisma.DemandForecastOmit<ExtArgs> | null;
    include?: Prisma.DemandForecastInclude<ExtArgs> | null;
    where?: Prisma.DemandForecastWhereInput;
    orderBy?: Prisma.DemandForecastOrderByWithRelationInput | Prisma.DemandForecastOrderByWithRelationInput[];
    cursor?: Prisma.DemandForecastWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DemandForecastScalarFieldEnum | Prisma.DemandForecastScalarFieldEnum[];
};
export type DemandForecastFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandForecastSelect<ExtArgs> | null;
    omit?: Prisma.DemandForecastOmit<ExtArgs> | null;
    include?: Prisma.DemandForecastInclude<ExtArgs> | null;
    where?: Prisma.DemandForecastWhereInput;
    orderBy?: Prisma.DemandForecastOrderByWithRelationInput | Prisma.DemandForecastOrderByWithRelationInput[];
    cursor?: Prisma.DemandForecastWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DemandForecastScalarFieldEnum | Prisma.DemandForecastScalarFieldEnum[];
};
export type DemandForecastCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandForecastSelect<ExtArgs> | null;
    omit?: Prisma.DemandForecastOmit<ExtArgs> | null;
    include?: Prisma.DemandForecastInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DemandForecastCreateInput, Prisma.DemandForecastUncheckedCreateInput>;
};
export type DemandForecastCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DemandForecastCreateManyInput | Prisma.DemandForecastCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DemandForecastCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandForecastSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DemandForecastOmit<ExtArgs> | null;
    data: Prisma.DemandForecastCreateManyInput | Prisma.DemandForecastCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.DemandForecastIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type DemandForecastUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandForecastSelect<ExtArgs> | null;
    omit?: Prisma.DemandForecastOmit<ExtArgs> | null;
    include?: Prisma.DemandForecastInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DemandForecastUpdateInput, Prisma.DemandForecastUncheckedUpdateInput>;
    where: Prisma.DemandForecastWhereUniqueInput;
};
export type DemandForecastUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DemandForecastUpdateManyMutationInput, Prisma.DemandForecastUncheckedUpdateManyInput>;
    where?: Prisma.DemandForecastWhereInput;
    limit?: number;
};
export type DemandForecastUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandForecastSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DemandForecastOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DemandForecastUpdateManyMutationInput, Prisma.DemandForecastUncheckedUpdateManyInput>;
    where?: Prisma.DemandForecastWhereInput;
    limit?: number;
    include?: Prisma.DemandForecastIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type DemandForecastUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandForecastSelect<ExtArgs> | null;
    omit?: Prisma.DemandForecastOmit<ExtArgs> | null;
    include?: Prisma.DemandForecastInclude<ExtArgs> | null;
    where: Prisma.DemandForecastWhereUniqueInput;
    create: Prisma.XOR<Prisma.DemandForecastCreateInput, Prisma.DemandForecastUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DemandForecastUpdateInput, Prisma.DemandForecastUncheckedUpdateInput>;
};
export type DemandForecastDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandForecastSelect<ExtArgs> | null;
    omit?: Prisma.DemandForecastOmit<ExtArgs> | null;
    include?: Prisma.DemandForecastInclude<ExtArgs> | null;
    where: Prisma.DemandForecastWhereUniqueInput;
};
export type DemandForecastDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DemandForecastWhereInput;
    limit?: number;
};
export type DemandForecastDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DemandForecastSelect<ExtArgs> | null;
    omit?: Prisma.DemandForecastOmit<ExtArgs> | null;
    include?: Prisma.DemandForecastInclude<ExtArgs> | null;
};
