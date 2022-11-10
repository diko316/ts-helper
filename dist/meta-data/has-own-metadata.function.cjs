'use strict';

var isMetadataKey_function = require('./is-metadata-key.function.cjs');
var isMetadataTarget_function = require('./is-metadata-target.function.cjs');
var store_constant = require('./store.constant.cjs');

function hasOwnMetadata(key, target, propertyKey) {
    if (!isMetadataKey_function.isMetadataKey(key) || !isMetadataTarget_function.isMetadataTarget(target)) {
        return false;
    }
    var definition = store_constant.METADATA_STORE.get(target);
    if (!definition) {
        return false;
    }
    var property = definition.get(isMetadataKey_function.isMetadataKey(propertyKey)
        ? propertyKey
        : store_constant.DEFAULT_METADATA_PROPERTY_KEY);
    if (!property) {
        return false;
    }
    return property.has(key);
}

exports.hasOwnMetadata = hasOwnMetadata;
//# sourceMappingURL=has-own-metadata.function.cjs.map
