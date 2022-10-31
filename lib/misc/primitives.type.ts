import { AnyArray, AnyFunction, AnyObject } from './any.type';

export type Scalar = boolean | null | string | symbol | number | bigint;

export type Empty = null | undefined;

export type PrimitiveObject = AnyArray | AnyFunction | AnyObject;

type AllTypes = Scalar | Empty | PrimitiveObject;

export type PrimitiveScalar = Extract<AllTypes, Scalar | Empty>;

export type Primitive = Extract<AllTypes, PrimitiveScalar | PrimitiveObject>;
