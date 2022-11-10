export { AnyType, AnyArray, AnyFunction, AnyObject, Primitive, PrimitiveScalar, PrimitiveObject, Scalar, Empty, ArrayLastItem, ArrayFirstItem, ClassInstance, AnyClass, OBJECT_PROTOTYPE, FUNCTION_PROTOTYPE, getGlobal, } from './misc';
export { TYPEOF_UNDEFINED, TYPEOF_BOOLEAN, TYPEOF_STRING, TYPEOF_SYMBOL, TYPEOF_NUMBER, TYPEOF_BIGINT, TYPEOF_OBJECT, TYPEOF_FUNCTION, is, isNumeric, isNumericInteger, } from './validation';
export { numberify, } from './transform';
export { walkPrototype, WalkPrototypeCallback, } from './object';
export { createDecorator, CreateDecoratorOptions, createDecoratorFactory, CreateDecoratorFactoryOptions, } from './decorator';
export { metadata, defineMetadata, getMetadata, hasMetadata, getOwnMetadata, hasOwnMetadata, } from './meta-data';
export { createDictionary, Dictionary } from './dictionary';
