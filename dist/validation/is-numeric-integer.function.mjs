import { TYPEOF_NUMBER, TYPEOF_STRING } from './typeof.constant.mjs';
import { IS_NUMERIC_INTEGER_STRING_PATTERN } from './is-numeric.constant.mjs';

function isNumericInteger(subject) {
    switch (typeof subject) {
        case TYPEOF_STRING:
            return IS_NUMERIC_INTEGER_STRING_PATTERN.test(subject);
        case TYPEOF_NUMBER:
            return isFinite(subject);
        default:
            return false;
    }
}

export { isNumericInteger };
//# sourceMappingURL=is-numeric-integer.function.mjs.map
