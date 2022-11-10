import { AnyArray, AnyClass, AnyFunction } from '../misc';

export type IsConstructors =
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

export type IsType<Constructor, Fallback = never> = Constructor extends StringConstructor
  ? string
  : Constructor extends string
  ? string
  : Constructor extends SymbolConstructor
  ? symbol
  : Constructor extends NumberConstructor
  ? number
  : Constructor extends number
  ? number
  : Constructor extends BigIntConstructor
  ? bigint
  : Constructor extends BooleanConstructor
  ? boolean
  : Constructor extends ObjectConstructor
  ? object
  : Constructor extends ArrayConstructor
  ? AnyArray
  : Constructor extends FunctionConstructor
  ? AnyFunction
  : Constructor extends DateConstructor
  ? Date
  : Constructor extends ErrorConstructor
  ? Error
  : Constructor extends RegExpConstructor
  ? RegExp
  : Fallback;
