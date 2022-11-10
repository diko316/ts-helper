import { AnyClass, AnyObject } from '../misc';
import { WalkPrototypeCallback } from './walk-prototype.type';
export declare function walkPrototype<Target extends AnyClass | AnyObject>(target: Target, callback: WalkPrototypeCallback): Target | null;
