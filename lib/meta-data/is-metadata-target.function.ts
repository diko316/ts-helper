import { is } from '../validation';
import { AnyType } from '../misc';
import { MetadataTarget } from './meta-data.type';

export function isMetadataTarget<
  ClassOrInstance extends MetadataTarget = MetadataTarget
>(target: AnyType): target is ClassOrInstance {
  return is(Object, target) || is(Function, target);
}
