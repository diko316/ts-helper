import { is } from '../validation';
import { AnyClass, AnyObject } from '../misc';
import { WalkPrototypeCallback } from './walk-prototype.type';

export function walkPrototype<Target extends AnyClass | AnyObject>(
  target: Target,
  callback: WalkPrototypeCallback
): Target | null {
  if (!is(Function, target) && !is(Object, target)) {
    return null;
  }

  if (!is(Function, callback)) {
    return null;
  }

  let currentTarget: Target | null = target;

  for (; currentTarget; currentTarget = Object.getPrototypeOf(currentTarget)) {
    if (callback(currentTarget) === true) {
      return currentTarget;
    }
  }

  return null;
}
