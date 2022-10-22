// base
export type TypeofUndefined = 'undefined';
export type TypeofBoolean = 'boolean';
export type TypeofString = 'string';
export type TypeofSymbol = 'symbol';
export type TypeofNumber = 'number';
export type TypeofBigint = 'bigint';
export type TypeofObject = 'object';
export type TypeofFunction = 'function';

export type BaseTypeof =
  | TypeofUndefined
  | TypeofBoolean
  | TypeofString
  | TypeofSymbol
  | TypeofNumber
  | TypeofBigint
  | TypeofObject
  | TypeofFunction;

// native objects
export type TypeofRegExp = 'RegExp';
export type TypeofDate = 'Date';
export type TypeofArray = 'Array';
export type TypeofError = 'Error';

export type NativeObjectTypeof =
  | TypeofRegExp
  | TypeofDate
  | TypeofArray
  | TypeofError;

// all combined types
export type TypeofType = Extract<
  BaseTypeof | NativeObjectTypeof,
  BaseTypeof | NativeObjectTypeof
>;
