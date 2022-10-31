import { isMetadataKey } from './is-metadata-key.function';
import { isMetadataPropertyKey } from './is-metadata-property-key.function';
import { isMetadataTarget } from './is-metadata-target.function';
import {
  MetadataKey,
  MetadataPropertyKey,
  MetadataTarget,
} from './meta-data.type';
import {
  DEFAULT_METADATA_PROPERTY_KEY,
  METADATA_STORE,
} from './store.constant';

export function hasOwnMetadata<ClassOrInstance extends MetadataTarget>(
  key: MetadataKey,
  target: ClassOrInstance,
  propertyKey?: MetadataPropertyKey
): boolean {
  if (!isMetadataKey(key) || !isMetadataTarget(target)) {
    return false;
  }

  const definition = METADATA_STORE.get(target);

  if (!definition) {
    return false;
  }

  const property = definition.get(
    isMetadataPropertyKey(propertyKey)
      ? propertyKey
      : DEFAULT_METADATA_PROPERTY_KEY
  );
  if (!property) {
    return false;
  }

  return property.has(key);
}
