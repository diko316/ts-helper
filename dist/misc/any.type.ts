// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyType = any;

export type AnyArray<Item = AnyType> = Array<Item>;

export type AnyFunction<Return = AnyType, Params extends AnyArray = AnyArray> = (...args: Params) => Return;

export type AnyObject = Record<string | number | symbol, AnyType>;

