'use strict';

var is_function = require('../validation/is.function.cjs');
require('../validation/is-numeric.function.cjs');
var createDecoratorFactory_function = require('../decorator/create-decorator-factory.function.cjs');

var ObjectToStringTag = createDecoratorFactory_function.createDecoratorFactory({
    initialize: function initialize(name) {
        if (!name || !is_function.is(String, name)) {
            throw new TypeError();
        }
        return name;
    },
    classDecorator: function classDecorator(ref) {
        var name = ref.settings;
        var target = ref.target;

        Object.defineProperty(target.prototype, Symbol.toStringTag, {
            value: name,
            configurable: true,
            enumerable: false,
            writable: false,
        });
    },
});

exports.ObjectToStringTag = ObjectToStringTag;
//# sourceMappingURL=object-to-string-tag.decorator.cjs.map
