import { AnyArray } from '../misc';
import { CreateDecoratorFactoryOptions, UnifiedDecoratorFactory } from './create-decorator-factory.type';
export declare function createDecoratorFactory<Settings, Params extends AnyArray>({ initialize, ...options }: CreateDecoratorFactoryOptions<Settings, Params>): UnifiedDecoratorFactory<Params>;
