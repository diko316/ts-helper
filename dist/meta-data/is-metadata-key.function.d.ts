import { AnyType } from '../misc';
import { MetadataKey } from './meta-data.type';
export declare function isMetadataKey<MetaKey extends MetadataKey>(key: AnyType): key is MetaKey;
