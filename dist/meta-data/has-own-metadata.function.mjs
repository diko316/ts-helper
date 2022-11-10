import { isMetadataKey } from './is-metadata-key.function.mjs';
import { isMetadataTarget } from './is-metadata-target.function.mjs';
import { METADATA_STORE, DEFAULT_METADATA_PROPERTY_KEY } from './store.constant.mjs';

function hasOwnMetadata(key, target, propertyKey) {
    if (!isMetadataKey(key) || !isMetadataTarget(target)) {
        return false;
    }
    const definition = METADATA_STORE.get(target);
    if (!definition) {
        return false;
    }
    const property = definition.get(isMetadataKey(propertyKey)
        ? propertyKey
        : DEFAULT_METADATA_PROPERTY_KEY);
    if (!property) {
        return false;
    }
    return property.has(key);
}

export { hasOwnMetadata };
//# sourceMappingURL=has-own-metadata.function.mjs.map
