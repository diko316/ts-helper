import { AnyType } from '../misc';

import { Numeric } from './is-numeric.type';

import { TYPEOF_NUMBER, TYPEOF_STRING } from './typeof.constant';
import { IS_NUMERIC_INTEGER_STRING_PATTERN } from './is-numeric.constant';

export function isNumericInteger<Type>(
  subject: Type | AnyType
): subject is Numeric extends Type ? Type : never {
  switch (typeof subject) {
    case TYPEOF_STRING:
      return IS_NUMERIC_INTEGER_STRING_PATTERN.test(subject);

    case TYPEOF_NUMBER:
      return isFinite(subject);

    default:
      return false;
  }
}
