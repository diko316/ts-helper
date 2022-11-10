export declare type AnyType = any;
export declare type AnyArray<Item = AnyType> = Array<Item>;
export declare type AnyFunction<Return = AnyType, Params extends AnyArray = AnyArray> = (...args: Params) => Return;
export declare type AnyObject = Record<string | number | symbol, AnyType>;
