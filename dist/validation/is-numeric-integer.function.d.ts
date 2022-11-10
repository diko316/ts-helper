import { AnyType } from '../misc';
import { Numeric } from './is-numeric.type';
export declare function isNumericInteger<Type>(subject: Type | AnyType): subject is Numeric extends Type ? Type : never;
