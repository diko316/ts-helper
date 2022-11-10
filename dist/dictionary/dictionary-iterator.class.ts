import { AnyType } from '../misc';
import { ObjectToStringTag } from '../symbol';
import { WeakIterable } from '../weak-iterable/weak-iterable.class';
import { DICTIONARY_ITERATOR_STATE_KEY } from './dictionary-iterator.constant';
import { Dictionary, DictionaryInput } from './dictionary.type';

@ObjectToStringTag('DictionaryIterator')
export class DictionaryIterator<
  Item extends DictionaryInput<AnyType>
> extends WeakIterable<Dictionary<Item>, Item> {

  [DICTIONARY_ITERATOR_STATE_KEY] = 0;

  next(): IteratorResult<Item> {
    const instance = this.instance;
    const size = instance.size;
    const index = this[DICTIONARY_ITERATOR_STATE_KEY];

    this[DICTIONARY_ITERATOR_STATE_KEY] = Math.min(index + 1, size);

    if (index < size) {
      return {
        done: false,
        value: instance.itemAt(index) as Item,
      };
    }

    return {
      done: true,
      value: instance.itemAt(index),
    };
  }
}


