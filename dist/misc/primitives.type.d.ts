import { AnyArray, AnyFunction, AnyObject } from './any.type';
export declare type Scalar = boolean | null | string | symbol | number | bigint;
export declare type Empty = null | undefined;
export declare type PrimitiveObject = AnyArray | AnyFunction | AnyObject;
declare type AllTypes = Scalar | Empty | PrimitiveObject;
export declare type PrimitiveScalar = Extract<AllTypes, Scalar | Empty>;
export declare type Primitive = Extract<AllTypes, PrimitiveScalar | PrimitiveObject>;
export {};
