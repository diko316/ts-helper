import {
  DEFAULT_METADATA_PROPERTY_KEY,
  METADATA_STORE,
} from './store.constant';
import {
  MetadataKey,
  MetadataPropertyKey,
  MetadataTarget,
  MetadataValue,
} from './meta-data.type';
import { isMetadataKey } from './is-metadata-key.function';
import { isMetadataTarget } from './is-metadata-target.function';
import { isMetadataPropertyKey } from './is-metadata-property-key.function';

export function getOwnMetadata<ClassOrInstance extends MetadataTarget>(
  key: MetadataKey,
  target: ClassOrInstance,
  propertyKey?: MetadataPropertyKey
): MetadataValue {
  if (!isMetadataKey(key) || !isMetadataTarget(target)) {
    return;
  }

  // store
  return (
    METADATA_STORE.get(target)
      // property
      ?.get(
        isMetadataPropertyKey(propertyKey)
          ? propertyKey
          : DEFAULT_METADATA_PROPERTY_KEY
      )
      // definition
      ?.get(key)
  );
}
