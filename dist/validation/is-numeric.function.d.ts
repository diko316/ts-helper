import { AnyType } from '../misc';
import { Numeric } from './is-numeric.type';
export declare function isNumeric<Type>(subject: Type | AnyType): subject is Numeric extends Type ? Type : never;
