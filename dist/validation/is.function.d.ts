import { AnyClass, AnyType } from '../misc';
import { IsConstructors, IsType } from './is.type';
export declare function is<Type extends AnyType, Constructor extends IsConstructors = AnyClass>(type: Constructor, subject: AnyType): subject is IsType<Constructor, Type>;
