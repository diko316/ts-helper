import { is } from '../validation';
import { AnyType } from '../misc';
import { Dictionary as DictionaryConstructor } from './dictionary.class';
import { DictionaryInput } from './dictionary.type';

export function createDictionary<Item extends DictionaryInput<AnyType>>(
  items?: Array<Item>
): DictionaryConstructor<Item> {
  if (items && !is(Array, items)) {
    throw new TypeError();
  }

  const instance = new DictionaryConstructor<Item>();

  if (items?.length) {
    items.forEach(
      (item) => instance.add(item)
    );
  }

  return instance;
}
