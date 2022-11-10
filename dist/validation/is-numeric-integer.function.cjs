'use strict';

var typeof_constant = require('./typeof.constant.cjs');
var isNumeric_constant = require('./is-numeric.constant.cjs');

function isNumericInteger(subject) {
    switch (typeof subject) {
        case typeof_constant.TYPEOF_STRING:
            return isNumeric_constant.IS_NUMERIC_INTEGER_STRING_PATTERN.test(subject);
        case typeof_constant.TYPEOF_NUMBER:
            return isFinite(subject);
        default:
            return false;
    }
}

exports.isNumericInteger = isNumericInteger;
//# sourceMappingURL=is-numeric-integer.function.cjs.map
