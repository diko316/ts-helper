import { AnyArray } from '../misc';
import {
  CreateDecoratorFactoryOptions,
  UnifiedDecoratorFactory,
} from './create-decorator-factory.type';
import { createDecorator } from './create-decorator.function';
import { UnifiedDecorator } from './create-decorator.type';

export function createDecoratorFactory<Settings, Params extends AnyArray>({
  initialize,
  ...options
}: CreateDecoratorFactoryOptions<
  Settings,
  Params
>): UnifiedDecoratorFactory<Params> {
  function factory(...args: Params): UnifiedDecorator {
    return createDecorator({
      ...options,
      settings: initialize(...args),
    });
  }

  return factory;
}
