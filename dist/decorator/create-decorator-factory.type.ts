import { AnyArray, AnyType } from '../misc';
import {
  CreateDecoratorOptions,
  UnifiedDecorator,
} from './create-decorator.type';

type InitializeDecoratorSettings<Settings, Params extends AnyArray> = (
  ...args: Params
) => Settings;

// options
export interface CreateDecoratorFactoryOptions<
  Settings = AnyType,
  Params extends AnyArray = AnyArray
> extends Omit<CreateDecoratorOptions<Settings>, 'settings'> {
  initialize: InitializeDecoratorSettings<Settings, Params>;
}

export type UnifiedDecoratorFactory<Params extends AnyArray> = (
  ...args: Params
) => UnifiedDecorator;
