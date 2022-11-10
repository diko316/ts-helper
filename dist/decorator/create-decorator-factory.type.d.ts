import { AnyArray, AnyType } from '../misc';
import { CreateDecoratorOptions, UnifiedDecorator } from './create-decorator.type';
declare type InitializeDecoratorSettings<Settings, Params extends AnyArray> = (...args: Params) => Settings;
export interface CreateDecoratorFactoryOptions<Settings = AnyType, Params extends AnyArray = AnyArray> extends Omit<CreateDecoratorOptions<Settings>, 'settings'> {
    initialize: InitializeDecoratorSettings<Settings, Params>;
}
export declare type UnifiedDecoratorFactory<Params extends AnyArray> = (...args: Params) => UnifiedDecorator;
export {};
