import { is } from '../validation/is.function.mjs';
import '../validation/is-numeric.function.mjs';
import { Dictionary } from './dictionary.class.mjs';

function createDictionary(items) {
    if (items && !is(Array, items)) {
        throw new TypeError();
    }
    const instance = new Dictionary();
    if (items === null || items === void 0 ? void 0 : items.length) {
        items.forEach((item) => instance.add(item));
    }
    return instance;
}

export { createDictionary };
//# sourceMappingURL=create-dictionary.function.mjs.map
