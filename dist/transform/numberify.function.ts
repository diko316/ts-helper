import { AnyType } from '../misc';

import { TYPEOF_NUMBER, TYPEOF_STRING } from '../validation';
import { IS_NUMERIC_STRING_PATTERN } from '../validation/is-numeric.constant';

export function numberify<Result = undefined>(
  subject: AnyType,
  defaultValue?: Result
): Result | number {
  switch (typeof subject) {
    case TYPEOF_STRING:
      return IS_NUMERIC_STRING_PATTERN.test(subject as string)
        ? parseFloat(subject as string)
        : (defaultValue as Result);

    case TYPEOF_NUMBER:
      return isFinite(subject as number)
        ? (subject as number)
        : (defaultValue as Result);

    default:
      return defaultValue as Result;
  }
}
