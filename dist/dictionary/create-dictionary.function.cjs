'use strict';

var is_function = require('../validation/is.function.cjs');
require('../validation/is-numeric.function.cjs');
var dictionary_class = require('./dictionary.class.cjs');

function createDictionary(items) {
    if (items && !is_function.is(Array, items)) {
        throw new TypeError();
    }
    var instance = new dictionary_class.Dictionary();
    if (items === null || items === void 0 ? void 0 : items.length) {
        items.forEach(function (item) { return instance.add(item); });
    }
    return instance;
}

exports.createDictionary = createDictionary;
//# sourceMappingURL=create-dictionary.function.cjs.map
