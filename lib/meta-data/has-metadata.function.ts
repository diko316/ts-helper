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

  let currentTarget = target;

  for (; currentTarget; currentTarget = Object.getPrototypeOf(currentTarget)) {
    if (hasOwnMetadata(key, currentTarget, access)) {
      return true;
    }
  }

  return false;
}
