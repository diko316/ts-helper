import { is } from '../validation/is.function.mjs';
import '../validation/is-numeric.function.mjs';
import { DECORATOR_TYPE_CLASS, DECORATOR_TYPE_STATIC_PARAMETER, DECORATOR_TYPE_STATIC_METHOD, DECORATOR_TYPE_STATIC_ACCESSOR, DECORATOR_TYPE_STATIC_PROPERTY, DECORATOR_TYPE_PARAMETER, DECORATOR_TYPE_METHOD, DECORATOR_TYPE_ACCESSOR, DECORATOR_TYPE_PROPERTY } from './create-decorator.constant.mjs';

function getDecoratorCallInfo([target, property, descriptorOrIndex,]) {
    //////// For Class Target
    if (is(Function, target)) {
        // indeed a class target if no property
        if (!property || !is(String, property)) {
            return {
                type: DECORATOR_TYPE_CLASS,
                target,
            };
        }
        // if has 3rd parameter is index, then it's a static
        if (is(Number, descriptorOrIndex)) {
            return {
                type: DECORATOR_TYPE_STATIC_PARAMETER,
                target,
                property,
                index: descriptorOrIndex,
            };
        }
        // if 3rd parameter is poperty descriptor
        if (is(Object, descriptorOrIndex)) {
            // if descriptor value is function, then it's a method decorator call
            if (is(Function, descriptorOrIndex.value)) {
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
    if (!is(Object, target) || !property) {
        return null;
    }
    //////// For Prototype Target
    // if has 3rd parameter is index, then it's a static
    if (is(Number, descriptorOrIndex)) {
        return {
            type: DECORATOR_TYPE_PARAMETER,
            target,
            property,
            index: descriptorOrIndex,
        };
    }
    // if 3rd parameter is poperty descriptor
    if (is(Object, descriptorOrIndex)) {
        // if descriptor value is function, then it's a method decorator call
        if (is(Function, descriptorOrIndex.value)) {
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

export { getDecoratorCallInfo };
//# sourceMappingURL=get-decorator-call-info.function.mjs.map
