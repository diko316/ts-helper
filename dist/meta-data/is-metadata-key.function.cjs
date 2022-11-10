'use strict';

var is_function = require('../validation/is.function.cjs');
require('../validation/is-numeric.function.cjs');

function isMetadataKey(key) {
    return (is_function.is(String, key) && key.length > 0) || is_function.is(Symbol, key);
}

exports.isMetadataKey = isMetadataKey;
//# sourceMappingURL=is-metadata-key.function.cjs.map
