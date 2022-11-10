import { TYPEOF_NUMBER, TYPEOF_STRING } from '../validation/typeof.constant.mjs';
import '../validation/is-numeric.function.mjs';
import { IS_NUMERIC_STRING_PATTERN } from '../validation/is-numeric.constant.mjs';

function numberify(subject, defaultValue) {
    switch (typeof subject) {
        case TYPEOF_STRING:
            return IS_NUMERIC_STRING_PATTERN.test(subject)
                ? parseFloat(subject)
                : defaultValue;
        case TYPEOF_NUMBER:
            return isFinite(subject)
                ? subject
                : defaultValue;
        default:
            return defaultValue;
    }
}

export { numberify };
//# sourceMappingURL=numberify.function.mjs.map
