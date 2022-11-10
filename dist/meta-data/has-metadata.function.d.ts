import { MetadataKey, MetadataPropertyKey, MetadataTarget } from './meta-data.type';
export declare function hasMetadata<ClassOrInstance extends MetadataTarget>(key: MetadataKey, target: ClassOrInstance, propertyKey?: MetadataPropertyKey): boolean;
