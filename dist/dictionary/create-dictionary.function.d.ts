import { AnyType } from '../misc';
import { Dictionary as DictionaryConstructor } from './dictionary.class';
import { DictionaryInput } from './dictionary.type';
export declare function createDictionary<Item extends DictionaryInput<AnyType>>(items?: Array<Item>): DictionaryConstructor<Item>;
