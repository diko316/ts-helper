import { TYPEOF_UNDEFINED } from '../validation';
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

export function defineMetadata<ClassOrInstance extends MetadataTarget>(
  key: MetadataKey,
  value: MetadataValue,
  target: ClassOrInstance,
  propertyKey?: MetadataPropertyKey
): void {
  if (!isMetadataKey(key) || !isMetadataTarget(target)) {
    return;
  }

  // don't store undefined!
  if (typeof value === TYPEOF_UNDEFINED) {
    return;
  }

  let definition = METADATA_STORE.get(target);

  if (!definition) {
    METADATA_STORE.set(target, (definition = new Map()));
  }

  const access = isMetadataPropertyKey(propertyKey)
    ? propertyKey
    : DEFAULT_METADATA_PROPERTY_KEY;

  let property = definition.get(access);
  if (!property) {
    property = new Map();
    definition.set(access, property);
  }

  property.set(key, value);

  return;
}
