'use strict';

var typeof_constant = require('../validation/typeof.constant.cjs');
require('../validation/is.constant.cjs');
require('../validation/is-numeric.function.cjs');
var isNumeric_constant = require('../validation/is-numeric.constant.cjs');

function numberify(subject, defaultValue) {
    switch (typeof subject) {
        case typeof_constant.TYPEOF_STRING:
            return isNumeric_constant.IS_NUMERIC_STRING_PATTERN.test(subject)
                ? parseFloat(subject)
                : defaultValue;
        case typeof_constant.TYPEOF_NUMBER:
            return isFinite(subject)
                ? subject
                : defaultValue;
        default:
            return defaultValue;
    }
}

exports.numberify = numberify;
//# sourceMappingURL=numberify.function.cjs.map
