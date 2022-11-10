import { AnyArray } from './any.type';

export type ArrayFirstItem<List extends AnyArray> = List extends [
  infer First,
  ...AnyArray
]
  ? First
  : List extends [infer First]
  ? First
  : List extends []
  ? undefined
  : never;

export type ArrayLastItem<List extends AnyArray> = List extends [
  ...AnyArray,
  infer Last
]
  ? Last
  : List extends [infer Last]
  ? Last
  : List extends []
  ? undefined
  : never;
