import { AnyType } from '../misc';
import { WeakIterable } from '../weak-iterable/weak-iterable.class';
import { DICTIONARY_ITERATOR_STATE_KEY } from './dictionary-iterator.constant';
import { Dictionary, DictionaryInput } from './dictionary.type';
export declare class DictionaryIterator<Item extends DictionaryInput<AnyType>> extends WeakIterable<Dictionary<Item>, Item> {
    [DICTIONARY_ITERATOR_STATE_KEY]: number;
    next(): IteratorResult<Item>;
}
