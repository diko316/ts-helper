import { walkPrototype } from '../object/walk-prototype.function.mjs';
import { getOwnMetadata } from './get-own-metadata.function.mjs';
import { hasOwnMetadata } from './has-own-metadata.function.mjs';
import { isMetadataKey } from './is-metadata-key.function.mjs';
import { isMetadataTarget } from './is-metadata-target.function.mjs';
import { DEFAULT_METADATA_PROPERTY_KEY } from './store.constant.mjs';

function getMetadata(key, target, propertyKey) {
    if (!isMetadataTarget(target) || !isMetadataKey(key)) {
        return false;
    }
    const access = isMetadataKey(propertyKey)
        ? propertyKey
        : DEFAULT_METADATA_PROPERTY_KEY;
    function foundMetadata(currentTarget) {
        return hasOwnMetadata(key, currentTarget, access);
    }
    const result = walkPrototype(target, foundMetadata);
    if (!result) {
        return;
    }
    return getOwnMetadata(key, result, access);
}

export { getMetadata };
//# sourceMappingURL=get-metadata.function.mjs.map
