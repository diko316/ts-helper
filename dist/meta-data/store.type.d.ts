import { AnyType } from '../misc';
import { MetadataKey, MetadataPropertyKey, MetadataTarget } from './meta-data.type';
export declare type MetadataStore = WeakMap<MetadataTarget, MetadataProperty>;
export declare type MetadataProperty = Map<MetadataPropertyKey, MetadataDefinition>;
export declare type MetadataDefinition = Map<MetadataKey, AnyType>;
