'use strict';

var is_function = require('../validation/is.function.cjs');
require('../validation/is-numeric.function.cjs');

function walkPrototype(target, callback) {
    if (!is_function.is(Function, target) && !is_function.is(Object, target)) {
        return null;
    }
    if (!is_function.is(Function, callback)) {
        return null;
    }
    var currentTarget = target;
    for (; currentTarget; currentTarget = Object.getPrototypeOf(currentTarget)) {
        var result = callback(currentTarget);
        switch (result) {
            case true: return currentTarget;
            case false: return null;
        }
    }
    return null;
}

exports.walkPrototype = walkPrototype;
//# sourceMappingURL=walk-prototype.function.cjs.map
