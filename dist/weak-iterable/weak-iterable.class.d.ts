import { AnyObject, AnyType } from '../misc';
export declare abstract class WeakIterable<IterableInstance extends AnyObject, Item = AnyType> implements Iterator<Item, Item> {
    protected get instance(): IterableInstance;
    constructor(instance: IterableInstance);
    next(): IteratorResult<Item>;
}
