import { AnyClass, AnyObject, AnyType } from '../misc';

export type WalkPrototypeCallback = (
  target: AnyClass | AnyObject
) => AnyType | false;
