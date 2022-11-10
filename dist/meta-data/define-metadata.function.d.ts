import { MetadataKey, MetadataPropertyKey, MetadataTarget, MetadataValue } from './meta-data.type';
export declare function defineMetadata<ClassOrInstance extends MetadataTarget>(key: MetadataKey, value: MetadataValue, target: ClassOrInstance, propertyKey?: MetadataPropertyKey): void;
