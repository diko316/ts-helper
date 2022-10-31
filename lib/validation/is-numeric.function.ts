import { AnyType } from '../misc';

import { Numeric } from './is-numeric.type';

import { IS_NUMERIC_STRING_PATTERN } from './is-numeric.constant';
import { TYPEOF_NUMBER, TYPEOF_STRING } from './typeof.constant';

export function isNumeric<Type extends Numeric>(
  subject: AnyType
): subject is Type {
  switch (typeof subject) {
    case TYPEOF_STRING:
      return IS_NUMERIC_STRING_PATTERN.test(subject);

    case TYPEOF_NUMBER:
      return isFinite(subject);

    default:
      return false;
  }
}
