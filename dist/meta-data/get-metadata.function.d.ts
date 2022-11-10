import { MetadataKey, MetadataPropertyKey, MetadataTarget, MetadataValue } from './meta-data.type';
export declare function getMetadata<ClassOrInstance extends MetadataTarget>(key: MetadataKey, target: ClassOrInstance, propertyKey?: MetadataPropertyKey): MetadataValue;
