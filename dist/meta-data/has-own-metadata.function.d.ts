import { MetadataKey, MetadataPropertyKey, MetadataTarget } from './meta-data.type';
export declare function hasOwnMetadata<ClassOrInstance extends MetadataTarget>(key: MetadataKey, target: ClassOrInstance, propertyKey?: MetadataPropertyKey): boolean;
