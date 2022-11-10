import { defineMetadata } from './define-metadata.function';
import {
  MetadataKey,
  MetadataPropertyKey,
  MetadataTarget,
  MetadataValue,
} from './meta-data.type';

export function metadata(
  key: MetadataKey,
  value: MetadataValue
): (target: MetadataTarget, propertyKey?: MetadataPropertyKey) => void {
  function metaDecorator(
    target: MetadataTarget,
    propertyKey?: MetadataPropertyKey
  ): void {
    defineMetadata(key, value, target, propertyKey);
  }

  return metaDecorator;
}
