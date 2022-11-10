import { AnyType } from '../misc';

export type DictionaryInput<InputElement> = Array<InputElement>;

export type DictionaryInputElement<Item extends DictionaryInput<AnyType>> =
  Item extends DictionaryInput<infer ElementType> ? ElementType : never;

export type DictionaryInputBuffer<Item extends DictionaryInput<AnyType>> =
  Array<DictionaryInputElement<Item>>;

export type DictionaryState<Input extends DictionaryInput<AnyType>> = Map<
  DictionaryInputElement<Input>,
  DictionaryState<Input>
>;

export type DictionaryInputCursor<Item extends DictionaryInput<AnyType>> =
  Array<[DictionaryState<Item>, DictionaryInputBuffer<Item>]>;

export type DictionaryElementCursor<Item extends DictionaryInput<AnyType>> =
  Array<[DictionaryState<Item>, DictionaryInputElement<Item>]>;

export type DictionaryList<Item extends DictionaryInput<AnyType>> = Array<
  DictionaryInputBuffer<Item>
>;

export interface Dictionary<Item extends DictionaryInput<AnyType>> {
  [Symbol.iterator](): Iterator<Item, Item, Item | undefined>;
  size: number;
  list(): DictionaryList<Item>;
  has<Items extends DictionaryInputBuffer<Item>>(set: Items): set is Items;
  add<Items extends DictionaryInputBuffer<Item>>(set: Items): this;
  remove<Items extends DictionaryInputBuffer<Item>>(set: Items): this;
  clear(): this;
  
  indexOf<Items extends DictionaryInputBuffer<Item>>(set: Items): number;
  itemAt(index: number): DictionaryInputBuffer<Item> | undefined;
  
}
