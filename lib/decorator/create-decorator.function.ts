import { AnyClass, AnyType } from '../misc';

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
  CreateDecoratorOptions,
  UnifiedDecorator,
} from './create-decorator.type';
import { getDecoratorCallInfo } from './get-decorator-call-info.function';
import { DecoratorCallParameters } from './get-decorator-call-info.type';

export function createDecorator<Settings>(
  {
    settings,
    classDecorator,
    propertyDecorator,
    methodDecorator,
    accessorDecorator,
    parameterDecorator,
    staticPropertyDecorator,
    staticMethodDecorator,
    staticAccessorDecorator,
    staticParameterDecorator,
  }: CreateDecoratorOptions<Settings>
): UnifiedDecorator {
  function decorator<Class extends AnyClass>(
    ...callParams: DecoratorCallParameters<Class>
  ): AnyType {
    const info = getDecoratorCallInfo(callParams);

    switch (info?.type) {
      case DECORATOR_TYPE_CLASS:
        if (classDecorator) {
          return classDecorator({
            ...info,
            settings,
          });
        }
        return;

      case DECORATOR_TYPE_PROPERTY:
        if (propertyDecorator) {
          return propertyDecorator({
            ...info,
            settings,
          });
        }
        return;

      case DECORATOR_TYPE_STATIC_PROPERTY:
        if (staticPropertyDecorator) {
          return staticPropertyDecorator({
            ...info,
            settings,
          });
        }
        return;

      case DECORATOR_TYPE_METHOD:
        if (methodDecorator) {
          return methodDecorator({
            ...info,
            settings,
          });
        }
        return;

      case DECORATOR_TYPE_STATIC_METHOD:
        if (staticMethodDecorator) {
          return staticMethodDecorator({
            ...info,
            settings,
          });
        }
        return;

      case DECORATOR_TYPE_ACCESSOR:
        if (accessorDecorator) {
          return accessorDecorator({
            ...info,
            settings,
          });
        }
        return;

      case DECORATOR_TYPE_STATIC_ACCESSOR:
        if (staticAccessorDecorator) {
          return staticAccessorDecorator({
            ...info,
            settings,
          });
        }
        return;

      case DECORATOR_TYPE_PARAMETER:
        if (parameterDecorator) {
          return parameterDecorator({
            ...info,
            settings,
          });
        }
        return;

      case DECORATOR_TYPE_STATIC_PARAMETER:
        if (staticParameterDecorator) {
          return staticParameterDecorator({
            ...info,
            settings,
          });
        }
        return;

      default:
        return;
    }
  }

  return decorator;
}
