import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
export type DonorModel = runtime.Types.Result.DefaultSelection<Prisma.$DonorPayload>;
export type AggregateDonor = {
    _count: DonorCountAggregateOutputType | null;
    _min: DonorMinAggregateOutputType | null;
    _max: DonorMaxAggregateOutputType | null;
};
export type DonorMinAggregateOutputType = {
    id: string | null;
    donorCode: string | null;
    firstName: string | null;
    lastName: string | null;
    dateOfBirth: Date | null;
    bloodGroup: $Enums.BloodGroup | null;
    phone: string | null;
    email: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DonorMaxAggregateOutputType = {
    id: string | null;
    donorCode: string | null;
    firstName: string | null;
    lastName: string | null;
    dateOfBirth: Date | null;
    bloodGroup: $Enums.BloodGroup | null;
    phone: string | null;
    email: string | null;
    isActive: boolean | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type DonorCountAggregateOutputType = {
    id: number;
    donorCode: number;
    firstName: number;
    lastName: number;
    dateOfBirth: number;
    bloodGroup: number;
    phone: number;
    email: number;
    isActive: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type DonorMinAggregateInputType = {
    id?: true;
    donorCode?: true;
    firstName?: true;
    lastName?: true;
    dateOfBirth?: true;
    bloodGroup?: true;
    phone?: true;
    email?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DonorMaxAggregateInputType = {
    id?: true;
    donorCode?: true;
    firstName?: true;
    lastName?: true;
    dateOfBirth?: true;
    bloodGroup?: true;
    phone?: true;
    email?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type DonorCountAggregateInputType = {
    id?: true;
    donorCode?: true;
    firstName?: true;
    lastName?: true;
    dateOfBirth?: true;
    bloodGroup?: true;
    phone?: true;
    email?: true;
    isActive?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type DonorAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DonorWhereInput;
    orderBy?: Prisma.DonorOrderByWithRelationInput | Prisma.DonorOrderByWithRelationInput[];
    cursor?: Prisma.DonorWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | DonorCountAggregateInputType;
    _min?: DonorMinAggregateInputType;
    _max?: DonorMaxAggregateInputType;
};
export type GetDonorAggregateType<T extends DonorAggregateArgs> = {
    [P in keyof T & keyof AggregateDonor]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateDonor[P]> : Prisma.GetScalarType<T[P], AggregateDonor[P]>;
};
export type DonorGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DonorWhereInput;
    orderBy?: Prisma.DonorOrderByWithAggregationInput | Prisma.DonorOrderByWithAggregationInput[];
    by: Prisma.DonorScalarFieldEnum[] | Prisma.DonorScalarFieldEnum;
    having?: Prisma.DonorScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: DonorCountAggregateInputType | true;
    _min?: DonorMinAggregateInputType;
    _max?: DonorMaxAggregateInputType;
};
export type DonorGroupByOutputType = {
    id: string;
    donorCode: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date | null;
    bloodGroup: $Enums.BloodGroup | null;
    phone: string | null;
    email: string | null;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
    _count: DonorCountAggregateOutputType | null;
    _min: DonorMinAggregateOutputType | null;
    _max: DonorMaxAggregateOutputType | null;
};
export type GetDonorGroupByPayload<T extends DonorGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<DonorGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof DonorGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], DonorGroupByOutputType[P]> : Prisma.GetScalarType<T[P], DonorGroupByOutputType[P]>;
}>>;
export type DonorWhereInput = {
    AND?: Prisma.DonorWhereInput | Prisma.DonorWhereInput[];
    OR?: Prisma.DonorWhereInput[];
    NOT?: Prisma.DonorWhereInput | Prisma.DonorWhereInput[];
    id?: Prisma.StringFilter<"Donor"> | string;
    donorCode?: Prisma.StringFilter<"Donor"> | string;
    firstName?: Prisma.StringFilter<"Donor"> | string;
    lastName?: Prisma.StringFilter<"Donor"> | string;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"Donor"> | Date | string | null;
    bloodGroup?: Prisma.EnumBloodGroupNullableFilter<"Donor"> | $Enums.BloodGroup | null;
    phone?: Prisma.StringNullableFilter<"Donor"> | string | null;
    email?: Prisma.StringNullableFilter<"Donor"> | string | null;
    isActive?: Prisma.BoolFilter<"Donor"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Donor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Donor"> | Date | string;
    donations?: Prisma.DonationListRelationFilter;
};
export type DonorOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    donorCode?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    donations?: Prisma.DonationOrderByRelationAggregateInput;
};
export type DonorWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    donorCode?: string;
    AND?: Prisma.DonorWhereInput | Prisma.DonorWhereInput[];
    OR?: Prisma.DonorWhereInput[];
    NOT?: Prisma.DonorWhereInput | Prisma.DonorWhereInput[];
    firstName?: Prisma.StringFilter<"Donor"> | string;
    lastName?: Prisma.StringFilter<"Donor"> | string;
    dateOfBirth?: Prisma.DateTimeNullableFilter<"Donor"> | Date | string | null;
    bloodGroup?: Prisma.EnumBloodGroupNullableFilter<"Donor"> | $Enums.BloodGroup | null;
    phone?: Prisma.StringNullableFilter<"Donor"> | string | null;
    email?: Prisma.StringNullableFilter<"Donor"> | string | null;
    isActive?: Prisma.BoolFilter<"Donor"> | boolean;
    createdAt?: Prisma.DateTimeFilter<"Donor"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Donor"> | Date | string;
    donations?: Prisma.DonationListRelationFilter;
}, "id" | "donorCode">;
export type DonorOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    donorCode?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrderInput | Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrderInput | Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.DonorCountOrderByAggregateInput;
    _max?: Prisma.DonorMaxOrderByAggregateInput;
    _min?: Prisma.DonorMinOrderByAggregateInput;
};
export type DonorScalarWhereWithAggregatesInput = {
    AND?: Prisma.DonorScalarWhereWithAggregatesInput | Prisma.DonorScalarWhereWithAggregatesInput[];
    OR?: Prisma.DonorScalarWhereWithAggregatesInput[];
    NOT?: Prisma.DonorScalarWhereWithAggregatesInput | Prisma.DonorScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Donor"> | string;
    donorCode?: Prisma.StringWithAggregatesFilter<"Donor"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"Donor"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"Donor"> | string;
    dateOfBirth?: Prisma.DateTimeNullableWithAggregatesFilter<"Donor"> | Date | string | null;
    bloodGroup?: Prisma.EnumBloodGroupNullableWithAggregatesFilter<"Donor"> | $Enums.BloodGroup | null;
    phone?: Prisma.StringNullableWithAggregatesFilter<"Donor"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"Donor"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"Donor"> | boolean;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Donor"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Donor"> | Date | string;
};
export type DonorCreateInput = {
    id?: string;
    donorCode: string;
    firstName: string;
    lastName: string;
    dateOfBirth?: Date | string | null;
    bloodGroup?: $Enums.BloodGroup | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    donations?: Prisma.DonationCreateNestedManyWithoutDonorInput;
};
export type DonorUncheckedCreateInput = {
    id?: string;
    donorCode: string;
    firstName: string;
    lastName: string;
    dateOfBirth?: Date | string | null;
    bloodGroup?: $Enums.BloodGroup | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    donations?: Prisma.DonationUncheckedCreateNestedManyWithoutDonorInput;
};
export type DonorUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    bloodGroup?: Prisma.NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    donations?: Prisma.DonationUpdateManyWithoutDonorNestedInput;
};
export type DonorUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    bloodGroup?: Prisma.NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    donations?: Prisma.DonationUncheckedUpdateManyWithoutDonorNestedInput;
};
export type DonorCreateManyInput = {
    id?: string;
    donorCode: string;
    firstName: string;
    lastName: string;
    dateOfBirth?: Date | string | null;
    bloodGroup?: $Enums.BloodGroup | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DonorUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    bloodGroup?: Prisma.NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonorUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    bloodGroup?: Prisma.NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonorCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    donorCode?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DonorMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    donorCode?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DonorMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    donorCode?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    bloodGroup?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type DonorScalarRelationFilter = {
    is?: Prisma.DonorWhereInput;
    isNot?: Prisma.DonorWhereInput;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type NullableEnumBloodGroupFieldUpdateOperationsInput = {
    set?: $Enums.BloodGroup | null;
};
export type DonorCreateNestedOneWithoutDonationsInput = {
    create?: Prisma.XOR<Prisma.DonorCreateWithoutDonationsInput, Prisma.DonorUncheckedCreateWithoutDonationsInput>;
    connectOrCreate?: Prisma.DonorCreateOrConnectWithoutDonationsInput;
    connect?: Prisma.DonorWhereUniqueInput;
};
export type DonorUpdateOneRequiredWithoutDonationsNestedInput = {
    create?: Prisma.XOR<Prisma.DonorCreateWithoutDonationsInput, Prisma.DonorUncheckedCreateWithoutDonationsInput>;
    connectOrCreate?: Prisma.DonorCreateOrConnectWithoutDonationsInput;
    upsert?: Prisma.DonorUpsertWithoutDonationsInput;
    connect?: Prisma.DonorWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.DonorUpdateToOneWithWhereWithoutDonationsInput, Prisma.DonorUpdateWithoutDonationsInput>, Prisma.DonorUncheckedUpdateWithoutDonationsInput>;
};
export type DonorCreateWithoutDonationsInput = {
    id?: string;
    donorCode: string;
    firstName: string;
    lastName: string;
    dateOfBirth?: Date | string | null;
    bloodGroup?: $Enums.BloodGroup | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DonorUncheckedCreateWithoutDonationsInput = {
    id?: string;
    donorCode: string;
    firstName: string;
    lastName: string;
    dateOfBirth?: Date | string | null;
    bloodGroup?: $Enums.BloodGroup | null;
    phone?: string | null;
    email?: string | null;
    isActive?: boolean;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type DonorCreateOrConnectWithoutDonationsInput = {
    where: Prisma.DonorWhereUniqueInput;
    create: Prisma.XOR<Prisma.DonorCreateWithoutDonationsInput, Prisma.DonorUncheckedCreateWithoutDonationsInput>;
};
export type DonorUpsertWithoutDonationsInput = {
    update: Prisma.XOR<Prisma.DonorUpdateWithoutDonationsInput, Prisma.DonorUncheckedUpdateWithoutDonationsInput>;
    create: Prisma.XOR<Prisma.DonorCreateWithoutDonationsInput, Prisma.DonorUncheckedCreateWithoutDonationsInput>;
    where?: Prisma.DonorWhereInput;
};
export type DonorUpdateToOneWithWhereWithoutDonationsInput = {
    where?: Prisma.DonorWhereInput;
    data: Prisma.XOR<Prisma.DonorUpdateWithoutDonationsInput, Prisma.DonorUncheckedUpdateWithoutDonationsInput>;
};
export type DonorUpdateWithoutDonationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    bloodGroup?: Prisma.NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonorUncheckedUpdateWithoutDonationsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    donorCode?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    bloodGroup?: Prisma.NullableEnumBloodGroupFieldUpdateOperationsInput | $Enums.BloodGroup | null;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type DonorCountOutputType = {
    donations: number;
};
export type DonorCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    donations?: boolean | DonorCountOutputTypeCountDonationsArgs;
};
export type DonorCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonorCountOutputTypeSelect<ExtArgs> | null;
};
export type DonorCountOutputTypeCountDonationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DonationWhereInput;
};
export type DonorSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    donorCode?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    dateOfBirth?: boolean;
    bloodGroup?: boolean;
    phone?: boolean;
    email?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    donations?: boolean | Prisma.Donor$donationsArgs<ExtArgs>;
    _count?: boolean | Prisma.DonorCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["donor"]>;
export type DonorSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    donorCode?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    dateOfBirth?: boolean;
    bloodGroup?: boolean;
    phone?: boolean;
    email?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["donor"]>;
export type DonorSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    donorCode?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    dateOfBirth?: boolean;
    bloodGroup?: boolean;
    phone?: boolean;
    email?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["donor"]>;
export type DonorSelectScalar = {
    id?: boolean;
    donorCode?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    dateOfBirth?: boolean;
    bloodGroup?: boolean;
    phone?: boolean;
    email?: boolean;
    isActive?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type DonorOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "donorCode" | "firstName" | "lastName" | "dateOfBirth" | "bloodGroup" | "phone" | "email" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["donor"]>;
export type DonorInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    donations?: boolean | Prisma.Donor$donationsArgs<ExtArgs>;
    _count?: boolean | Prisma.DonorCountOutputTypeDefaultArgs<ExtArgs>;
};
export type DonorIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type DonorIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $DonorPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Donor";
    objects: {
        donations: Prisma.$DonationPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        donorCode: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date | null;
        bloodGroup: $Enums.BloodGroup | null;
        phone: string | null;
        email: string | null;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["donor"]>;
    composites: {};
};
export type DonorGetPayload<S extends boolean | null | undefined | DonorDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$DonorPayload, S>;
export type DonorCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<DonorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: DonorCountAggregateInputType | true;
};
export interface DonorDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Donor'];
        meta: {
            name: 'Donor';
        };
    };
    findUnique<T extends DonorFindUniqueArgs>(args: Prisma.SelectSubset<T, DonorFindUniqueArgs<ExtArgs>>): Prisma.Prisma__DonorClient<runtime.Types.Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends DonorFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, DonorFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__DonorClient<runtime.Types.Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends DonorFindFirstArgs>(args?: Prisma.SelectSubset<T, DonorFindFirstArgs<ExtArgs>>): Prisma.Prisma__DonorClient<runtime.Types.Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends DonorFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, DonorFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__DonorClient<runtime.Types.Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends DonorFindManyArgs>(args?: Prisma.SelectSubset<T, DonorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends DonorCreateArgs>(args: Prisma.SelectSubset<T, DonorCreateArgs<ExtArgs>>): Prisma.Prisma__DonorClient<runtime.Types.Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends DonorCreateManyArgs>(args?: Prisma.SelectSubset<T, DonorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends DonorCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, DonorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends DonorDeleteArgs>(args: Prisma.SelectSubset<T, DonorDeleteArgs<ExtArgs>>): Prisma.Prisma__DonorClient<runtime.Types.Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends DonorUpdateArgs>(args: Prisma.SelectSubset<T, DonorUpdateArgs<ExtArgs>>): Prisma.Prisma__DonorClient<runtime.Types.Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends DonorDeleteManyArgs>(args?: Prisma.SelectSubset<T, DonorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends DonorUpdateManyArgs>(args: Prisma.SelectSubset<T, DonorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends DonorUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, DonorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends DonorUpsertArgs>(args: Prisma.SelectSubset<T, DonorUpsertArgs<ExtArgs>>): Prisma.Prisma__DonorClient<runtime.Types.Result.GetResult<Prisma.$DonorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends DonorCountArgs>(args?: Prisma.Subset<T, DonorCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], DonorCountAggregateOutputType> : number>;
    aggregate<T extends DonorAggregateArgs>(args: Prisma.Subset<T, DonorAggregateArgs>): Prisma.PrismaPromise<GetDonorAggregateType<T>>;
    groupBy<T extends DonorGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: DonorGroupByArgs['orderBy'];
    } : {
        orderBy?: DonorGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, DonorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDonorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: DonorFieldRefs;
}
export interface Prisma__DonorClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    donations<T extends Prisma.Donor$donationsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Donor$donationsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$DonationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface DonorFieldRefs {
    readonly id: Prisma.FieldRef<"Donor", 'String'>;
    readonly donorCode: Prisma.FieldRef<"Donor", 'String'>;
    readonly firstName: Prisma.FieldRef<"Donor", 'String'>;
    readonly lastName: Prisma.FieldRef<"Donor", 'String'>;
    readonly dateOfBirth: Prisma.FieldRef<"Donor", 'DateTime'>;
    readonly bloodGroup: Prisma.FieldRef<"Donor", 'BloodGroup'>;
    readonly phone: Prisma.FieldRef<"Donor", 'String'>;
    readonly email: Prisma.FieldRef<"Donor", 'String'>;
    readonly isActive: Prisma.FieldRef<"Donor", 'Boolean'>;
    readonly createdAt: Prisma.FieldRef<"Donor", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Donor", 'DateTime'>;
}
export type DonorFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonorSelect<ExtArgs> | null;
    omit?: Prisma.DonorOmit<ExtArgs> | null;
    include?: Prisma.DonorInclude<ExtArgs> | null;
    where: Prisma.DonorWhereUniqueInput;
};
export type DonorFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonorSelect<ExtArgs> | null;
    omit?: Prisma.DonorOmit<ExtArgs> | null;
    include?: Prisma.DonorInclude<ExtArgs> | null;
    where: Prisma.DonorWhereUniqueInput;
};
export type DonorFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonorSelect<ExtArgs> | null;
    omit?: Prisma.DonorOmit<ExtArgs> | null;
    include?: Prisma.DonorInclude<ExtArgs> | null;
    where?: Prisma.DonorWhereInput;
    orderBy?: Prisma.DonorOrderByWithRelationInput | Prisma.DonorOrderByWithRelationInput[];
    cursor?: Prisma.DonorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DonorScalarFieldEnum | Prisma.DonorScalarFieldEnum[];
};
export type DonorFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonorSelect<ExtArgs> | null;
    omit?: Prisma.DonorOmit<ExtArgs> | null;
    include?: Prisma.DonorInclude<ExtArgs> | null;
    where?: Prisma.DonorWhereInput;
    orderBy?: Prisma.DonorOrderByWithRelationInput | Prisma.DonorOrderByWithRelationInput[];
    cursor?: Prisma.DonorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DonorScalarFieldEnum | Prisma.DonorScalarFieldEnum[];
};
export type DonorFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonorSelect<ExtArgs> | null;
    omit?: Prisma.DonorOmit<ExtArgs> | null;
    include?: Prisma.DonorInclude<ExtArgs> | null;
    where?: Prisma.DonorWhereInput;
    orderBy?: Prisma.DonorOrderByWithRelationInput | Prisma.DonorOrderByWithRelationInput[];
    cursor?: Prisma.DonorWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.DonorScalarFieldEnum | Prisma.DonorScalarFieldEnum[];
};
export type DonorCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonorSelect<ExtArgs> | null;
    omit?: Prisma.DonorOmit<ExtArgs> | null;
    include?: Prisma.DonorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DonorCreateInput, Prisma.DonorUncheckedCreateInput>;
};
export type DonorCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.DonorCreateManyInput | Prisma.DonorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DonorCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonorSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DonorOmit<ExtArgs> | null;
    data: Prisma.DonorCreateManyInput | Prisma.DonorCreateManyInput[];
    skipDuplicates?: boolean;
};
export type DonorUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonorSelect<ExtArgs> | null;
    omit?: Prisma.DonorOmit<ExtArgs> | null;
    include?: Prisma.DonorInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DonorUpdateInput, Prisma.DonorUncheckedUpdateInput>;
    where: Prisma.DonorWhereUniqueInput;
};
export type DonorUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.DonorUpdateManyMutationInput, Prisma.DonorUncheckedUpdateManyInput>;
    where?: Prisma.DonorWhereInput;
    limit?: number;
};
export type DonorUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonorSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.DonorOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.DonorUpdateManyMutationInput, Prisma.DonorUncheckedUpdateManyInput>;
    where?: Prisma.DonorWhereInput;
    limit?: number;
};
export type DonorUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonorSelect<ExtArgs> | null;
    omit?: Prisma.DonorOmit<ExtArgs> | null;
    include?: Prisma.DonorInclude<ExtArgs> | null;
    where: Prisma.DonorWhereUniqueInput;
    create: Prisma.XOR<Prisma.DonorCreateInput, Prisma.DonorUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.DonorUpdateInput, Prisma.DonorUncheckedUpdateInput>;
};
export type DonorDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonorSelect<ExtArgs> | null;
    omit?: Prisma.DonorOmit<ExtArgs> | null;
    include?: Prisma.DonorInclude<ExtArgs> | null;
    where: Prisma.DonorWhereUniqueInput;
};
export type DonorDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.DonorWhereInput;
    limit?: number;
};
export type Donor$donationsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type DonorDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.DonorSelect<ExtArgs> | null;
    omit?: Prisma.DonorOmit<ExtArgs> | null;
    include?: Prisma.DonorInclude<ExtArgs> | null;
};
