import { AnyClass, ClassInstance } from '../misc';
export declare type DecoratorTypeClassDecorator = 1;
export declare type DecoratorTypePropertyDecorator = 2;
export declare type DecoratorTypeStaticPropertyDecorator = 3;
export declare type DecoratorTypeMethodDecorator = 4;
export declare type DecoratorTypeStaticMethodDecorator = 5;
export declare type DecoratorTypeAccessorDecorator = 6;
export declare type DecoratorTypeStaticAccessorDecorator = 7;
export declare type DecoratorTypeParameterDecorator = 8;
export declare type DecoratorTypeStaticParameterDecorator = 9;
export declare type DecoratorType = DecoratorTypeClassDecorator | DecoratorTypePropertyDecorator | DecoratorTypeStaticPropertyDecorator | DecoratorTypeMethodDecorator | DecoratorTypeStaticMethodDecorator | DecoratorTypeAccessorDecorator | DecoratorTypeStaticAccessorDecorator | DecoratorTypeParameterDecorator | DecoratorTypeStaticParameterDecorator;
export declare type DecoratorCallParameters<Class extends AnyClass> = [
    Class | ClassInstance<Class>,
    string?,
    (PropertyDescriptor | number)?
];
export interface ClassTargetDecorator<Class extends AnyClass> {
    target: Class;
}
export interface PrototypeTargetDecorator<Class extends AnyClass> {
    target: ClassInstance<Class>;
}
export interface BasePropertyDecoratorInfo {
    property: string;
}
export interface BaseMethodDecoratorInfo extends BasePropertyDecoratorInfo {
    descriptor: PropertyDescriptor;
}
export interface BaseParameterDecoratorInfo extends BasePropertyDecoratorInfo {
    index: number;
}
export interface ClassDecoratorInfo<Class extends AnyClass> extends ClassTargetDecorator<Class> {
    type: DecoratorTypeClassDecorator;
}
export interface PropertyDecoratorInfo<Class extends AnyClass> extends PrototypeTargetDecorator<Class>, BasePropertyDecoratorInfo {
    type: DecoratorTypePropertyDecorator;
}
export interface StaticPropertyDecoratorInfo<Class extends AnyClass> extends ClassTargetDecorator<Class>, BasePropertyDecoratorInfo {
    type: DecoratorTypeStaticPropertyDecorator;
}
export interface MethodDecoratorInfo<Class extends AnyClass> extends PrototypeTargetDecorator<Class>, BaseMethodDecoratorInfo {
    type: DecoratorTypeMethodDecorator;
}
export interface StaticMethodDecoratorInfo<Class extends AnyClass> extends ClassTargetDecorator<Class>, BaseMethodDecoratorInfo {
    type: DecoratorTypeStaticMethodDecorator;
}
export interface AccessorDecoratorInfo<Class extends AnyClass> extends PrototypeTargetDecorator<Class>, BaseMethodDecoratorInfo {
    type: DecoratorTypeAccessorDecorator;
}
export interface StaticAccessorDecoratorInfo<Class extends AnyClass> extends ClassTargetDecorator<Class>, BaseMethodDecoratorInfo {
    type: DecoratorTypeStaticAccessorDecorator;
}
export interface ParameterDecoratorInfo<Class extends AnyClass> extends PrototypeTargetDecorator<Class>, BaseParameterDecoratorInfo {
    type: DecoratorTypeParameterDecorator;
}
export interface StaticParameterDecoratorInfo<Class extends AnyClass> extends ClassTargetDecorator<Class>, BaseParameterDecoratorInfo {
    type: DecoratorTypeStaticParameterDecorator;
}
