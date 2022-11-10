'use strict';

var createDecorator_constant = require('./create-decorator.constant.cjs');
var getDecoratorCallInfo_function = require('./get-decorator-call-info.function.cjs');

function createDecorator(ref) {
    var settings = ref.settings;
    var classDecorator = ref.classDecorator;
    var propertyDecorator = ref.propertyDecorator;
    var methodDecorator = ref.methodDecorator;
    var accessorDecorator = ref.accessorDecorator;
    var parameterDecorator = ref.parameterDecorator;
    var staticPropertyDecorator = ref.staticPropertyDecorator;
    var staticMethodDecorator = ref.staticMethodDecorator;
    var staticAccessorDecorator = ref.staticAccessorDecorator;
    var staticParameterDecorator = ref.staticParameterDecorator;

    function decorator() {
        var callParams = [], len = arguments.length;
        while ( len-- ) callParams[ len ] = arguments[ len ];

        var info = getDecoratorCallInfo_function.getDecoratorCallInfo(callParams);
        switch (info === null || info === void 0 ? void 0 : info.type) {
            case createDecorator_constant.DECORATOR_TYPE_CLASS:
                if (classDecorator) {
                    return classDecorator(Object.assign({}, info,
                        {settings: settings}));
                }
                return;
            case createDecorator_constant.DECORATOR_TYPE_PROPERTY:
                if (propertyDecorator) {
                    return propertyDecorator(Object.assign({}, info,
                        {settings: settings}));
                }
                return;
            case createDecorator_constant.DECORATOR_TYPE_STATIC_PROPERTY:
                if (staticPropertyDecorator) {
                    return staticPropertyDecorator(Object.assign({}, info,
                        {settings: settings}));
                }
                return;
            case createDecorator_constant.DECORATOR_TYPE_METHOD:
                if (methodDecorator) {
                    return methodDecorator(Object.assign({}, info,
                        {settings: settings}));
                }
                return;
            case createDecorator_constant.DECORATOR_TYPE_STATIC_METHOD:
                if (staticMethodDecorator) {
                    return staticMethodDecorator(Object.assign({}, info,
                        {settings: settings}));
                }
                return;
            case createDecorator_constant.DECORATOR_TYPE_ACCESSOR:
                if (accessorDecorator) {
                    return accessorDecorator(Object.assign({}, info,
                        {settings: settings}));
                }
                return;
            case createDecorator_constant.DECORATOR_TYPE_STATIC_ACCESSOR:
                if (staticAccessorDecorator) {
                    return staticAccessorDecorator(Object.assign({}, info,
                        {settings: settings}));
                }
                return;
            case createDecorator_constant.DECORATOR_TYPE_PARAMETER:
                if (parameterDecorator) {
                    return parameterDecorator(Object.assign({}, info,
                        {settings: settings}));
                }
                return;
            case createDecorator_constant.DECORATOR_TYPE_STATIC_PARAMETER:
                if (staticParameterDecorator) {
                    return staticParameterDecorator(Object.assign({}, info,
                        {settings: settings}));
                }
                return;
            default:
                return;
        }
    }
    return decorator;
}

exports.createDecorator = createDecorator;
//# sourceMappingURL=create-decorator.function.cjs.map
