import { METADATA_STORE, DEFAULT_METADATA_PROPERTY_KEY } from './store.constant.mjs';
import { isMetadataKey } from './is-metadata-key.function.mjs';
import { isMetadataTarget } from './is-metadata-target.function.mjs';

function getOwnMetadata(key, target, propertyKey) {
    var _a, _b;
    if (!isMetadataKey(key) || !isMetadataTarget(target)) {
        return;
    }
    // store
    return ((_b = (_a = METADATA_STORE.get(target)) === null || _a === void 0 ? void 0 : _a.get(isMetadataKey(propertyKey)
        ? propertyKey
        : DEFAULT_METADATA_PROPERTY_KEY)) === null || _b === void 0 ? void 0 : _b.get(key));
}

export { getOwnMetadata };
//# sourceMappingURL=get-own-metadata.function.mjs.map
