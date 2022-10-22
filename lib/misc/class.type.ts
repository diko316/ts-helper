import { AnyArray } from './list.type';
import { AnyType } from './any.type';

export interface ClassType<Instance, Params extends AnyArray> extends Function {
  new (...params: Params): Instance;
  prototype: Instance;
}

export type AnyClass<
  Instance extends AnyType = AnyType,
  Params extends AnyArray = AnyArray
> = ClassType<Instance, Params>;

export type ClassInstance<Class extends AnyClass> = Class extends ClassType<
  infer Instance,
  AnyArray
>
  ? Instance
  : never;
