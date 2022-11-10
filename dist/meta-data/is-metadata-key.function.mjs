import { is } from '../validation/is.function.mjs';
import '../validation/is-numeric.function.mjs';

function isMetadataKey(key) {
    return (is(String, key) && key.length > 0) || is(Symbol, key);
}

export { isMetadataKey };
//# sourceMappingURL=is-metadata-key.function.mjs.map
