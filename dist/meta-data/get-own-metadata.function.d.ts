import { MetadataKey, MetadataPropertyKey, MetadataTarget, MetadataValue } from './meta-data.type';
export declare function getOwnMetadata<ClassOrInstance extends MetadataTarget>(key: MetadataKey, target: ClassOrInstance, propertyKey?: MetadataPropertyKey): MetadataValue;
