import { MetadataKey, MetadataPropertyKey, MetadataTarget, MetadataValue } from './meta-data.type';
export declare function metadata(key: MetadataKey, value: MetadataValue): (target: MetadataTarget, propertyKey?: MetadataPropertyKey) => void;
