import { AnyClass, ClassInstance } from '../misc';
import {
  is,
  TYPEOF_FUNCTION,
  TYPEOF_NUMBER,
  TYPEOF_OBJECT,
  TYPEOF_STRING,
} from '../validation';

import {
  DECORATOR_TYPE_ACCESSOR,
  DECORATOR_TYPE_CLASS,
  DECORATOR_TYPE_METHOD,
  DECORATOR_TYPE_PARAMETER,
  DECORATOR_TYPE_PROPERTY,
  DECORATOR_TYPE_STATIC_ACCESSOR,
  DECORATOR_TYPE_STATIC_METHOD,
  DECORATOR_TYPE_STATIC_PARAMETER,
  DECORATOR_TYPE_STATIC_PROPERTY,
} from './create-decorator.constant';

import {
  AccessorDecoratorInfo,
  ClassDecoratorInfo,
  DecoratorCallParameters,
  MethodDecoratorInfo,
  ParameterDecoratorInfo,
  PropertyDecoratorInfo,
  StaticAccessorDecoratorInfo,
  StaticMethodDecoratorInfo,
  StaticParameterDecoratorInfo,
  StaticPropertyDecoratorInfo,
} from './get-decorator-call-info.type';

export function getDecoratorCallInfo<Class extends AnyClass>([
  target,
  property,
  descriptorOrIndex,
]: DecoratorCallParameters<Class>):
  | null
  | ClassDecoratorInfo<Class>
  | PropertyDecoratorInfo<Class>
  | StaticPropertyDecoratorInfo<Class>
  | MethodDecoratorInfo<Class>
  | StaticMethodDecoratorInfo<Class>
  | AccessorDecoratorInfo<Class>
  | StaticAccessorDecoratorInfo<Class>
  | ParameterDecoratorInfo<Class>
  | StaticParameterDecoratorInfo<Class> {
  //////// For Class Target
  if (is<Class>(TYPEOF_FUNCTION, target)) {
    // indeed a class target if no property
    if (!property || !is(TYPEOF_STRING, property)) {
      return {
        type: DECORATOR_TYPE_CLASS,
        target,
      };
    }

    // if has 3rd parameter is index, then it's a static
    if (is<number>(TYPEOF_NUMBER, descriptorOrIndex)) {
      return {
        type: DECORATOR_TYPE_STATIC_PARAMETER,
        target,
        property,
        index: descriptorOrIndex,
      };
    }

    // if 3rd parameter is poperty descriptor
    if (is<PropertyDescriptor>(TYPEOF_OBJECT, descriptorOrIndex)) {
      // if descriptor value is function, then it's a method decorator call
      if (is(TYPEOF_FUNCTION, descriptorOrIndex.value)) {
        return {
          type: DECORATOR_TYPE_STATIC_METHOD,
          target,
          property,
          descriptor: descriptorOrIndex,
        };
      }

      // if not, this is an accessor decorator call
      return {
        type: DECORATOR_TYPE_STATIC_ACCESSOR,
        target,
        property,
        descriptor: descriptorOrIndex,
      };
    }

    // or if only property exists, then this is a property decorator call
    return {
      type: DECORATOR_TYPE_STATIC_PROPERTY,
      target,
      property,
    };
  }

  // if target is not an object or property is empty, then this is invalid
  if (!is<ClassInstance<Class>>(TYPEOF_OBJECT, target) || !property) {
    return null;
  }

  //////// For Prototype Target

  // if has 3rd parameter is index, then it's a static
  if (is<number>(TYPEOF_NUMBER, descriptorOrIndex)) {
    return {
      type: DECORATOR_TYPE_PARAMETER,
      target,
      property,
      index: descriptorOrIndex,
    };
  }

  // if 3rd parameter is poperty descriptor
  if (is<PropertyDescriptor>(TYPEOF_OBJECT, descriptorOrIndex)) {
    // if descriptor value is function, then it's a method decorator call
    if (is(TYPEOF_FUNCTION, descriptorOrIndex.value)) {
      return {
        type: DECORATOR_TYPE_METHOD,
        target,
        property,
        descriptor: descriptorOrIndex,
      };
    }

    // if not, this is an accessor decorator call
    return {
      type: DECORATOR_TYPE_ACCESSOR,
      target,
      property,
      descriptor: descriptorOrIndex,
    };
  }

  // or if only property exists, then this is a property decorator call
  return {
    type: DECORATOR_TYPE_PROPERTY,
    target,
    property,
  };
}
