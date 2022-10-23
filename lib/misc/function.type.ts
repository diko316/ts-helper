import { AnyType } from './any.type';
import { AnyArray } from './list.type';

export type AnyFunction = (...args: AnyArray) => AnyType;
