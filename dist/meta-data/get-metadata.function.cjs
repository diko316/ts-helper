'use strict';

var walkPrototype_function = require('../object/walk-prototype.function.cjs');
var getOwnMetadata_function = require('./get-own-metadata.function.cjs');
var hasOwnMetadata_function = require('./has-own-metadata.function.cjs');
var isMetadataKey_function = require('./is-metadata-key.function.cjs');
var isMetadataTarget_function = require('./is-metadata-target.function.cjs');
var store_constant = require('./store.constant.cjs');

function getMetadata(key, target, propertyKey) {
    if (!isMetadataTarget_function.isMetadataTarget(target) || !isMetadataKey_function.isMetadataKey(key)) {
        return false;
    }
    var access = isMetadataKey_function.isMetadataKey(propertyKey)
        ? propertyKey
        : store_constant.DEFAULT_METADATA_PROPERTY_KEY;
    function foundMetadata(currentTarget) {
        return hasOwnMetadata_function.hasOwnMetadata(key, currentTarget, access);
    }
    var result = walkPrototype_function.walkPrototype(target, foundMetadata);
    if (!result) {
        return;
    }
    return getOwnMetadata_function.getOwnMetadata(key, result, access);
}

exports.getMetadata = getMetadata;
//# sourceMappingURL=get-metadata.function.cjs.map
