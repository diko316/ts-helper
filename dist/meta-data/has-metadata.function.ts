import { walkPrototype } from '../object/walk-prototype.function';
import { hasOwnMetadata } from './has-own-metadata.function';
import { isMetadataKey } from './is-metadata-key.function';
import { isMetadataPropertyKey } from './is-metadata-property-key.function';
import { isMetadataTarget } from './is-metadata-target.function';
import {
  MetadataKey,
  MetadataPropertyKey,
  MetadataTarget,
} from './meta-data.type';
import { DEFAULT_METADATA_PROPERTY_KEY } from './store.constant';

export function hasMetadata<ClassOrInstance extends MetadataTarget>(
  key: MetadataKey,
  target: ClassOrInstance,
  propertyKey?: MetadataPropertyKey
): boolean {
  if (!isMetadataTarget(target) || !isMetadataKey(key)) {
    return false;
  }
  const access = isMetadataPropertyKey(propertyKey)
    ? propertyKey
    : DEFAULT_METADATA_PROPERTY_KEY;

  function foundMetadata(currentTarget: MetadataTarget): boolean {
    return hasOwnMetadata(key, currentTarget, access);
  }

  return walkPrototype(target, foundMetadata) !== null;
}
