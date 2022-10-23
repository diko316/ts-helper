import { AnyArray, AnyClass, AnyFunction } from '../misc';
import {
  TYPEOF_BIGINT,
  TYPEOF_BOOLEAN,
  TYPEOF_FUNCTION,
  TYPEOF_NUMBER,
  TYPEOF_OBJECT,
  TYPEOF_STRING,
  TYPEOF_SYMBOL,
  TYPEOF_UNDEFINED,
} from './typeof.constant';

export type TestableType =
  | string
  | StringConstructor
  | SymbolConstructor
  | NumberConstructor
  | BigIntConstructor
  | BooleanConstructor
  | ObjectConstructor
  | ArrayConstructor
  | FunctionConstructor
  | DateConstructor
  | ErrorConstructor
  | RegExpConstructor
  | AnyClass;

export interface IsTypeMap {
  [TYPEOF_UNDEFINED]: undefined;
  [TYPEOF_BOOLEAN]: boolean;
  [TYPEOF_STRING]: string;
  [TYPEOF_SYMBOL]: symbol;
  [TYPEOF_NUMBER]: number;
  [TYPEOF_BIGINT]: bigint;
  [TYPEOF_OBJECT]: object;
  [TYPEOF_FUNCTION]: AnyFunction;
}

export type IsType<
  Type extends TestableType,
  Fallback = never
> = Type extends StringConstructor
  ? string
  : Type extends string
  ? string
  : Type extends SymbolConstructor
  ? symbol
  : Type extends NumberConstructor
  ? number
  : Type extends number
  ? number
  : Type extends BigIntConstructor
  ? bigint
  : Type extends BooleanConstructor
  ? boolean
  : Type extends ObjectConstructor
  ? object
  : Type extends ArrayConstructor
  ? AnyArray
  : Type extends FunctionConstructor
  ? AnyFunction
  : Type extends DateConstructor
  ? Date
  : Type extends ErrorConstructor
  ? Error
  : Type extends RegExpConstructor
  ? RegExp
  : Fallback;
