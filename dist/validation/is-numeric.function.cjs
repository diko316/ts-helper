'use strict';

var isNumeric_constant = require('./is-numeric.constant.cjs');
var typeof_constant = require('./typeof.constant.cjs');

function isNumeric(subject) {
    switch (typeof subject) {
        case typeof_constant.TYPEOF_STRING:
            return isNumeric_constant.IS_NUMERIC_STRING_PATTERN.test(subject);
        case typeof_constant.TYPEOF_NUMBER:
            return isFinite(subject);
        default:
            return false;
    }
}
var c = 'buang';
if (isNumeric(c)) {
    console.log('numeric ', c);
}
if (isNumeric(c)) {
    console.log('numeric ', c);
}

exports.isNumeric = isNumeric;
//# sourceMappingURL=is-numeric.function.cjs.map
