
import { AnyType } from '../misc';
import { PRIMITIVE_TYPE_MAP } from './is.constant';
import { IsType, TestableType } from './is.type';

export function is<ExpectedType, Type extends TestableType = TestableType>(
  type: Type,
  subject: AnyType
): subject is ExpectedType extends IsType<Type> ? ExpectedType : IsType<Type> {
  if (typeof type !== 'function') {
    return false;
  }

  switch (type as TestableType) {
    case Boolean:
    case String:
    case Number:
    case BigInt:
    case Symbol:
    case Function:
    case Object:
      if (PRIMITIVE_TYPE_MAP[typeof subject] !== type) {
        return false;
      }

      switch (type as TestableType) {
        case Number:
          return isFinite(subject);
        case Object:
          return subject !== null;
        default:
          return true;
      }

    default:
      return subject instanceof type;
  }
}
