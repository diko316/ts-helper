import { AnyClass, AnyObject, AnyType } from '../misc';

export type MetadataKey = string | symbol;
export type MetadataValue = AnyType | undefined;

export type MetadataTarget = AnyObject | AnyClass;
export type MetadataPropertyKey = string | symbol;
