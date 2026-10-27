import * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../models.js";
import { type PrismaClient } from "./class.js";
export type * from '../models.js';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: runtime.DbNullClass;
export declare const JsonNull: runtime.JsonNullClass;
export declare const AnyNull: runtime.AnyNullClass;
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> = [
    PrismaClientOptions
] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? ((Without<T, U> & U) | (Without<U, T> & T)) & object : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
export declare const ModelName: {
    readonly Facility: "Facility";
    readonly User: "User";
    readonly Donor: "Donor";
    readonly Donation: "Donation";
    readonly BloodUnit: "BloodUnit";
    readonly LabTest: "LabTest";
    readonly HospitalRequest: "HospitalRequest";
    readonly BloodReservation: "BloodReservation";
    readonly BloodTransfer: "BloodTransfer";
    readonly BloodUnitEvent: "BloodUnitEvent";
    readonly DemandForecast: "DemandForecast";
    readonly RedistributionRecommendation: "RedistributionRecommendation";
    readonly AuditLog: "AuditLog";
    readonly Notification: "Notification";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "facility" | "user" | "donor" | "donation" | "bloodUnit" | "labTest" | "hospitalRequest" | "bloodReservation" | "bloodTransfer" | "bloodUnitEvent" | "demandForecast" | "redistributionRecommendation" | "auditLog" | "notification";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        Facility: {
            payload: Prisma.$FacilityPayload<ExtArgs>;
            fields: Prisma.FacilityFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FacilityFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacilityPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FacilityFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacilityPayload>;
                };
                findFirst: {
                    args: Prisma.FacilityFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacilityPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FacilityFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacilityPayload>;
                };
                findMany: {
                    args: Prisma.FacilityFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacilityPayload>[];
                };
                create: {
                    args: Prisma.FacilityCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacilityPayload>;
                };
                createMany: {
                    args: Prisma.FacilityCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FacilityCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacilityPayload>[];
                };
                delete: {
                    args: Prisma.FacilityDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacilityPayload>;
                };
                update: {
                    args: Prisma.FacilityUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacilityPayload>;
                };
                deleteMany: {
                    args: Prisma.FacilityDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FacilityUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FacilityUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacilityPayload>[];
                };
                upsert: {
                    args: Prisma.FacilityUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FacilityPayload>;
                };
                aggregate: {
                    args: Prisma.FacilityAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFacility>;
                };
                groupBy: {
                    args: Prisma.FacilityGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacilityGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FacilityCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FacilityCountAggregateOutputType> | number;
                };
            };
        };
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Donor: {
            payload: Prisma.$DonorPayload<ExtArgs>;
            fields: Prisma.DonorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DonorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DonorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonorPayload>;
                };
                findFirst: {
                    args: Prisma.DonorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DonorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonorPayload>;
                };
                findMany: {
                    args: Prisma.DonorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonorPayload>[];
                };
                create: {
                    args: Prisma.DonorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonorPayload>;
                };
                createMany: {
                    args: Prisma.DonorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DonorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonorPayload>[];
                };
                delete: {
                    args: Prisma.DonorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonorPayload>;
                };
                update: {
                    args: Prisma.DonorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonorPayload>;
                };
                deleteMany: {
                    args: Prisma.DonorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DonorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DonorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonorPayload>[];
                };
                upsert: {
                    args: Prisma.DonorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonorPayload>;
                };
                aggregate: {
                    args: Prisma.DonorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDonor>;
                };
                groupBy: {
                    args: Prisma.DonorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DonorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DonorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DonorCountAggregateOutputType> | number;
                };
            };
        };
        Donation: {
            payload: Prisma.$DonationPayload<ExtArgs>;
            fields: Prisma.DonationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DonationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DonationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonationPayload>;
                };
                findFirst: {
                    args: Prisma.DonationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DonationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonationPayload>;
                };
                findMany: {
                    args: Prisma.DonationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonationPayload>[];
                };
                create: {
                    args: Prisma.DonationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonationPayload>;
                };
                createMany: {
                    args: Prisma.DonationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DonationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonationPayload>[];
                };
                delete: {
                    args: Prisma.DonationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonationPayload>;
                };
                update: {
                    args: Prisma.DonationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonationPayload>;
                };
                deleteMany: {
                    args: Prisma.DonationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DonationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DonationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonationPayload>[];
                };
                upsert: {
                    args: Prisma.DonationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DonationPayload>;
                };
                aggregate: {
                    args: Prisma.DonationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDonation>;
                };
                groupBy: {
                    args: Prisma.DonationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DonationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DonationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DonationCountAggregateOutputType> | number;
                };
            };
        };
        BloodUnit: {
            payload: Prisma.$BloodUnitPayload<ExtArgs>;
            fields: Prisma.BloodUnitFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BloodUnitFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BloodUnitFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitPayload>;
                };
                findFirst: {
                    args: Prisma.BloodUnitFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BloodUnitFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitPayload>;
                };
                findMany: {
                    args: Prisma.BloodUnitFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitPayload>[];
                };
                create: {
                    args: Prisma.BloodUnitCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitPayload>;
                };
                createMany: {
                    args: Prisma.BloodUnitCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BloodUnitCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitPayload>[];
                };
                delete: {
                    args: Prisma.BloodUnitDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitPayload>;
                };
                update: {
                    args: Prisma.BloodUnitUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitPayload>;
                };
                deleteMany: {
                    args: Prisma.BloodUnitDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BloodUnitUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BloodUnitUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitPayload>[];
                };
                upsert: {
                    args: Prisma.BloodUnitUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitPayload>;
                };
                aggregate: {
                    args: Prisma.BloodUnitAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBloodUnit>;
                };
                groupBy: {
                    args: Prisma.BloodUnitGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BloodUnitGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BloodUnitCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BloodUnitCountAggregateOutputType> | number;
                };
            };
        };
        LabTest: {
            payload: Prisma.$LabTestPayload<ExtArgs>;
            fields: Prisma.LabTestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.LabTestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabTestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.LabTestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabTestPayload>;
                };
                findFirst: {
                    args: Prisma.LabTestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabTestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.LabTestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabTestPayload>;
                };
                findMany: {
                    args: Prisma.LabTestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabTestPayload>[];
                };
                create: {
                    args: Prisma.LabTestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabTestPayload>;
                };
                createMany: {
                    args: Prisma.LabTestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.LabTestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabTestPayload>[];
                };
                delete: {
                    args: Prisma.LabTestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabTestPayload>;
                };
                update: {
                    args: Prisma.LabTestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabTestPayload>;
                };
                deleteMany: {
                    args: Prisma.LabTestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.LabTestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.LabTestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabTestPayload>[];
                };
                upsert: {
                    args: Prisma.LabTestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$LabTestPayload>;
                };
                aggregate: {
                    args: Prisma.LabTestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateLabTest>;
                };
                groupBy: {
                    args: Prisma.LabTestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LabTestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.LabTestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.LabTestCountAggregateOutputType> | number;
                };
            };
        };
        HospitalRequest: {
            payload: Prisma.$HospitalRequestPayload<ExtArgs>;
            fields: Prisma.HospitalRequestFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.HospitalRequestFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalRequestPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.HospitalRequestFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalRequestPayload>;
                };
                findFirst: {
                    args: Prisma.HospitalRequestFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalRequestPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.HospitalRequestFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalRequestPayload>;
                };
                findMany: {
                    args: Prisma.HospitalRequestFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalRequestPayload>[];
                };
                create: {
                    args: Prisma.HospitalRequestCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalRequestPayload>;
                };
                createMany: {
                    args: Prisma.HospitalRequestCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.HospitalRequestCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalRequestPayload>[];
                };
                delete: {
                    args: Prisma.HospitalRequestDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalRequestPayload>;
                };
                update: {
                    args: Prisma.HospitalRequestUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalRequestPayload>;
                };
                deleteMany: {
                    args: Prisma.HospitalRequestDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.HospitalRequestUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.HospitalRequestUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalRequestPayload>[];
                };
                upsert: {
                    args: Prisma.HospitalRequestUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$HospitalRequestPayload>;
                };
                aggregate: {
                    args: Prisma.HospitalRequestAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateHospitalRequest>;
                };
                groupBy: {
                    args: Prisma.HospitalRequestGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HospitalRequestGroupByOutputType>[];
                };
                count: {
                    args: Prisma.HospitalRequestCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.HospitalRequestCountAggregateOutputType> | number;
                };
            };
        };
        BloodReservation: {
            payload: Prisma.$BloodReservationPayload<ExtArgs>;
            fields: Prisma.BloodReservationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BloodReservationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodReservationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BloodReservationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodReservationPayload>;
                };
                findFirst: {
                    args: Prisma.BloodReservationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodReservationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BloodReservationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodReservationPayload>;
                };
                findMany: {
                    args: Prisma.BloodReservationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodReservationPayload>[];
                };
                create: {
                    args: Prisma.BloodReservationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodReservationPayload>;
                };
                createMany: {
                    args: Prisma.BloodReservationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BloodReservationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodReservationPayload>[];
                };
                delete: {
                    args: Prisma.BloodReservationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodReservationPayload>;
                };
                update: {
                    args: Prisma.BloodReservationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodReservationPayload>;
                };
                deleteMany: {
                    args: Prisma.BloodReservationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BloodReservationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BloodReservationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodReservationPayload>[];
                };
                upsert: {
                    args: Prisma.BloodReservationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodReservationPayload>;
                };
                aggregate: {
                    args: Prisma.BloodReservationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBloodReservation>;
                };
                groupBy: {
                    args: Prisma.BloodReservationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BloodReservationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BloodReservationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BloodReservationCountAggregateOutputType> | number;
                };
            };
        };
        BloodTransfer: {
            payload: Prisma.$BloodTransferPayload<ExtArgs>;
            fields: Prisma.BloodTransferFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BloodTransferFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodTransferPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BloodTransferFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodTransferPayload>;
                };
                findFirst: {
                    args: Prisma.BloodTransferFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodTransferPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BloodTransferFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodTransferPayload>;
                };
                findMany: {
                    args: Prisma.BloodTransferFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodTransferPayload>[];
                };
                create: {
                    args: Prisma.BloodTransferCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodTransferPayload>;
                };
                createMany: {
                    args: Prisma.BloodTransferCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BloodTransferCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodTransferPayload>[];
                };
                delete: {
                    args: Prisma.BloodTransferDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodTransferPayload>;
                };
                update: {
                    args: Prisma.BloodTransferUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodTransferPayload>;
                };
                deleteMany: {
                    args: Prisma.BloodTransferDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BloodTransferUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BloodTransferUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodTransferPayload>[];
                };
                upsert: {
                    args: Prisma.BloodTransferUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodTransferPayload>;
                };
                aggregate: {
                    args: Prisma.BloodTransferAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBloodTransfer>;
                };
                groupBy: {
                    args: Prisma.BloodTransferGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BloodTransferGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BloodTransferCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BloodTransferCountAggregateOutputType> | number;
                };
            };
        };
        BloodUnitEvent: {
            payload: Prisma.$BloodUnitEventPayload<ExtArgs>;
            fields: Prisma.BloodUnitEventFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BloodUnitEventFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitEventPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BloodUnitEventFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitEventPayload>;
                };
                findFirst: {
                    args: Prisma.BloodUnitEventFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitEventPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BloodUnitEventFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitEventPayload>;
                };
                findMany: {
                    args: Prisma.BloodUnitEventFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitEventPayload>[];
                };
                create: {
                    args: Prisma.BloodUnitEventCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitEventPayload>;
                };
                createMany: {
                    args: Prisma.BloodUnitEventCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BloodUnitEventCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitEventPayload>[];
                };
                delete: {
                    args: Prisma.BloodUnitEventDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitEventPayload>;
                };
                update: {
                    args: Prisma.BloodUnitEventUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitEventPayload>;
                };
                deleteMany: {
                    args: Prisma.BloodUnitEventDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BloodUnitEventUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BloodUnitEventUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitEventPayload>[];
                };
                upsert: {
                    args: Prisma.BloodUnitEventUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BloodUnitEventPayload>;
                };
                aggregate: {
                    args: Prisma.BloodUnitEventAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBloodUnitEvent>;
                };
                groupBy: {
                    args: Prisma.BloodUnitEventGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BloodUnitEventGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BloodUnitEventCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BloodUnitEventCountAggregateOutputType> | number;
                };
            };
        };
        DemandForecast: {
            payload: Prisma.$DemandForecastPayload<ExtArgs>;
            fields: Prisma.DemandForecastFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.DemandForecastFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandForecastPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.DemandForecastFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandForecastPayload>;
                };
                findFirst: {
                    args: Prisma.DemandForecastFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandForecastPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.DemandForecastFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandForecastPayload>;
                };
                findMany: {
                    args: Prisma.DemandForecastFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandForecastPayload>[];
                };
                create: {
                    args: Prisma.DemandForecastCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandForecastPayload>;
                };
                createMany: {
                    args: Prisma.DemandForecastCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.DemandForecastCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandForecastPayload>[];
                };
                delete: {
                    args: Prisma.DemandForecastDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandForecastPayload>;
                };
                update: {
                    args: Prisma.DemandForecastUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandForecastPayload>;
                };
                deleteMany: {
                    args: Prisma.DemandForecastDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.DemandForecastUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.DemandForecastUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandForecastPayload>[];
                };
                upsert: {
                    args: Prisma.DemandForecastUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$DemandForecastPayload>;
                };
                aggregate: {
                    args: Prisma.DemandForecastAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateDemandForecast>;
                };
                groupBy: {
                    args: Prisma.DemandForecastGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DemandForecastGroupByOutputType>[];
                };
                count: {
                    args: Prisma.DemandForecastCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.DemandForecastCountAggregateOutputType> | number;
                };
            };
        };
        RedistributionRecommendation: {
            payload: Prisma.$RedistributionRecommendationPayload<ExtArgs>;
            fields: Prisma.RedistributionRecommendationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.RedistributionRecommendationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RedistributionRecommendationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.RedistributionRecommendationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RedistributionRecommendationPayload>;
                };
                findFirst: {
                    args: Prisma.RedistributionRecommendationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RedistributionRecommendationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.RedistributionRecommendationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RedistributionRecommendationPayload>;
                };
                findMany: {
                    args: Prisma.RedistributionRecommendationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RedistributionRecommendationPayload>[];
                };
                create: {
                    args: Prisma.RedistributionRecommendationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RedistributionRecommendationPayload>;
                };
                createMany: {
                    args: Prisma.RedistributionRecommendationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.RedistributionRecommendationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RedistributionRecommendationPayload>[];
                };
                delete: {
                    args: Prisma.RedistributionRecommendationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RedistributionRecommendationPayload>;
                };
                update: {
                    args: Prisma.RedistributionRecommendationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RedistributionRecommendationPayload>;
                };
                deleteMany: {
                    args: Prisma.RedistributionRecommendationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.RedistributionRecommendationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.RedistributionRecommendationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RedistributionRecommendationPayload>[];
                };
                upsert: {
                    args: Prisma.RedistributionRecommendationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$RedistributionRecommendationPayload>;
                };
                aggregate: {
                    args: Prisma.RedistributionRecommendationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateRedistributionRecommendation>;
                };
                groupBy: {
                    args: Prisma.RedistributionRecommendationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RedistributionRecommendationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.RedistributionRecommendationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.RedistributionRecommendationCountAggregateOutputType> | number;
                };
            };
        };
        AuditLog: {
            payload: Prisma.$AuditLogPayload<ExtArgs>;
            fields: Prisma.AuditLogFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuditLogFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuditLogFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findFirst: {
                    args: Prisma.AuditLogFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuditLogFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                findMany: {
                    args: Prisma.AuditLogFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                create: {
                    args: Prisma.AuditLogCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                createMany: {
                    args: Prisma.AuditLogCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuditLogCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                delete: {
                    args: Prisma.AuditLogDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                update: {
                    args: Prisma.AuditLogUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                deleteMany: {
                    args: Prisma.AuditLogDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuditLogUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuditLogUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>[];
                };
                upsert: {
                    args: Prisma.AuditLogUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuditLogPayload>;
                };
                aggregate: {
                    args: Prisma.AuditLogAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuditLog>;
                };
                groupBy: {
                    args: Prisma.AuditLogGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuditLogCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuditLogCountAggregateOutputType> | number;
                };
            };
        };
        Notification: {
            payload: Prisma.$NotificationPayload<ExtArgs>;
            fields: Prisma.NotificationFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.NotificationFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findFirst: {
                    args: Prisma.NotificationFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                findMany: {
                    args: Prisma.NotificationFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                create: {
                    args: Prisma.NotificationCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                createMany: {
                    args: Prisma.NotificationCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                delete: {
                    args: Prisma.NotificationDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                update: {
                    args: Prisma.NotificationUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                deleteMany: {
                    args: Prisma.NotificationDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.NotificationUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>[];
                };
                upsert: {
                    args: Prisma.NotificationUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$NotificationPayload>;
                };
                aggregate: {
                    args: Prisma.NotificationAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateNotification>;
                };
                groupBy: {
                    args: Prisma.NotificationGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationGroupByOutputType>[];
                };
                count: {
                    args: Prisma.NotificationCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.NotificationCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const FacilityScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly code: "code";
    readonly type: "type";
    readonly country: "country";
    readonly region: "region";
    readonly district: "district";
    readonly address: "address";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FacilityScalarFieldEnum = (typeof FacilityScalarFieldEnum)[keyof typeof FacilityScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly role: "role";
    readonly isActive: "isActive";
    readonly facilityId: "facilityId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const DonorScalarFieldEnum: {
    readonly id: "id";
    readonly donorCode: "donorCode";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly dateOfBirth: "dateOfBirth";
    readonly bloodGroup: "bloodGroup";
    readonly phone: "phone";
    readonly email: "email";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DonorScalarFieldEnum = (typeof DonorScalarFieldEnum)[keyof typeof DonorScalarFieldEnum];
export declare const DonationScalarFieldEnum: {
    readonly id: "id";
    readonly donationCode: "donationCode";
    readonly donorId: "donorId";
    readonly facilityId: "facilityId";
    readonly donatedAt: "donatedAt";
    readonly status: "status";
    readonly volumeMl: "volumeMl";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type DonationScalarFieldEnum = (typeof DonationScalarFieldEnum)[keyof typeof DonationScalarFieldEnum];
export declare const BloodUnitScalarFieldEnum: {
    readonly id: "id";
    readonly unitCode: "unitCode";
    readonly donationId: "donationId";
    readonly facilityId: "facilityId";
    readonly bloodGroup: "bloodGroup";
    readonly component: "component";
    readonly status: "status";
    readonly volumeMl: "volumeMl";
    readonly collectedAt: "collectedAt";
    readonly expiresAt: "expiresAt";
    readonly releasedAt: "releasedAt";
    readonly issuedAt: "issuedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BloodUnitScalarFieldEnum = (typeof BloodUnitScalarFieldEnum)[keyof typeof BloodUnitScalarFieldEnum];
export declare const LabTestScalarFieldEnum: {
    readonly id: "id";
    readonly bloodUnitId: "bloodUnitId";
    readonly testName: "testName";
    readonly result: "result";
    readonly testedAt: "testedAt";
    readonly technicianId: "technicianId";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type LabTestScalarFieldEnum = (typeof LabTestScalarFieldEnum)[keyof typeof LabTestScalarFieldEnum];
export declare const HospitalRequestScalarFieldEnum: {
    readonly id: "id";
    readonly requestCode: "requestCode";
    readonly facilityId: "facilityId";
    readonly bloodGroup: "bloodGroup";
    readonly component: "component";
    readonly quantity: "quantity";
    readonly priority: "priority";
    readonly status: "status";
    readonly requiredBy: "requiredBy";
    readonly notes: "notes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type HospitalRequestScalarFieldEnum = (typeof HospitalRequestScalarFieldEnum)[keyof typeof HospitalRequestScalarFieldEnum];
export declare const BloodReservationScalarFieldEnum: {
    readonly id: "id";
    readonly requestId: "requestId";
    readonly bloodUnitId: "bloodUnitId";
    readonly status: "status";
    readonly reservedAt: "reservedAt";
    readonly expiresAt: "expiresAt";
};
export type BloodReservationScalarFieldEnum = (typeof BloodReservationScalarFieldEnum)[keyof typeof BloodReservationScalarFieldEnum];
export declare const BloodTransferScalarFieldEnum: {
    readonly id: "id";
    readonly transferCode: "transferCode";
    readonly bloodUnitId: "bloodUnitId";
    readonly sourceFacilityId: "sourceFacilityId";
    readonly destinationFacilityId: "destinationFacilityId";
    readonly status: "status";
    readonly requestedAt: "requestedAt";
    readonly approvedAt: "approvedAt";
    readonly dispatchedAt: "dispatchedAt";
    readonly receivedAt: "receivedAt";
    readonly notes: "notes";
};
export type BloodTransferScalarFieldEnum = (typeof BloodTransferScalarFieldEnum)[keyof typeof BloodTransferScalarFieldEnum];
export declare const BloodUnitEventScalarFieldEnum: {
    readonly id: "id";
    readonly bloodUnitId: "bloodUnitId";
    readonly eventType: "eventType";
    readonly description: "description";
    readonly actorId: "actorId";
    readonly facilityId: "facilityId";
    readonly metadata: "metadata";
    readonly occurredAt: "occurredAt";
};
export type BloodUnitEventScalarFieldEnum = (typeof BloodUnitEventScalarFieldEnum)[keyof typeof BloodUnitEventScalarFieldEnum];
export declare const DemandForecastScalarFieldEnum: {
    readonly id: "id";
    readonly facilityId: "facilityId";
    readonly bloodGroup: "bloodGroup";
    readonly component: "component";
    readonly forecastDate: "forecastDate";
    readonly predictedUnits: "predictedUnits";
    readonly modelVersion: "modelVersion";
    readonly confidenceScore: "confidenceScore";
    readonly createdAt: "createdAt";
};
export type DemandForecastScalarFieldEnum = (typeof DemandForecastScalarFieldEnum)[keyof typeof DemandForecastScalarFieldEnum];
export declare const RedistributionRecommendationScalarFieldEnum: {
    readonly id: "id";
    readonly sourceFacilityId: "sourceFacilityId";
    readonly destinationFacilityId: "destinationFacilityId";
    readonly bloodGroup: "bloodGroup";
    readonly component: "component";
    readonly suggestedUnits: "suggestedUnits";
    readonly reason: "reason";
    readonly confidenceScore: "confidenceScore";
    readonly status: "status";
    readonly createdAt: "createdAt";
    readonly reviewedAt: "reviewedAt";
    readonly reviewedBy: "reviewedBy";
};
export type RedistributionRecommendationScalarFieldEnum = (typeof RedistributionRecommendationScalarFieldEnum)[keyof typeof RedistributionRecommendationScalarFieldEnum];
export declare const AuditLogScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly action: "action";
    readonly entity: "entity";
    readonly entityId: "entityId";
    readonly oldValue: "oldValue";
    readonly newValue: "newValue";
    readonly ipAddress: "ipAddress";
    readonly createdAt: "createdAt";
};
export type AuditLogScalarFieldEnum = (typeof AuditLogScalarFieldEnum)[keyof typeof AuditLogScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly title: "title";
    readonly message: "message";
    readonly category: "category";
    readonly isRead: "isRead";
    readonly readAt: "readAt";
    readonly createdAt: "createdAt";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: runtime.DbNullClass;
    readonly JsonNull: runtime.JsonNullClass;
    readonly AnyNull: runtime.AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumFacilityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FacilityType'>;
export type ListEnumFacilityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'FacilityType[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>;
export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>;
export type EnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup'>;
export type ListEnumBloodGroupFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodGroup[]'>;
export type EnumDonationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DonationStatus'>;
export type ListEnumDonationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DonationStatus[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type EnumComponentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComponentType'>;
export type ListEnumComponentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ComponentType[]'>;
export type EnumBloodUnitStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodUnitStatus'>;
export type ListEnumBloodUnitStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BloodUnitStatus[]'>;
export type EnumTestResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestResult'>;
export type ListEnumTestResultFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TestResult[]'>;
export type EnumRequestPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestPriority'>;
export type ListEnumRequestPriorityFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestPriority[]'>;
export type EnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus'>;
export type ListEnumRequestStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestStatus[]'>;
export type EnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus'>;
export type ListEnumReservationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ReservationStatus[]'>;
export type EnumTransferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransferStatus'>;
export type ListEnumTransferStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TransferStatus[]'>;
export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>;
export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>;
export type EnumRecommendationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecommendationStatus'>;
export type ListEnumRecommendationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RecommendationStatus[]'>;
export type BatchPayload = {
    count: number;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientBaseOptions {
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    omit?: GlobalOmitConfig;
    comments?: runtime.SqlCommenterPlugin[];
    queryPlanCacheMaxSize?: number;
}
export interface PrismaClientOptionsWithAccelerateUrl extends PrismaClientBaseOptions {
    accelerateUrl: string;
    adapter?: never;
}
export interface PrismaClientOptionsWithAdapter extends PrismaClientBaseOptions {
    adapter: runtime.SqlDriverAdapterFactory;
    accelerateUrl?: never;
}
export type PrismaClientOptions = PrismaClientOptionsWithAccelerateUrl | PrismaClientOptionsWithAdapter;
export type GlobalOmitConfig = {
    facility?: Prisma.FacilityOmit;
    user?: Prisma.UserOmit;
    donor?: Prisma.DonorOmit;
    donation?: Prisma.DonationOmit;
    bloodUnit?: Prisma.BloodUnitOmit;
    labTest?: Prisma.LabTestOmit;
    hospitalRequest?: Prisma.HospitalRequestOmit;
    bloodReservation?: Prisma.BloodReservationOmit;
    bloodTransfer?: Prisma.BloodTransferOmit;
    bloodUnitEvent?: Prisma.BloodUnitEventOmit;
    demandForecast?: Prisma.DemandForecastOmit;
    redistributionRecommendation?: Prisma.RedistributionRecommendationOmit;
    auditLog?: Prisma.AuditLogOmit;
    notification?: Prisma.NotificationOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
