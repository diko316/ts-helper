import { AnyClass, AnyType } from '../misc';
import { PRIMITIVE_TYPE_MAP } from './is.constant';
import { IsConstructors, IsType } from './is.type';

export function is<
  Type extends AnyType,
  Constructor extends IsConstructors = AnyClass
>(type: Constructor, subject: AnyType): subject is IsType<Constructor, Type> {
  if (typeof type !== 'function') {
    return false;
  }

  switch (type as IsConstructors) {
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

      switch (type as IsConstructors) {
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
