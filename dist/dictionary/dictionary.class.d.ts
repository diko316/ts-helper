import { AnyType } from '../misc';
import { DictionaryInput, DictionaryInputElement, DictionaryList, DictionaryState, Dictionary as DictionaryModel, DictionaryInputBuffer } from './dictionary.type';
export declare class Dictionary<Item extends DictionaryInput<AnyType>> implements DictionaryModel<Item> {
    protected readonly entryState: DictionaryState<DictionaryInputElement<Item>>;
    protected readonly endStates: Map<DictionaryState<DictionaryInputElement<Item>>, DictionaryInputBuffer<Item>>;
    get size(): number;
    [Symbol.iterator](): Iterator<Item, Item, Item | undefined>;
    list(): DictionaryList<Item>;
    has<Items extends DictionaryInputBuffer<Item>>(set: Items): set is Items;
    add<Items extends DictionaryInputBuffer<Item>>(set: Items): this;
    remove<Items extends DictionaryInputBuffer<Item>>(set: Items): this;
    clear(): this;
    itemAt(index: number): DictionaryInputBuffer<Item> | undefined;
    indexOf<Items extends DictionaryInputBuffer<Item>>(set: Items): number;
    toString(): string;
    toJSON(): string;
}
