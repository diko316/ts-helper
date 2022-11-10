import { AnyType } from '../misc';

import { Numeric } from './is-numeric.type';

import { IS_NUMERIC_STRING_PATTERN } from './is-numeric.constant';
import { TYPEOF_NUMBER, TYPEOF_STRING } from './typeof.constant';

export function isNumeric<Type>(
  subject: Type | AnyType
): subject is Numeric extends Type ? Type : never {
  switch (typeof subject) {
    case TYPEOF_STRING:
      return IS_NUMERIC_STRING_PATTERN.test(subject);

    case TYPEOF_NUMBER:
      return isFinite(subject);

    default:
      return false;
  }
}

const c = 'buang';

if (isNumeric<{ name: 1 }>(c)) {
  console.log('numeric ', c);
}

if (isNumeric(c)) {
  console.log('numeric ', c);
}
