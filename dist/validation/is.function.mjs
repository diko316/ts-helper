import { PRIMITIVE_TYPE_MAP } from './is.constant.mjs';

function is(type, subject) {
    if (typeof type !== 'function') {
        return false;
    }
    switch (type) {
        case Boolean:
        case String:
        case Number:
        case BigInt:
        case Symbol:
        case Function:
        case Object:
            if (PRIMITIVE_TYPE_MAP[typeof subject] !== type) {
                return false;
            }
            switch (type) {
                case Number:
                    return isFinite(subject);
                case Object:
                    return subject !== null;
                default:
                    return true;
            }
        default:
            return subject instanceof type;
    }
}

export { is };
//# sourceMappingURL=is.function.mjs.map
