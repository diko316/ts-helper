'use strict';

var is_function = require('../validation/is.function.cjs');
require('../validation/is-numeric.function.cjs');
var createDecorator_constant = require('./create-decorator.constant.cjs');

function getDecoratorCallInfo(ref) {
    var target = ref[0];
    var property = ref[1];
    var descriptorOrIndex = ref[2];

    //////// For Class Target
    if (is_function.is(Function, target)) {
        // indeed a class target if no property
        if (!property || !is_function.is(String, property)) {
            return {
                type: createDecorator_constant.DECORATOR_TYPE_CLASS,
                target: target,
            };
        }
        // if has 3rd parameter is index, then it's a static
        if (is_function.is(Number, descriptorOrIndex)) {
            return {
                type: createDecorator_constant.DECORATOR_TYPE_STATIC_PARAMETER,
                target: target,
                property: property,
                index: descriptorOrIndex,
            };
        }
        // if 3rd parameter is poperty descriptor
        if (is_function.is(Object, descriptorOrIndex)) {
            // if descriptor value is function, then it's a method decorator call
            if (is_function.is(Function, descriptorOrIndex.value)) {
                return {
                    type: createDecorator_constant.DECORATOR_TYPE_STATIC_METHOD,
                    target: target,
                    property: property,
                    descriptor: descriptorOrIndex,
                };
            }
            // if not, this is an accessor decorator call
            return {
                type: createDecorator_constant.DECORATOR_TYPE_STATIC_ACCESSOR,
                target: target,
                property: property,
                descriptor: descriptorOrIndex,
            };
        }
        // or if only property exists, then this is a property decorator call
        return {
            type: createDecorator_constant.DECORATOR_TYPE_STATIC_PROPERTY,
            target: target,
            property: property,
        };
    }
    // if target is not an object or property is empty, then this is invalid
    if (!is_function.is(Object, target) || !property) {
        return null;
    }
    //////// For Prototype Target
    // if has 3rd parameter is index, then it's a static
    if (is_function.is(Number, descriptorOrIndex)) {
        return {
            type: createDecorator_constant.DECORATOR_TYPE_PARAMETER,
            target: target,
            property: property,
            index: descriptorOrIndex,
        };
    }
    // if 3rd parameter is poperty descriptor
    if (is_function.is(Object, descriptorOrIndex)) {
        // if descriptor value is function, then it's a method decorator call
        if (is_function.is(Function, descriptorOrIndex.value)) {
            return {
                type: createDecorator_constant.DECORATOR_TYPE_METHOD,
                target: target,
                property: property,
                descriptor: descriptorOrIndex,
            };
        }
        // if not, this is an accessor decorator call
        return {
            type: createDecorator_constant.DECORATOR_TYPE_ACCESSOR,
            target: target,
            property: property,
            descriptor: descriptorOrIndex,
        };
    }
    // or if only property exists, then this is a property decorator call
    return {
        type: createDecorator_constant.DECORATOR_TYPE_PROPERTY,
        target: target,
        property: property,
    };
}

exports.getDecoratorCallInfo = getDecoratorCallInfo;
//# sourceMappingURL=get-decorator-call-info.function.cjs.map
