import { AnyType } from '../misc';
import {
  MetadataKey,
  MetadataPropertyKey,
  MetadataTarget,
} from './meta-data.type';

export type MetadataStore = WeakMap<MetadataTarget, MetadataProperty>;

export type MetadataProperty = Map<MetadataPropertyKey, MetadataDefinition>;

export type MetadataDefinition = Map<MetadataKey, AnyType>;
