import { IS_NUMERIC_STRING_PATTERN } from './is-numeric.constant.mjs';
import { TYPEOF_NUMBER, TYPEOF_STRING } from './typeof.constant.mjs';

function isNumeric(subject) {
    switch (typeof subject) {
        case TYPEOF_STRING:
            return IS_NUMERIC_STRING_PATTERN.test(subject);
        case TYPEOF_NUMBER:
            return isFinite(subject);
        default:
            return false;
    }
}
const c = 'buang';
if (isNumeric(c)) {
    console.log('numeric ', c);
}
if (isNumeric(c)) {
    console.log('numeric ', c);
}

export { isNumeric };
//# sourceMappingURL=is-numeric.function.mjs.map
