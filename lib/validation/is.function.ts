import { AnyType } from '../misc';
import {
  TYPEOF_ARRAY,
  TYPEOF_BIGINT,
  TYPEOF_BOOLEAN,
  TYPEOF_DATE,
  TYPEOF_ERROR,
  TYPEOF_FUNCTION,
  TYPEOF_NUMBER,
  TYPEOF_OBJECT,
  TYPEOF_REG_EXP,
  TYPEOF_STRING,
  TYPEOF_SYMBOL,
  TYPEOF_UNDEFINED,
} from './typeof.constant';

import { TypeofType } from './typeof.type';

const GET_OBJECT_SIGNATURE = Object.prototype.toString;

export function is<ExpectedType>(
  type: TypeofType,
  subject?: ExpectedType | AnyType
): subject is ExpectedType {
  switch (type) {
    case TYPEOF_UNDEFINED:
    case TYPEOF_BOOLEAN:
    case TYPEOF_STRING:
    case TYPEOF_SYMBOL:
    case TYPEOF_BIGINT:
    case TYPEOF_FUNCTION:
      return typeof subject === type;

    case TYPEOF_NUMBER:
      return typeof subject === TYPEOF_NUMBER && isFinite(subject);

    case TYPEOF_OBJECT:
      return subject !== null && typeof subject === type;

    case TYPEOF_REG_EXP:
    case TYPEOF_DATE:
    case TYPEOF_ARRAY:
    case TYPEOF_ERROR:
      return GET_OBJECT_SIGNATURE.call(subject) === `[object ${type}]`;

    default:
      return false;
  }
}
