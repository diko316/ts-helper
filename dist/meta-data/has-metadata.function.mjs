import { walkPrototype } from '../object/walk-prototype.function.mjs';
import { hasOwnMetadata } from './has-own-metadata.function.mjs';
import { isMetadataKey } from './is-metadata-key.function.mjs';
import { isMetadataTarget } from './is-metadata-target.function.mjs';
import { DEFAULT_METADATA_PROPERTY_KEY } from './store.constant.mjs';

function hasMetadata(key, target, propertyKey) {
    if (!isMetadataTarget(target) || !isMetadataKey(key)) {
        return false;
    }
    const access = isMetadataKey(propertyKey)
        ? propertyKey
        : DEFAULT_METADATA_PROPERTY_KEY;
    function foundMetadata(currentTarget) {
        return hasOwnMetadata(key, currentTarget, access);
    }
    return walkPrototype(target, foundMetadata) !== null;
}

export { hasMetadata };
//# sourceMappingURL=has-metadata.function.mjs.map
