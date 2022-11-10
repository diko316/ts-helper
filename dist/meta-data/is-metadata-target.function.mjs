import { is } from '../validation/is.function.mjs';
import '../validation/is-numeric.function.mjs';

function isMetadataTarget(target) {
    return is(Object, target) || is(Function, target);
}

export { isMetadataTarget };
//# sourceMappingURL=is-metadata-target.function.mjs.map
