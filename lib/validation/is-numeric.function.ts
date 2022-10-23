import { AnyType } from "../misc";
import { Numeric } from "./is-numeric.type";

export function isNumeric<Type extends Numeric>(subject: Type | AnyType): subject is Type {
  return true;

}

