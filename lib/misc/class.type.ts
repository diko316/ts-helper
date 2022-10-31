import { AnyArray, AnyFunction, AnyObject, AnyType } from './any.type';
import { PrimitiveScalar } from './primitives.type';

export interface ClassType<Instance extends AnyObject, Params extends AnyArray>
  extends Function {
  new (...params: Params): Instance;
  prototype: Instance;
}

export type AnyClass<
  Instance extends AnyType = AnyType,
  Params extends AnyArray = AnyArray
> = Instance extends PrimitiveScalar
  ? never
  : Instance extends AnyFunction
  ? never
  : Instance extends AnyObject
  ? ClassType<Instance, Params>
  : never;

export type ClassInstance<Class extends AnyClass> = Class extends ClassType<
  infer Instance,
  AnyArray
>
  ? Instance extends PrimitiveScalar
    ? never
    : Instance
  : never;
