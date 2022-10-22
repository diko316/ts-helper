import { AnyClass, AnyType, ClassInstance } from '../misc';
import {
  AccessorDecoratorInfo,
  ClassDecoratorInfo,
  MethodDecoratorInfo,
  ParameterDecoratorInfo,
  PropertyDecoratorInfo,
  StaticAccessorDecoratorInfo,
  StaticMethodDecoratorInfo,
  StaticParameterDecoratorInfo,
  StaticPropertyDecoratorInfo,
} from './get-decorator-call-info.type';

// base decorator params
interface ProcessDecoratorSettings<Settings> {
  settings?: Settings;
}

// decorator processors

// process class
export type ProcessClassDecorator<Settings> = <Class extends AnyClass>(
  options: ClassDecoratorInfo<Class> & ProcessDecoratorSettings<Settings>
) => AnyType;

// process property
export type ProcessPropertyDecorator<Settings> = <Class extends AnyClass>(
  options: PropertyDecoratorInfo<Class> & ProcessDecoratorSettings<Settings>
) => AnyType;
export type ProcessStaticPropertyDecorator<Settings> = <Class extends AnyClass>(
  options: StaticPropertyDecoratorInfo<Class> &
    ProcessDecoratorSettings<Settings>
) => AnyType;

// process method
export type ProcessMethodDecorator<Settings> = <Class extends AnyClass>(
  options: MethodDecoratorInfo<Class> & ProcessDecoratorSettings<Settings>
) => AnyType;
export type ProcessStaticMethodDecorator<Settings> = <Class extends AnyClass>(
  options: StaticMethodDecoratorInfo<Class> & ProcessDecoratorSettings<Settings>
) => AnyType;

// process accessor
export type ProcessAccessorDecorator<Settings> = <Class extends AnyClass>(
  options: AccessorDecoratorInfo<Class> & ProcessDecoratorSettings<Settings>
) => AnyType;
export type ProcessStaticAccessorDecorator<Settings> = <Class extends AnyClass>(
  options: StaticAccessorDecoratorInfo<Class> &
    ProcessDecoratorSettings<Settings>
) => AnyType;

// process parameter
export type ProcessParameterDecorator<Settings> = <Class extends AnyClass>(
  options: ParameterDecoratorInfo<Class> & ProcessDecoratorSettings<Settings>
) => AnyType;
export type ProcessStaticParameterDecorator<Settings> = <
  Class extends AnyClass
>(
  options: StaticParameterDecoratorInfo<Class> &
    ProcessDecoratorSettings<Settings>
) => AnyType;

// Create decorator options
export interface CreateDecoratorOptions<Settings = AnyType>
  extends ProcessDecoratorSettings<Settings> {
  classDecorator?: ProcessClassDecorator<Settings>;

  propertyDecorator?: ProcessPropertyDecorator<Settings>;
  staticPropertyDecorator?: ProcessStaticPropertyDecorator<Settings>;

  methodDecorator?: ProcessMethodDecorator<Settings>;
  staticMethodDecorator?: ProcessStaticMethodDecorator<Settings>;

  accessorDecorator?: ProcessAccessorDecorator<Settings>;
  staticAccessorDecorator?: ProcessStaticAccessorDecorator<Settings>;

  parameterDecorator?: ProcessParameterDecorator<Settings>;
  staticParameterDecorator?: ProcessStaticParameterDecorator<Settings>;
}

// Resulting unified decorator
export type UnifiedDecorator = <Class extends AnyClass>(
  target: Class | ClassInstance<Class>,
  property?: string,
  descriptorOrIndex?: PropertyDescriptor | number
) => AnyType;
