import { is } from '../validation';
import { AnyType } from '../misc';
import { NUMBER_PATTERN } from './numberify.constant';

export function numberify<Result = undefined>(
  subject: AnyType,
  defaultValue?: Result
): Result | number {
  if (is(Number, subject)) {
    return subject;
  }

  if (NUMBER_PATTERN.test(subject)) {
    return parseFloat(subject);
  }

  return defaultValue as Result;
}
