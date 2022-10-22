import {
  TypeofArray,
  TypeofBigint,
  TypeofBoolean,
  TypeofDate,
  TypeofError,
  TypeofFunction,
  TypeofNumber,
  TypeofObject,
  TypeofRegExp,
  TypeofString,
  TypeofSymbol,
  TypeofUndefined,
} from './typeof.type';

export const TYPEOF_UNDEFINED: TypeofUndefined = 'undefined';
export const TYPEOF_BOOLEAN: TypeofBoolean = 'boolean';

export const TYPEOF_STRING: TypeofString = 'string';
export const TYPEOF_SYMBOL: TypeofSymbol = 'symbol';

export const TYPEOF_NUMBER: TypeofNumber = 'number';
export const TYPEOF_BIGINT: TypeofBigint = 'bigint';

export const TYPEOF_OBJECT: TypeofObject = 'object';
export const TYPEOF_FUNCTION: TypeofFunction = 'function';

export const TYPEOF_REG_EXP: TypeofRegExp = 'RegExp';
export const TYPEOF_DATE: TypeofDate = 'Date';
export const TYPEOF_ARRAY: TypeofArray = 'Array';
export const TYPEOF_ERROR: TypeofError = 'Error';
