import { AnyObject, AnyType } from '../misc';
import { WEAK_ITERABLE_LOOKUP } from './weak-iterable.constant';

import { ObjectToStringTag } from '../symbol';

@ObjectToStringTag('WeakIterable')
export abstract class WeakIterable<
  IterableInstance extends AnyObject,
  Item = AnyType
> implements Iterator<Item, Item>
{
  protected get instance(): IterableInstance {
    return WEAK_ITERABLE_LOOKUP.get(this);
  }

  constructor(instance: IterableInstance) {
    WEAK_ITERABLE_LOOKUP.set(this, instance);
  }

  next(): IteratorResult<Item> {
    return {
      done: true,
      value: undefined,
    };
  }
}
