'use strict';

var is_function = require('../validation/is.function.cjs');
require('../validation/is-numeric.function.cjs');

function isMetadataTarget(target) {
    return is_function.is(Object, target) || is_function.is(Function, target);
}

exports.isMetadataTarget = isMetadataTarget;
//# sourceMappingURL=is-metadata-target.function.cjs.map
