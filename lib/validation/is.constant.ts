import { IsConstructors } from './is.type';
import {
  TYPEOF_BIGINT,
  TYPEOF_BOOLEAN,
  TYPEOF_FUNCTION,
  TYPEOF_NUMBER,
  TYPEOF_OBJECT,
  TYPEOF_STRING,
  TYPEOF_SYMBOL,
} from './typeof.constant';

export const PRIMITIVE_TYPE_MAP: Record<string, IsConstructors> = {
  [TYPEOF_STRING]: String,
  [TYPEOF_SYMBOL]: Symbol,
  [TYPEOF_NUMBER]: Number,
  [TYPEOF_BIGINT]: BigInt,
  [TYPEOF_BOOLEAN]: Boolean,
  [TYPEOF_FUNCTION]: Function,
  [TYPEOF_OBJECT]: Object,
};