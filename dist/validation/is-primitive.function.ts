import { AnyType, PrimitiveScalar } from '../misc';
import {
  TYPEOF_BIGINT,
  TYPEOF_BOOLEAN,
  TYPEOF_NUMBER,
  TYPEOF_STRING,
  TYPEOF_SYMBOL,
  TYPEOF_UNDEFINED,
} from './typeof.constant';



export function isPrimitive<Type extends AnyType>(
  subject: Type
): subject is PrimitiveScalar extends Type ? Type : never {
  if (subject === null) {
    return true;
  }

  if (typeof subject === 'number') {
    return isFinite(subject);
  }

  switch (typeof subject) {
    case TYPEOF_NUMBER:
      return isFinite(subject as unknown as number);

    case TYPEOF_BOOLEAN:
    case TYPEOF_BIGINT:
    case TYPEOF_STRING:
    case TYPEOF_SYMBOL:
    case TYPEOF_UNDEFINED:
      return true;

    default:
      return false;
  }
}
