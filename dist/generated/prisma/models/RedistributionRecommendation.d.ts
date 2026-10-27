import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type RedistributionRecommendationModel = runtime.Types.Result.DefaultSelection<Prisma.$RedistributionRecommendationPayload>;
export type AggregateRedistributionRecommendation = {
    _count: RedistributionRecommendationCountAggregateOutputType | null;
    _avg: RedistributionRecommendationAvgAggregateOutputType | null;
    _sum: RedistributionRecommendationSumAggregateOutputType | null;
    _min: RedistributionRecommendationMinAggregateOutputType | null;
    _max: RedistributionRecommendationMaxAggregateOutputType | null;
};
export type RedistributionRecommendationAvgAggregateOutputType = {
    suggestedUnits: number | null;
    confidenceScore: number | null;
};
export type RedistributionRecommendationSumAggregateOutputType = {
    suggestedUnits: number | null;
    confidenceScore: number | null;
};
export type RedistributionRecommendationMinAggregateOutputType = {
    id: string | null;
    sourceFacilityId: string | null;
    destinationFacilityId: string | null;
    bloodGroup: $Enums.BloodGroup | null;
    component: $Enums.ComponentType | null;
    suggestedUnits: number | null;
    reason: string | null;
    confidenceScore: number | null;
    status: $Enums.RecommendationStatus | null;
    createdAt: Date | null;
    reviewedAt: Date | null;
    reviewedBy: string | null;
};
export type RedistributionRecommendationMaxAggregateOutputType = {
    id: string | null;
    sourceFacilityId: string | null;
    destinationFacilityId: string | null;
    bloodGroup: $Enums.BloodGroup | null;
    component: $Enums.ComponentType | null;
    suggestedUnits: number | null;
    reason: string | null;
    confidenceScore: number | null;
    status: $Enums.RecommendationStatus | null;
    createdAt: Date | null;
    reviewedAt: Date | null;
    reviewedBy: string | null;
};
export type RedistributionRecommendationCountAggregateOutputType = {
    id: number;
    sourceFacilityId: number;
    destinationFacilityId: number;
    bloodGroup: number;
    component: number;
    suggestedUnits: number;
    reason: number;
    confidenceScore: number;
    status: number;
    createdAt: number;
    reviewedAt: number;
    reviewedBy: number;
    _all: number;
};
export type RedistributionRecommendationAvgAggregateInputType = {
    suggestedUnits?: true;
    confidenceScore?: true;
};
export type RedistributionRecommendationSumAggregateInputType = {
    suggestedUnits?: true;
    confidenceScore?: true;
};
export type RedistributionRecommendationMinAggregateInputType = {
    id?: true;
    sourceFacilityId?: true;
    destinationFacilityId?: true;
    bloodGroup?: true;
    component?: true;
    suggestedUnits?: true;
    reason?: true;
    confidenceScore?: true;
    status?: true;
    createdAt?: true;
    reviewedAt?: true;
    reviewedBy?: true;
};
export type RedistributionRecommendationMaxAggregateInputType = {
    id?: true;
    sourceFacilityId?: true;
    destinationFacilityId?: true;
    bloodGroup?: true;
    component?: true;
    suggestedUnits?: true;
    reason?: true;
    confidenceScore?: true;
    status?: true;
    createdAt?: true;
    reviewedAt?: true;
    reviewedBy?: true;
};
export type RedistributionRecommendationCountAggregateInputType = {
    id?: true;
    sourceFacilityId?: true;
    destinationFacilityId?: true;
    bloodGroup?: true;
    component?: true;
    suggestedUnits?: true;
    reason?: true;
    confidenceScore?: true;
    status?: true;
    createdAt?: true;
    reviewedAt?: true;
    reviewedBy?: true;
    _all?: true;
};
export type RedistributionRecommendationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RedistributionRecommendationWhereInput;
    orderBy?: Prisma.RedistributionRecommendationOrderByWithRelationInput | Prisma.RedistributionRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.RedistributionRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | RedistributionRecommendationCountAggregateInputType;
    _avg?: RedistributionRecommendationAvgAggregateInputType;
    _sum?: RedistributionRecommendationSumAggregateInputType;
    _min?: RedistributionRecommendationMinAggregateInputType;
    _max?: RedistributionRecommendationMaxAggregateInputType;
};
export type GetRedistributionRecommendationAggregateType<T extends RedistributionRecommendationAggregateArgs> = {
    [P in keyof T & keyof AggregateRedistributionRecommendation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRedistributionRecommendation[P]> : Prisma.GetScalarType<T[P], AggregateRedistributionRecommendation[P]>;
};
export type RedistributionRecommendationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RedistributionRecommendationWhereInput;
    orderBy?: Prisma.RedistributionRecommendationOrderByWithAggregationInput | Prisma.RedistributionRecommendationOrderByWithAggregationInput[];
    by: Prisma.RedistributionRecommendationScalarFieldEnum[] | Prisma.RedistributionRecommendationScalarFieldEnum;
    having?: Prisma.RedistributionRecommendationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RedistributionRecommendationCountAggregateInputType | true;
    _avg?: RedistributionRecommendationAvgAggregateInputType;
    _sum?: RedistributionRecommendationSumAggregateInputType;
    _min?: RedistributionRecommendationMinAggregateInputType;
    _max?: RedistributionRecommendationMaxAggregateInputType;
};
export type RedistributionRecommendationGroupByOutputType = {
    id: string;
    sourceFacilityId: string;
    destinationFacilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    suggestedUnits: number;
    reason: string;
    confidenceScore: number | null;
    status: $Enums.RecommendationStatus;
    createdAt: Date;
    reviewedAt: Date | null;
    reviewedBy: string | null;
    _count: RedistributionRecommendationCountAggregateOutputType | null;
    _avg: RedistributionRecommendationAvgAggregateOutputType | null;
    _sum: RedistributionRecommendationSumAggregateOutputType | null;
    _min: RedistributionRecommendationMinAggregateOutputType | null;
    _max: RedistributionRecommendationMaxAggregateOutputType | null;
};
export type GetRedistributionRecommendationGroupByPayload<T extends RedistributionRecommendationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RedistributionRecommendationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RedistributionRecommendationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RedistributionRecommendationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RedistributionRecommendationGroupByOutputType[P]>;
}>>;
export type RedistributionRecommendationWhereInput = {
    AND?: Prisma.RedistributionRecommendationWhereInput | Prisma.RedistributionRecommendationWhereInput[];
    OR?: Prisma.RedistributionRecommendationWhereInput[];
    NOT?: Prisma.RedistributionRecommendationWhereInput | Prisma.RedistributionRecommendationWhereInput[];
    id?: Prisma.StringFilter<"RedistributionRecommendation"> | string;
    sourceFacilityId?: Prisma.StringFilter<"RedistributionRecommendation"> | string;
    destinationFacilityId?: Prisma.StringFilter<"RedistributionRecommendation"> | string;
    bloodGroup?: Prisma.EnumBloodGroupFilter<"RedistributionRecommendation"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFilter<"RedistributionRecommendation"> | $Enums.ComponentType;
    suggestedUnits?: Prisma.IntFilter<"RedistributionRecommendation"> | number;
    reason?: Prisma.StringFilter<"RedistributionRecommendation"> | string;
    confidenceScore?: Prisma.FloatNullableFilter<"RedistributionRecommendation"> | number | null;
    status?: Prisma.EnumRecommendationStatusFilter<"RedistributionRecommendation"> | $Enums.RecommendationStatus;
    createdAt?: Prisma.DateTimeFilter<"RedistributionRecommendation"> | Date | string;
    reviewedAt?: Prisma.DateTimeNullableFilter<"RedistributionRecommendation"> | Date | string | null;
    reviewedBy?: Prisma.StringNullableFilter<"RedistributionRecommendation"> | string | null;
    sourceFacility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
    destinationFacility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
};
export type RedistributionRecommendationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    sourceFacilityId?: Prisma.SortOrder;
    destinationFacilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    suggestedUnits?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    sourceFacility?: Prisma.FacilityOrderByWithRelationInput;
    destinationFacility?: Prisma.FacilityOrderByWithRelationInput;
};
export type RedistributionRecommendationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RedistributionRecommendationWhereInput | Prisma.RedistributionRecommendationWhereInput[];
    OR?: Prisma.RedistributionRecommendationWhereInput[];
    NOT?: Prisma.RedistributionRecommendationWhereInput | Prisma.RedistributionRecommendationWhereInput[];
    sourceFacilityId?: Prisma.StringFilter<"RedistributionRecommendation"> | string;
    destinationFacilityId?: Prisma.StringFilter<"RedistributionRecommendation"> | string;
    bloodGroup?: Prisma.EnumBloodGroupFilter<"RedistributionRecommendation"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFilter<"RedistributionRecommendation"> | $Enums.ComponentType;
    suggestedUnits?: Prisma.IntFilter<"RedistributionRecommendation"> | number;
    reason?: Prisma.StringFilter<"RedistributionRecommendation"> | string;
    confidenceScore?: Prisma.FloatNullableFilter<"RedistributionRecommendation"> | number | null;
    status?: Prisma.EnumRecommendationStatusFilter<"RedistributionRecommendation"> | $Enums.RecommendationStatus;
    createdAt?: Prisma.DateTimeFilter<"RedistributionRecommendation"> | Date | string;
    reviewedAt?: Prisma.DateTimeNullableFilter<"RedistributionRecommendation"> | Date | string | null;
    reviewedBy?: Prisma.StringNullableFilter<"RedistributionRecommendation"> | string | null;
    sourceFacility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
    destinationFacility?: Prisma.XOR<Prisma.FacilityScalarRelationFilter, Prisma.FacilityWhereInput>;
}, "id">;
export type RedistributionRecommendationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    sourceFacilityId?: Prisma.SortOrder;
    destinationFacilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    suggestedUnits?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.RedistributionRecommendationCountOrderByAggregateInput;
    _avg?: Prisma.RedistributionRecommendationAvgOrderByAggregateInput;
    _max?: Prisma.RedistributionRecommendationMaxOrderByAggregateInput;
    _min?: Prisma.RedistributionRecommendationMinOrderByAggregateInput;
    _sum?: Prisma.RedistributionRecommendationSumOrderByAggregateInput;
};
export type RedistributionRecommendationScalarWhereWithAggregatesInput = {
    AND?: Prisma.RedistributionRecommendationScalarWhereWithAggregatesInput | Prisma.RedistributionRecommendationScalarWhereWithAggregatesInput[];
    OR?: Prisma.RedistributionRecommendationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RedistributionRecommendationScalarWhereWithAggregatesInput | Prisma.RedistributionRecommendationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RedistributionRecommendation"> | string;
    sourceFacilityId?: Prisma.StringWithAggregatesFilter<"RedistributionRecommendation"> | string;
    destinationFacilityId?: Prisma.StringWithAggregatesFilter<"RedistributionRecommendation"> | string;
    bloodGroup?: Prisma.EnumBloodGroupWithAggregatesFilter<"RedistributionRecommendation"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeWithAggregatesFilter<"RedistributionRecommendation"> | $Enums.ComponentType;
    suggestedUnits?: Prisma.IntWithAggregatesFilter<"RedistributionRecommendation"> | number;
    reason?: Prisma.StringWithAggregatesFilter<"RedistributionRecommendation"> | string;
    confidenceScore?: Prisma.FloatNullableWithAggregatesFilter<"RedistributionRecommendation"> | number | null;
    status?: Prisma.EnumRecommendationStatusWithAggregatesFilter<"RedistributionRecommendation"> | $Enums.RecommendationStatus;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RedistributionRecommendation"> | Date | string;
    reviewedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"RedistributionRecommendation"> | Date | string | null;
    reviewedBy?: Prisma.StringNullableWithAggregatesFilter<"RedistributionRecommendation"> | string | null;
};
export type RedistributionRecommendationCreateInput = {
    id?: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    suggestedUnits: number;
    reason: string;
    confidenceScore?: number | null;
    status?: $Enums.RecommendationStatus;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    reviewedBy?: string | null;
    sourceFacility: Prisma.FacilityCreateNestedOneWithoutRecommendationsFromInput;
    destinationFacility: Prisma.FacilityCreateNestedOneWithoutRecommendationsToInput;
};
export type RedistributionRecommendationUncheckedCreateInput = {
    id?: string;
    sourceFacilityId: string;
    destinationFacilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    suggestedUnits: number;
    reason: string;
    confidenceScore?: number | null;
    status?: $Enums.RecommendationStatus;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    reviewedBy?: string | null;
};
export type RedistributionRecommendationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    suggestedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumRecommendationStatusFieldUpdateOperationsInput | $Enums.RecommendationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceFacility?: Prisma.FacilityUpdateOneRequiredWithoutRecommendationsFromNestedInput;
    destinationFacility?: Prisma.FacilityUpdateOneRequiredWithoutRecommendationsToNestedInput;
};
export type RedistributionRecommendationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    suggestedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumRecommendationStatusFieldUpdateOperationsInput | $Enums.RecommendationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RedistributionRecommendationCreateManyInput = {
    id?: string;
    sourceFacilityId: string;
    destinationFacilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    suggestedUnits: number;
    reason: string;
    confidenceScore?: number | null;
    status?: $Enums.RecommendationStatus;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    reviewedBy?: string | null;
};
export type RedistributionRecommendationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    suggestedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumRecommendationStatusFieldUpdateOperationsInput | $Enums.RecommendationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RedistributionRecommendationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    suggestedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumRecommendationStatusFieldUpdateOperationsInput | $Enums.RecommendationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RedistributionRecommendationListRelationFilter = {
    every?: Prisma.RedistributionRecommendationWhereInput;
    some?: Prisma.RedistributionRecommendationWhereInput;
    none?: Prisma.RedistributionRecommendationWhereInput;
};
export type RedistributionRecommendationOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RedistributionRecommendationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sourceFacilityId?: Prisma.SortOrder;
    destinationFacilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    suggestedUnits?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrder;
};
export type RedistributionRecommendationAvgOrderByAggregateInput = {
    suggestedUnits?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
};
export type RedistributionRecommendationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sourceFacilityId?: Prisma.SortOrder;
    destinationFacilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    suggestedUnits?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrder;
};
export type RedistributionRecommendationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    sourceFacilityId?: Prisma.SortOrder;
    destinationFacilityId?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    component?: Prisma.SortOrder;
    suggestedUnits?: Prisma.SortOrder;
    reason?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    reviewedAt?: Prisma.SortOrder;
    reviewedBy?: Prisma.SortOrder;
};
export type RedistributionRecommendationSumOrderByAggregateInput = {
    suggestedUnits?: Prisma.SortOrder;
    confidenceScore?: Prisma.SortOrder;
};
export type RedistributionRecommendationCreateNestedManyWithoutSourceFacilityInput = {
    create?: Prisma.XOR<Prisma.RedistributionRecommendationCreateWithoutSourceFacilityInput, Prisma.RedistributionRecommendationUncheckedCreateWithoutSourceFacilityInput> | Prisma.RedistributionRecommendationCreateWithoutSourceFacilityInput[] | Prisma.RedistributionRecommendationUncheckedCreateWithoutSourceFacilityInput[];
    connectOrCreate?: Prisma.RedistributionRecommendationCreateOrConnectWithoutSourceFacilityInput | Prisma.RedistributionRecommendationCreateOrConnectWithoutSourceFacilityInput[];
    createMany?: Prisma.RedistributionRecommendationCreateManySourceFacilityInputEnvelope;
    connect?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
};
export type RedistributionRecommendationCreateNestedManyWithoutDestinationFacilityInput = {
    create?: Prisma.XOR<Prisma.RedistributionRecommendationCreateWithoutDestinationFacilityInput, Prisma.RedistributionRecommendationUncheckedCreateWithoutDestinationFacilityInput> | Prisma.RedistributionRecommendationCreateWithoutDestinationFacilityInput[] | Prisma.RedistributionRecommendationUncheckedCreateWithoutDestinationFacilityInput[];
    connectOrCreate?: Prisma.RedistributionRecommendationCreateOrConnectWithoutDestinationFacilityInput | Prisma.RedistributionRecommendationCreateOrConnectWithoutDestinationFacilityInput[];
    createMany?: Prisma.RedistributionRecommendationCreateManyDestinationFacilityInputEnvelope;
    connect?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
};
export type RedistributionRecommendationUncheckedCreateNestedManyWithoutSourceFacilityInput = {
    create?: Prisma.XOR<Prisma.RedistributionRecommendationCreateWithoutSourceFacilityInput, Prisma.RedistributionRecommendationUncheckedCreateWithoutSourceFacilityInput> | Prisma.RedistributionRecommendationCreateWithoutSourceFacilityInput[] | Prisma.RedistributionRecommendationUncheckedCreateWithoutSourceFacilityInput[];
    connectOrCreate?: Prisma.RedistributionRecommendationCreateOrConnectWithoutSourceFacilityInput | Prisma.RedistributionRecommendationCreateOrConnectWithoutSourceFacilityInput[];
    createMany?: Prisma.RedistributionRecommendationCreateManySourceFacilityInputEnvelope;
    connect?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
};
export type RedistributionRecommendationUncheckedCreateNestedManyWithoutDestinationFacilityInput = {
    create?: Prisma.XOR<Prisma.RedistributionRecommendationCreateWithoutDestinationFacilityInput, Prisma.RedistributionRecommendationUncheckedCreateWithoutDestinationFacilityInput> | Prisma.RedistributionRecommendationCreateWithoutDestinationFacilityInput[] | Prisma.RedistributionRecommendationUncheckedCreateWithoutDestinationFacilityInput[];
    connectOrCreate?: Prisma.RedistributionRecommendationCreateOrConnectWithoutDestinationFacilityInput | Prisma.RedistributionRecommendationCreateOrConnectWithoutDestinationFacilityInput[];
    createMany?: Prisma.RedistributionRecommendationCreateManyDestinationFacilityInputEnvelope;
    connect?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
};
export type RedistributionRecommendationUpdateManyWithoutSourceFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.RedistributionRecommendationCreateWithoutSourceFacilityInput, Prisma.RedistributionRecommendationUncheckedCreateWithoutSourceFacilityInput> | Prisma.RedistributionRecommendationCreateWithoutSourceFacilityInput[] | Prisma.RedistributionRecommendationUncheckedCreateWithoutSourceFacilityInput[];
    connectOrCreate?: Prisma.RedistributionRecommendationCreateOrConnectWithoutSourceFacilityInput | Prisma.RedistributionRecommendationCreateOrConnectWithoutSourceFacilityInput[];
    upsert?: Prisma.RedistributionRecommendationUpsertWithWhereUniqueWithoutSourceFacilityInput | Prisma.RedistributionRecommendationUpsertWithWhereUniqueWithoutSourceFacilityInput[];
    createMany?: Prisma.RedistributionRecommendationCreateManySourceFacilityInputEnvelope;
    set?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    disconnect?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    delete?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    connect?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    update?: Prisma.RedistributionRecommendationUpdateWithWhereUniqueWithoutSourceFacilityInput | Prisma.RedistributionRecommendationUpdateWithWhereUniqueWithoutSourceFacilityInput[];
    updateMany?: Prisma.RedistributionRecommendationUpdateManyWithWhereWithoutSourceFacilityInput | Prisma.RedistributionRecommendationUpdateManyWithWhereWithoutSourceFacilityInput[];
    deleteMany?: Prisma.RedistributionRecommendationScalarWhereInput | Prisma.RedistributionRecommendationScalarWhereInput[];
};
export type RedistributionRecommendationUpdateManyWithoutDestinationFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.RedistributionRecommendationCreateWithoutDestinationFacilityInput, Prisma.RedistributionRecommendationUncheckedCreateWithoutDestinationFacilityInput> | Prisma.RedistributionRecommendationCreateWithoutDestinationFacilityInput[] | Prisma.RedistributionRecommendationUncheckedCreateWithoutDestinationFacilityInput[];
    connectOrCreate?: Prisma.RedistributionRecommendationCreateOrConnectWithoutDestinationFacilityInput | Prisma.RedistributionRecommendationCreateOrConnectWithoutDestinationFacilityInput[];
    upsert?: Prisma.RedistributionRecommendationUpsertWithWhereUniqueWithoutDestinationFacilityInput | Prisma.RedistributionRecommendationUpsertWithWhereUniqueWithoutDestinationFacilityInput[];
    createMany?: Prisma.RedistributionRecommendationCreateManyDestinationFacilityInputEnvelope;
    set?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    disconnect?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    delete?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    connect?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    update?: Prisma.RedistributionRecommendationUpdateWithWhereUniqueWithoutDestinationFacilityInput | Prisma.RedistributionRecommendationUpdateWithWhereUniqueWithoutDestinationFacilityInput[];
    updateMany?: Prisma.RedistributionRecommendationUpdateManyWithWhereWithoutDestinationFacilityInput | Prisma.RedistributionRecommendationUpdateManyWithWhereWithoutDestinationFacilityInput[];
    deleteMany?: Prisma.RedistributionRecommendationScalarWhereInput | Prisma.RedistributionRecommendationScalarWhereInput[];
};
export type RedistributionRecommendationUncheckedUpdateManyWithoutSourceFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.RedistributionRecommendationCreateWithoutSourceFacilityInput, Prisma.RedistributionRecommendationUncheckedCreateWithoutSourceFacilityInput> | Prisma.RedistributionRecommendationCreateWithoutSourceFacilityInput[] | Prisma.RedistributionRecommendationUncheckedCreateWithoutSourceFacilityInput[];
    connectOrCreate?: Prisma.RedistributionRecommendationCreateOrConnectWithoutSourceFacilityInput | Prisma.RedistributionRecommendationCreateOrConnectWithoutSourceFacilityInput[];
    upsert?: Prisma.RedistributionRecommendationUpsertWithWhereUniqueWithoutSourceFacilityInput | Prisma.RedistributionRecommendationUpsertWithWhereUniqueWithoutSourceFacilityInput[];
    createMany?: Prisma.RedistributionRecommendationCreateManySourceFacilityInputEnvelope;
    set?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    disconnect?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    delete?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    connect?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    update?: Prisma.RedistributionRecommendationUpdateWithWhereUniqueWithoutSourceFacilityInput | Prisma.RedistributionRecommendationUpdateWithWhereUniqueWithoutSourceFacilityInput[];
    updateMany?: Prisma.RedistributionRecommendationUpdateManyWithWhereWithoutSourceFacilityInput | Prisma.RedistributionRecommendationUpdateManyWithWhereWithoutSourceFacilityInput[];
    deleteMany?: Prisma.RedistributionRecommendationScalarWhereInput | Prisma.RedistributionRecommendationScalarWhereInput[];
};
export type RedistributionRecommendationUncheckedUpdateManyWithoutDestinationFacilityNestedInput = {
    create?: Prisma.XOR<Prisma.RedistributionRecommendationCreateWithoutDestinationFacilityInput, Prisma.RedistributionRecommendationUncheckedCreateWithoutDestinationFacilityInput> | Prisma.RedistributionRecommendationCreateWithoutDestinationFacilityInput[] | Prisma.RedistributionRecommendationUncheckedCreateWithoutDestinationFacilityInput[];
    connectOrCreate?: Prisma.RedistributionRecommendationCreateOrConnectWithoutDestinationFacilityInput | Prisma.RedistributionRecommendationCreateOrConnectWithoutDestinationFacilityInput[];
    upsert?: Prisma.RedistributionRecommendationUpsertWithWhereUniqueWithoutDestinationFacilityInput | Prisma.RedistributionRecommendationUpsertWithWhereUniqueWithoutDestinationFacilityInput[];
    createMany?: Prisma.RedistributionRecommendationCreateManyDestinationFacilityInputEnvelope;
    set?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    disconnect?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    delete?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    connect?: Prisma.RedistributionRecommendationWhereUniqueInput | Prisma.RedistributionRecommendationWhereUniqueInput[];
    update?: Prisma.RedistributionRecommendationUpdateWithWhereUniqueWithoutDestinationFacilityInput | Prisma.RedistributionRecommendationUpdateWithWhereUniqueWithoutDestinationFacilityInput[];
    updateMany?: Prisma.RedistributionRecommendationUpdateManyWithWhereWithoutDestinationFacilityInput | Prisma.RedistributionRecommendationUpdateManyWithWhereWithoutDestinationFacilityInput[];
    deleteMany?: Prisma.RedistributionRecommendationScalarWhereInput | Prisma.RedistributionRecommendationScalarWhereInput[];
};
export type EnumRecommendationStatusFieldUpdateOperationsInput = {
    set?: $Enums.RecommendationStatus;
};
export type RedistributionRecommendationCreateWithoutSourceFacilityInput = {
    id?: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    suggestedUnits: number;
    reason: string;
    confidenceScore?: number | null;
    status?: $Enums.RecommendationStatus;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    reviewedBy?: string | null;
    destinationFacility: Prisma.FacilityCreateNestedOneWithoutRecommendationsToInput;
};
export type RedistributionRecommendationUncheckedCreateWithoutSourceFacilityInput = {
    id?: string;
    destinationFacilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    suggestedUnits: number;
    reason: string;
    confidenceScore?: number | null;
    status?: $Enums.RecommendationStatus;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    reviewedBy?: string | null;
};
export type RedistributionRecommendationCreateOrConnectWithoutSourceFacilityInput = {
    where: Prisma.RedistributionRecommendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.RedistributionRecommendationCreateWithoutSourceFacilityInput, Prisma.RedistributionRecommendationUncheckedCreateWithoutSourceFacilityInput>;
};
export type RedistributionRecommendationCreateManySourceFacilityInputEnvelope = {
    data: Prisma.RedistributionRecommendationCreateManySourceFacilityInput | Prisma.RedistributionRecommendationCreateManySourceFacilityInput[];
    skipDuplicates?: boolean;
};
export type RedistributionRecommendationCreateWithoutDestinationFacilityInput = {
    id?: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    suggestedUnits: number;
    reason: string;
    confidenceScore?: number | null;
    status?: $Enums.RecommendationStatus;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    reviewedBy?: string | null;
    sourceFacility: Prisma.FacilityCreateNestedOneWithoutRecommendationsFromInput;
};
export type RedistributionRecommendationUncheckedCreateWithoutDestinationFacilityInput = {
    id?: string;
    sourceFacilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    suggestedUnits: number;
    reason: string;
    confidenceScore?: number | null;
    status?: $Enums.RecommendationStatus;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    reviewedBy?: string | null;
};
export type RedistributionRecommendationCreateOrConnectWithoutDestinationFacilityInput = {
    where: Prisma.RedistributionRecommendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.RedistributionRecommendationCreateWithoutDestinationFacilityInput, Prisma.RedistributionRecommendationUncheckedCreateWithoutDestinationFacilityInput>;
};
export type RedistributionRecommendationCreateManyDestinationFacilityInputEnvelope = {
    data: Prisma.RedistributionRecommendationCreateManyDestinationFacilityInput | Prisma.RedistributionRecommendationCreateManyDestinationFacilityInput[];
    skipDuplicates?: boolean;
};
export type RedistributionRecommendationUpsertWithWhereUniqueWithoutSourceFacilityInput = {
    where: Prisma.RedistributionRecommendationWhereUniqueInput;
    update: Prisma.XOR<Prisma.RedistributionRecommendationUpdateWithoutSourceFacilityInput, Prisma.RedistributionRecommendationUncheckedUpdateWithoutSourceFacilityInput>;
    create: Prisma.XOR<Prisma.RedistributionRecommendationCreateWithoutSourceFacilityInput, Prisma.RedistributionRecommendationUncheckedCreateWithoutSourceFacilityInput>;
};
export type RedistributionRecommendationUpdateWithWhereUniqueWithoutSourceFacilityInput = {
    where: Prisma.RedistributionRecommendationWhereUniqueInput;
    data: Prisma.XOR<Prisma.RedistributionRecommendationUpdateWithoutSourceFacilityInput, Prisma.RedistributionRecommendationUncheckedUpdateWithoutSourceFacilityInput>;
};
export type RedistributionRecommendationUpdateManyWithWhereWithoutSourceFacilityInput = {
    where: Prisma.RedistributionRecommendationScalarWhereInput;
    data: Prisma.XOR<Prisma.RedistributionRecommendationUpdateManyMutationInput, Prisma.RedistributionRecommendationUncheckedUpdateManyWithoutSourceFacilityInput>;
};
export type RedistributionRecommendationScalarWhereInput = {
    AND?: Prisma.RedistributionRecommendationScalarWhereInput | Prisma.RedistributionRecommendationScalarWhereInput[];
    OR?: Prisma.RedistributionRecommendationScalarWhereInput[];
    NOT?: Prisma.RedistributionRecommendationScalarWhereInput | Prisma.RedistributionRecommendationScalarWhereInput[];
    id?: Prisma.StringFilter<"RedistributionRecommendation"> | string;
    sourceFacilityId?: Prisma.StringFilter<"RedistributionRecommendation"> | string;
    destinationFacilityId?: Prisma.StringFilter<"RedistributionRecommendation"> | string;
    bloodGroup?: Prisma.EnumBloodGroupFilter<"RedistributionRecommendation"> | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFilter<"RedistributionRecommendation"> | $Enums.ComponentType;
    suggestedUnits?: Prisma.IntFilter<"RedistributionRecommendation"> | number;
    reason?: Prisma.StringFilter<"RedistributionRecommendation"> | string;
    confidenceScore?: Prisma.FloatNullableFilter<"RedistributionRecommendation"> | number | null;
    status?: Prisma.EnumRecommendationStatusFilter<"RedistributionRecommendation"> | $Enums.RecommendationStatus;
    createdAt?: Prisma.DateTimeFilter<"RedistributionRecommendation"> | Date | string;
    reviewedAt?: Prisma.DateTimeNullableFilter<"RedistributionRecommendation"> | Date | string | null;
    reviewedBy?: Prisma.StringNullableFilter<"RedistributionRecommendation"> | string | null;
};
export type RedistributionRecommendationUpsertWithWhereUniqueWithoutDestinationFacilityInput = {
    where: Prisma.RedistributionRecommendationWhereUniqueInput;
    update: Prisma.XOR<Prisma.RedistributionRecommendationUpdateWithoutDestinationFacilityInput, Prisma.RedistributionRecommendationUncheckedUpdateWithoutDestinationFacilityInput>;
    create: Prisma.XOR<Prisma.RedistributionRecommendationCreateWithoutDestinationFacilityInput, Prisma.RedistributionRecommendationUncheckedCreateWithoutDestinationFacilityInput>;
};
export type RedistributionRecommendationUpdateWithWhereUniqueWithoutDestinationFacilityInput = {
    where: Prisma.RedistributionRecommendationWhereUniqueInput;
    data: Prisma.XOR<Prisma.RedistributionRecommendationUpdateWithoutDestinationFacilityInput, Prisma.RedistributionRecommendationUncheckedUpdateWithoutDestinationFacilityInput>;
};
export type RedistributionRecommendationUpdateManyWithWhereWithoutDestinationFacilityInput = {
    where: Prisma.RedistributionRecommendationScalarWhereInput;
    data: Prisma.XOR<Prisma.RedistributionRecommendationUpdateManyMutationInput, Prisma.RedistributionRecommendationUncheckedUpdateManyWithoutDestinationFacilityInput>;
};
export type RedistributionRecommendationCreateManySourceFacilityInput = {
    id?: string;
    destinationFacilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    suggestedUnits: number;
    reason: string;
    confidenceScore?: number | null;
    status?: $Enums.RecommendationStatus;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    reviewedBy?: string | null;
};
export type RedistributionRecommendationCreateManyDestinationFacilityInput = {
    id?: string;
    sourceFacilityId: string;
    bloodGroup: $Enums.BloodGroup;
    component: $Enums.ComponentType;
    suggestedUnits: number;
    reason: string;
    confidenceScore?: number | null;
    status?: $Enums.RecommendationStatus;
    createdAt?: Date | string;
    reviewedAt?: Date | string | null;
    reviewedBy?: string | null;
};
export type RedistributionRecommendationUpdateWithoutSourceFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    suggestedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumRecommendationStatusFieldUpdateOperationsInput | $Enums.RecommendationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    destinationFacility?: Prisma.FacilityUpdateOneRequiredWithoutRecommendationsToNestedInput;
};
export type RedistributionRecommendationUncheckedUpdateWithoutSourceFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    suggestedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumRecommendationStatusFieldUpdateOperationsInput | $Enums.RecommendationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RedistributionRecommendationUncheckedUpdateManyWithoutSourceFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    destinationFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    suggestedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumRecommendationStatusFieldUpdateOperationsInput | $Enums.RecommendationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RedistributionRecommendationUpdateWithoutDestinationFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    suggestedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumRecommendationStatusFieldUpdateOperationsInput | $Enums.RecommendationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    sourceFacility?: Prisma.FacilityUpdateOneRequiredWithoutRecommendationsFromNestedInput;
};
export type RedistributionRecommendationUncheckedUpdateWithoutDestinationFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    suggestedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumRecommendationStatusFieldUpdateOperationsInput | $Enums.RecommendationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RedistributionRecommendationUncheckedUpdateManyWithoutDestinationFacilityInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    sourceFacilityId?: Prisma.StringFieldUpdateOperationsInput | string;
    bloodGroup?: Prisma.EnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup;
    component?: Prisma.EnumComponentTypeFieldUpdateOperationsInput | $Enums.ComponentType;
    suggestedUnits?: Prisma.IntFieldUpdateOperationsInput | number;
    reason?: Prisma.StringFieldUpdateOperationsInput | string;
    confidenceScore?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    status?: Prisma.EnumRecommendationStatusFieldUpdateOperationsInput | $Enums.RecommendationStatus;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviewedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    reviewedBy?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type RedistributionRecommendationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sourceFacilityId?: boolean;
    destinationFacilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    suggestedUnits?: boolean;
    reason?: boolean;
    confidenceScore?: boolean;
    status?: boolean;
    createdAt?: boolean;
    reviewedAt?: boolean;
    reviewedBy?: boolean;
    sourceFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    destinationFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["redistributionRecommendation"]>;
export type RedistributionRecommendationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sourceFacilityId?: boolean;
    destinationFacilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    suggestedUnits?: boolean;
    reason?: boolean;
    confidenceScore?: boolean;
    status?: boolean;
    createdAt?: boolean;
    reviewedAt?: boolean;
    reviewedBy?: boolean;
    sourceFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    destinationFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["redistributionRecommendation"]>;
export type RedistributionRecommendationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    sourceFacilityId?: boolean;
    destinationFacilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    suggestedUnits?: boolean;
    reason?: boolean;
    confidenceScore?: boolean;
    status?: boolean;
    createdAt?: boolean;
    reviewedAt?: boolean;
    reviewedBy?: boolean;
    sourceFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    destinationFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["redistributionRecommendation"]>;
export type RedistributionRecommendationSelectScalar = {
    id?: boolean;
    sourceFacilityId?: boolean;
    destinationFacilityId?: boolean;
    bloodGroup?: boolean;
    component?: boolean;
    suggestedUnits?: boolean;
    reason?: boolean;
    confidenceScore?: boolean;
    status?: boolean;
    createdAt?: boolean;
    reviewedAt?: boolean;
    reviewedBy?: boolean;
};
export type RedistributionRecommendationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "sourceFacilityId" | "destinationFacilityId" | "bloodGroup" | "component" | "suggestedUnits" | "reason" | "confidenceScore" | "status" | "createdAt" | "reviewedAt" | "reviewedBy", ExtArgs["result"]["redistributionRecommendation"]>;
export type RedistributionRecommendationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sourceFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    destinationFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
};
export type RedistributionRecommendationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sourceFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    destinationFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
};
export type RedistributionRecommendationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sourceFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
    destinationFacility?: boolean | Prisma.FacilityDefaultArgs<ExtArgs>;
};
export type $RedistributionRecommendationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RedistributionRecommendation";
    objects: {
        sourceFacility: Prisma.$FacilityPayload<ExtArgs>;
        destinationFacility: Prisma.$FacilityPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        sourceFacilityId: string;
        destinationFacilityId: string;
        bloodGroup: $Enums.BloodGroup;
        component: $Enums.ComponentType;
        suggestedUnits: number;
        reason: string;
        confidenceScore: number | null;
        status: $Enums.RecommendationStatus;
        createdAt: Date;
        reviewedAt: Date | null;
        reviewedBy: string | null;
    }, ExtArgs["result"]["redistributionRecommendation"]>;
    composites: {};
};
export type RedistributionRecommendationGetPayload<S extends boolean | null | undefined | RedistributionRecommendationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RedistributionRecommendationPayload, S>;
export type RedistributionRecommendationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RedistributionRecommendationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RedistributionRecommendationCountAggregateInputType | true;
};
export interface RedistributionRecommendationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RedistributionRecommendation'];
        meta: {
            name: 'RedistributionRecommendation';
        };
    };
    findUnique<T extends RedistributionRecommendationFindUniqueArgs>(args: Prisma.SelectSubset<T, RedistributionRecommendationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RedistributionRecommendationClient<runtime.Types.Result.GetResult<Prisma.$RedistributionRecommendationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends RedistributionRecommendationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RedistributionRecommendationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RedistributionRecommendationClient<runtime.Types.Result.GetResult<Prisma.$RedistributionRecommendationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends RedistributionRecommendationFindFirstArgs>(args?: Prisma.SelectSubset<T, RedistributionRecommendationFindFirstArgs<ExtArgs>>): Prisma.Prisma__RedistributionRecommendationClient<runtime.Types.Result.GetResult<Prisma.$RedistributionRecommendationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends RedistributionRecommendationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RedistributionRecommendationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RedistributionRecommendationClient<runtime.Types.Result.GetResult<Prisma.$RedistributionRecommendationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends RedistributionRecommendationFindManyArgs>(args?: Prisma.SelectSubset<T, RedistributionRecommendationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RedistributionRecommendationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends RedistributionRecommendationCreateArgs>(args: Prisma.SelectSubset<T, RedistributionRecommendationCreateArgs<ExtArgs>>): Prisma.Prisma__RedistributionRecommendationClient<runtime.Types.Result.GetResult<Prisma.$RedistributionRecommendationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends RedistributionRecommendationCreateManyArgs>(args?: Prisma.SelectSubset<T, RedistributionRecommendationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends RedistributionRecommendationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RedistributionRecommendationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RedistributionRecommendationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends RedistributionRecommendationDeleteArgs>(args: Prisma.SelectSubset<T, RedistributionRecommendationDeleteArgs<ExtArgs>>): Prisma.Prisma__RedistributionRecommendationClient<runtime.Types.Result.GetResult<Prisma.$RedistributionRecommendationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends RedistributionRecommendationUpdateArgs>(args: Prisma.SelectSubset<T, RedistributionRecommendationUpdateArgs<ExtArgs>>): Prisma.Prisma__RedistributionRecommendationClient<runtime.Types.Result.GetResult<Prisma.$RedistributionRecommendationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends RedistributionRecommendationDeleteManyArgs>(args?: Prisma.SelectSubset<T, RedistributionRecommendationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends RedistributionRecommendationUpdateManyArgs>(args: Prisma.SelectSubset<T, RedistributionRecommendationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends RedistributionRecommendationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RedistributionRecommendationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RedistributionRecommendationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends RedistributionRecommendationUpsertArgs>(args: Prisma.SelectSubset<T, RedistributionRecommendationUpsertArgs<ExtArgs>>): Prisma.Prisma__RedistributionRecommendationClient<runtime.Types.Result.GetResult<Prisma.$RedistributionRecommendationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends RedistributionRecommendationCountArgs>(args?: Prisma.Subset<T, RedistributionRecommendationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RedistributionRecommendationCountAggregateOutputType> : number>;
    aggregate<T extends RedistributionRecommendationAggregateArgs>(args: Prisma.Subset<T, RedistributionRecommendationAggregateArgs>): Prisma.PrismaPromise<GetRedistributionRecommendationAggregateType<T>>;
    groupBy<T extends RedistributionRecommendationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RedistributionRecommendationGroupByArgs['orderBy'];
    } : {
        orderBy?: RedistributionRecommendationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RedistributionRecommendationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRedistributionRecommendationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: RedistributionRecommendationFieldRefs;
}
export interface Prisma__RedistributionRecommendationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    sourceFacility<T extends Prisma.FacilityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FacilityDefaultArgs<ExtArgs>>): Prisma.Prisma__FacilityClient<runtime.Types.Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    destinationFacility<T extends Prisma.FacilityDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.FacilityDefaultArgs<ExtArgs>>): Prisma.Prisma__FacilityClient<runtime.Types.Result.GetResult<Prisma.$FacilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface RedistributionRecommendationFieldRefs {
    readonly id: Prisma.FieldRef<"RedistributionRecommendation", 'String'>;
    readonly sourceFacilityId: Prisma.FieldRef<"RedistributionRecommendation", 'String'>;
    readonly destinationFacilityId: Prisma.FieldRef<"RedistributionRecommendation", 'String'>;
    readonly bloodGroup: Prisma.FieldRef<"RedistributionRecommendation", 'BloodGroup'>;
    readonly component: Prisma.FieldRef<"RedistributionRecommendation", 'ComponentType'>;
    readonly suggestedUnits: Prisma.FieldRef<"RedistributionRecommendation", 'Int'>;
    readonly reason: Prisma.FieldRef<"RedistributionRecommendation", 'String'>;
    readonly confidenceScore: Prisma.FieldRef<"RedistributionRecommendation", 'Float'>;
    readonly status: Prisma.FieldRef<"RedistributionRecommendation", 'RecommendationStatus'>;
    readonly createdAt: Prisma.FieldRef<"RedistributionRecommendation", 'DateTime'>;
    readonly reviewedAt: Prisma.FieldRef<"RedistributionRecommendation", 'DateTime'>;
    readonly reviewedBy: Prisma.FieldRef<"RedistributionRecommendation", 'String'>;
}
export type RedistributionRecommendationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedistributionRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.RedistributionRecommendationOmit<ExtArgs> | null;
    include?: Prisma.RedistributionRecommendationInclude<ExtArgs> | null;
    where: Prisma.RedistributionRecommendationWhereUniqueInput;
};
export type RedistributionRecommendationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedistributionRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.RedistributionRecommendationOmit<ExtArgs> | null;
    include?: Prisma.RedistributionRecommendationInclude<ExtArgs> | null;
    where: Prisma.RedistributionRecommendationWhereUniqueInput;
};
export type RedistributionRecommendationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedistributionRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.RedistributionRecommendationOmit<ExtArgs> | null;
    include?: Prisma.RedistributionRecommendationInclude<ExtArgs> | null;
    where?: Prisma.RedistributionRecommendationWhereInput;
    orderBy?: Prisma.RedistributionRecommendationOrderByWithRelationInput | Prisma.RedistributionRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.RedistributionRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RedistributionRecommendationScalarFieldEnum | Prisma.RedistributionRecommendationScalarFieldEnum[];
};
export type RedistributionRecommendationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedistributionRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.RedistributionRecommendationOmit<ExtArgs> | null;
    include?: Prisma.RedistributionRecommendationInclude<ExtArgs> | null;
    where?: Prisma.RedistributionRecommendationWhereInput;
    orderBy?: Prisma.RedistributionRecommendationOrderByWithRelationInput | Prisma.RedistributionRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.RedistributionRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RedistributionRecommendationScalarFieldEnum | Prisma.RedistributionRecommendationScalarFieldEnum[];
};
export type RedistributionRecommendationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedistributionRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.RedistributionRecommendationOmit<ExtArgs> | null;
    include?: Prisma.RedistributionRecommendationInclude<ExtArgs> | null;
    where?: Prisma.RedistributionRecommendationWhereInput;
    orderBy?: Prisma.RedistributionRecommendationOrderByWithRelationInput | Prisma.RedistributionRecommendationOrderByWithRelationInput[];
    cursor?: Prisma.RedistributionRecommendationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.RedistributionRecommendationScalarFieldEnum | Prisma.RedistributionRecommendationScalarFieldEnum[];
};
export type RedistributionRecommendationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedistributionRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.RedistributionRecommendationOmit<ExtArgs> | null;
    include?: Prisma.RedistributionRecommendationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RedistributionRecommendationCreateInput, Prisma.RedistributionRecommendationUncheckedCreateInput>;
};
export type RedistributionRecommendationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.RedistributionRecommendationCreateManyInput | Prisma.RedistributionRecommendationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type RedistributionRecommendationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedistributionRecommendationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RedistributionRecommendationOmit<ExtArgs> | null;
    data: Prisma.RedistributionRecommendationCreateManyInput | Prisma.RedistributionRecommendationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.RedistributionRecommendationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type RedistributionRecommendationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedistributionRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.RedistributionRecommendationOmit<ExtArgs> | null;
    include?: Prisma.RedistributionRecommendationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RedistributionRecommendationUpdateInput, Prisma.RedistributionRecommendationUncheckedUpdateInput>;
    where: Prisma.RedistributionRecommendationWhereUniqueInput;
};
export type RedistributionRecommendationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.RedistributionRecommendationUpdateManyMutationInput, Prisma.RedistributionRecommendationUncheckedUpdateManyInput>;
    where?: Prisma.RedistributionRecommendationWhereInput;
    limit?: number;
};
export type RedistributionRecommendationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedistributionRecommendationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.RedistributionRecommendationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.RedistributionRecommendationUpdateManyMutationInput, Prisma.RedistributionRecommendationUncheckedUpdateManyInput>;
    where?: Prisma.RedistributionRecommendationWhereInput;
    limit?: number;
    include?: Prisma.RedistributionRecommendationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type RedistributionRecommendationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedistributionRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.RedistributionRecommendationOmit<ExtArgs> | null;
    include?: Prisma.RedistributionRecommendationInclude<ExtArgs> | null;
    where: Prisma.RedistributionRecommendationWhereUniqueInput;
    create: Prisma.XOR<Prisma.RedistributionRecommendationCreateInput, Prisma.RedistributionRecommendationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.RedistributionRecommendationUpdateInput, Prisma.RedistributionRecommendationUncheckedUpdateInput>;
};
export type RedistributionRecommendationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedistributionRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.RedistributionRecommendationOmit<ExtArgs> | null;
    include?: Prisma.RedistributionRecommendationInclude<ExtArgs> | null;
    where: Prisma.RedistributionRecommendationWhereUniqueInput;
};
export type RedistributionRecommendationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RedistributionRecommendationWhereInput;
    limit?: number;
};
export type RedistributionRecommendationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.RedistributionRecommendationSelect<ExtArgs> | null;
    omit?: Prisma.RedistributionRecommendationOmit<ExtArgs> | null;
    include?: Prisma.RedistributionRecommendationInclude<ExtArgs> | null;
};
