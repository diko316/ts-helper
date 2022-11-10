import { is } from '../validation/is.function.mjs';
import '../validation/is-numeric.function.mjs';

function walkPrototype(target, callback) {
    if (!is(Function, target) && !is(Object, target)) {
        return null;
    }
    if (!is(Function, callback)) {
        return null;
    }
    let currentTarget = target;
    for (; currentTarget; currentTarget = Object.getPrototypeOf(currentTarget)) {
        const result = callback(currentTarget);
        switch (result) {
            case true: return currentTarget;
            case false: return null;
        }
    }
    return null;
}

export { walkPrototype };
//# sourceMappingURL=walk-prototype.function.mjs.map
