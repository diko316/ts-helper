import {
  DecoratorTypeAccessorDecorator,
  DecoratorTypeClassDecorator,
  DecoratorTypeMethodDecorator,
  DecoratorTypeParameterDecorator,
  DecoratorTypePropertyDecorator,
  DecoratorTypeStaticAccessorDecorator,
  DecoratorTypeStaticMethodDecorator,
  DecoratorTypeStaticParameterDecorator,
  DecoratorTypeStaticPropertyDecorator,
} from './get-decorator-call-info.type';

export const DECORATOR_TYPE_CLASS: DecoratorTypeClassDecorator = 1;

export const DECORATOR_TYPE_PROPERTY: DecoratorTypePropertyDecorator = 2;
export const DECORATOR_TYPE_STATIC_PROPERTY: DecoratorTypeStaticPropertyDecorator = 3;

export const DECORATOR_TYPE_METHOD: DecoratorTypeMethodDecorator = 4;
export const DECORATOR_TYPE_STATIC_METHOD: DecoratorTypeStaticMethodDecorator = 5;

export const DECORATOR_TYPE_ACCESSOR: DecoratorTypeAccessorDecorator = 6;
export const DECORATOR_TYPE_STATIC_ACCESSOR: DecoratorTypeStaticAccessorDecorator = 7;

export const DECORATOR_TYPE_PARAMETER: DecoratorTypeParameterDecorator = 8;
export const DECORATOR_TYPE_STATIC_PARAMETER: DecoratorTypeStaticParameterDecorator = 9;
