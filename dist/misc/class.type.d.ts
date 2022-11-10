import { AnyArray, AnyFunction, AnyObject, AnyType } from './any.type';
import { PrimitiveScalar } from './primitives.type';
export interface ClassType<Instance extends AnyObject, Params extends AnyArray> extends Function {
    new (...params: Params): Instance;
    prototype: Instance;
}
export declare type ScalarConstructor<Type> = Type extends string ? StringConstructor : Type extends symbol ? SymbolConstructor : Type extends boolean ? BooleanConstructor : Type extends number ? NumberConstructor : Type extends bigint ? BigIntConstructor : never;
export declare type AnyClass<Instance extends AnyType = AnyType, Params extends AnyArray = AnyArray> = Instance extends PrimitiveScalar ? never : Instance extends AnyFunction ? never : Instance extends AnyObject ? ClassType<Instance, Params> : never;
export declare type ClassInstance<Class extends AnyClass> = Class extends ClassType<infer Instance, AnyArray> ? Instance extends PrimitiveScalar ? never : Instance : never;
