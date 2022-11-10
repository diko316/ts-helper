import { TYPEOF_UNDEFINED } from '../validation/typeof.constant.mjs';
import '../validation/is-numeric.function.mjs';
import { METADATA_STORE, DEFAULT_METADATA_PROPERTY_KEY } from './store.constant.mjs';
import { isMetadataKey } from './is-metadata-key.function.mjs';
import { isMetadataTarget } from './is-metadata-target.function.mjs';

function defineMetadata(key, value, target, propertyKey) {
    if (!isMetadataKey(key) || !isMetadataTarget(target)) {
        return;
    }
    // don't store undefined!
    if (typeof value === TYPEOF_UNDEFINED) {
        return;
    }
    let definition = METADATA_STORE.get(target);
    if (!definition) {
        METADATA_STORE.set(target, (definition = new Map()));
    }
    const access = isMetadataKey(propertyKey)
        ? propertyKey
        : DEFAULT_METADATA_PROPERTY_KEY;
    let property = definition.get(access);
    if (!property) {
        property = new Map();
        definition.set(access, property);
    }
    property.set(key, value);
    return;
}

export { defineMetadata };
//# sourceMappingURL=define-metadata.function.mjs.map
