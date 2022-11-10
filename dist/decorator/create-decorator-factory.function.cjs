'use strict';

var createDecorator_function = require('./create-decorator.function.cjs');

function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }
function createDecoratorFactory(ref) {
    var initialize = ref.initialize;
    var rest = objectWithoutProperties( ref, ["initialize"] );
    var options = rest;

    function factory() {
        var args = [], len = arguments.length;
        while ( len-- ) args[ len ] = arguments[ len ];

        return createDecorator_function.createDecorator(Object.assign({}, options,
            {settings: initialize.apply(void 0, args)}));
    }
    return factory;
}

exports.createDecoratorFactory = createDecoratorFactory;
//# sourceMappingURL=create-decorator-factory.function.cjs.map
