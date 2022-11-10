import { AnyType } from '../misc';
import { MetadataTarget } from './meta-data.type';
export declare function isMetadataTarget<ClassOrInstance extends MetadataTarget = MetadataTarget>(target: AnyType): target is ClassOrInstance;
