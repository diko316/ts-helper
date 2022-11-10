'use strict';

var store_constant = require('./store.constant.cjs');
var isMetadataKey_function = require('./is-metadata-key.function.cjs');
var isMetadataTarget_function = require('./is-metadata-target.function.cjs');

function getOwnMetadata(key, target, propertyKey) {
    var _a, _b;
    if (!isMetadataKey_function.isMetadataKey(key) || !isMetadataTarget_function.isMetadataTarget(target)) {
        return;
    }
    // store
    return ((_b = (_a = store_constant.METADATA_STORE.get(target)) === null || _a === void 0 ? void 0 : _a.get(isMetadataKey_function.isMetadataKey(propertyKey)
        ? propertyKey
        : store_constant.DEFAULT_METADATA_PROPERTY_KEY)) === null || _b === void 0 ? void 0 : _b.get(key));
}

exports.getOwnMetadata = getOwnMetadata;
//# sourceMappingURL=get-own-metadata.function.cjs.map
