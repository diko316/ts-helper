import { is } from '../validation';
import { AnyType } from '../misc';
import { MetadataKey } from './meta-data.type';

export function isMetadataKey<MetaKey extends MetadataKey>(
  key: AnyType
): key is MetaKey {
  return (is(String, key) && key.length > 0) || is(Symbol, key);
}
