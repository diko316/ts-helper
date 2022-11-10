import { is } from '../validation';
import { AnyType } from '../misc';
import { ObjectToStringTag } from '../symbol';

import {
  DictionaryElementCursor,
  DictionaryInput,
  DictionaryInputElement,
  DictionaryList,
  DictionaryState,
  Dictionary as DictionaryModel,
  DictionaryInputBuffer,
} from './dictionary.type';

import { DictionaryIterator } from './dictionary-iterator.class';

@ObjectToStringTag('Dictionary')
export class Dictionary<Item extends DictionaryInput<AnyType>>
  implements DictionaryModel<Item>
{
  protected readonly entryState: DictionaryState<DictionaryInputElement<Item>> =
    new Map();

  protected readonly endStates: Map<
    DictionaryState<DictionaryInputElement<Item>>,
    DictionaryInputBuffer<Item>
  > = new Map();

  get size(): number {
    return this.endStates.size;
  }

  [Symbol.iterator](): Iterator<Item, Item, Item | undefined> {
    return new DictionaryIterator(this);
  }

  list(): DictionaryList<Item> {
    const ends = this.endStates;

    const found: DictionaryList<Item> = [];
    let count = 0;

    const iterator = ends.keys();

    for (
      let { done, value } = iterator.next();
      !done;
      { done, value } = iterator.next()
    ) {
      found[count++] = ends.get(value)?.slice(0) || [];
    }

    return found;
  }

  itemAt(index: number): DictionaryInputBuffer<Item> | undefined {
    if (index < 0) {
      return;
    }

    const ends = this.endStates;

    if (index >= ends.size) {
      return;
    }

    const iterator = ends.keys();

    for (
      let c = 0, result = iterator.next();
      !result.done;
      result = iterator.next()
    ) {
      // found!
      if (c++ === index) {
        return ends.get(result.value)?.slice(0) || [];
      }
    }

    return;
  }

  indexOf<Items extends Item>(set: Items): number {
    if (!is<Items>(Array, set)) {
      return -1;
    }

    let length = set.length;

    if (!length) {
      return -1;
    }

    let state = this.entryState;

    // find until end of list
    for (let c = 0; length--; c++) {
      const value = set[c];

      if (!state.has(value)) {
        return -1;
      }

      state = state.get(value) as DictionaryState<Item>;
    }

    // find index via ends Order
    const ends = this.endStates;
    const iterator = ends.keys();

    for (
      let index = 0, result = iterator.next();
      !result.done;
      result = iterator.next()
    ) {
      // found!
      if (result.value === state) {
        return index;
      }

      index++;
    }

    return -1;
  }

  has<Items extends DictionaryInputBuffer<Item>>(set: Items): set is Items {
    if (!is<Items>(Array, set)) {
      return false;
    }

    let length = set.length;

    if (!length) {
      return false;
    }

    let state = this.entryState;

    // find until end of list
    for (let c = 0; length--; c++) {
      const value = set[c];

      if (!state.has(value)) {
        return false;
      }

      state = state.get(value) as DictionaryState<Item>;
    }

    return this.endStates.has(state);
  }

  add<Items extends DictionaryInputBuffer<Item>>(set: Items): this {
    if (!is(Array, set)) {
      throw new TypeError();
    }

    let length = set.length;

    if (!length) {
      return this;
    }

    let state = this.entryState;

    for (let c = 0; length--; c++) {
      const value = set[c];

      if (state.has(value)) {
        state = state.get(value) as DictionaryState<Item>;
        continue;
      }

      state.set(value, (state = new Map()));
    }

    // register end state
    const ends = this.endStates;
    if (!ends.has(state)) {
      ends.set(state, [...set]);
    }

    return this;
  }

  remove<Items extends DictionaryInputBuffer<Item>>(set: Items): this {
    if (!is(Array, set)) {
      return this;
    }

    let length = set.length;

    if (!length) {
      return this;
    }

    const buffer: DictionaryElementCursor<Item> = [];
    let value: DictionaryInputElement<Item>;
    let bufferCount = 0;
    let failed = false;
    let state = this.entryState;

    // find until end of list
    for (let c = 0; length--; c++) {
      value = set[c];

      // not found
      if (!state.has(value)) {
        failed = true;
        break;
      }

      buffer[bufferCount++] = [state, value];
      state = state.get(value) as DictionaryState<Item>;
    }

    const ends = this.endStates;

    // end state not found!
    if (!ends.has(state) || failed) {
      buffer.splice(0, bufferCount);
      return this;
    }

    // unset buffer
    const endStateBuffer = ends.get(state);

    endStateBuffer?.splice(0, endStateBuffer.length);
    ends.delete(state);

    for (; bufferCount--; ) {
      [state, value] = buffer[bufferCount];
      const target = state.get(value) as DictionaryState<Item>;

      if (target.size || ends.has(target)) {
        break;
      }

      // delete!
      state.delete(value);
    }

    buffer.splice(0, bufferCount);

    return this;
  }

  clear(): this {
    const buffer: Array<DictionaryState<Item>> = [this.entryState];
    let bufferCount = 1;

    for (; bufferCount; ) {
      const node = buffer[bufferCount - 1];

      if (!node.size) {
        buffer.length = --bufferCount;
        continue;
      }

      const nodeIterator = node.keys();

      for (
        let { done, value: key } = nodeIterator.next();
        !done;
        { done, value: key } = nodeIterator.next()
      ) {
        const value = node.get(key);

        if (value?.size) {
          buffer[bufferCount++] = value;
          continue;
        }
        node.delete(key);
      }
    }

    const ends = this.endStates;
    const endsIterator = ends.keys();

    for (
      let { done, value: state } = endsIterator.next();
      !done;
      { done, value: state } = endsIterator.next()
    ) {
      const item = ends.get(state);

      if (item) {
        item.splice(0, item.length);
      }

      ends.delete(state);
    }

    return this;
  }

  toJSON(): string {
    return `Dictionary ${JSON.stringify(this.list())}`;
  }
}
