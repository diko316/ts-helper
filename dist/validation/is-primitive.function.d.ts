import { AnyType, PrimitiveScalar } from '../misc';
export declare function isPrimitive<Type extends AnyType>(subject: Type): subject is PrimitiveScalar extends Type ? Type : never;
