'use strict';

var typeof_constant = require('../validation/typeof.constant.cjs');
require('../validation/is.constant.cjs');
require('../validation/is-numeric.function.cjs');
var store_constant = require('./store.constant.cjs');
var isMetadataKey_function = require('./is-metadata-key.function.cjs');
var isMetadataTarget_function = require('./is-metadata-target.function.cjs');

function defineMetadata(key, value, target, propertyKey) {
    if (!isMetadataKey_function.isMetadataKey(key) || !isMetadataTarget_function.isMetadataTarget(target)) {
        return;
    }
    // don't store undefined!
    if (typeof value === typeof_constant.TYPEOF_UNDEFINED) {
        return;
    }
    var definition = store_constant.METADATA_STORE.get(target);
    if (!definition) {
        store_constant.METADATA_STORE.set(target, (definition = new Map()));
    }
    var access = isMetadataKey_function.isMetadataKey(propertyKey)
        ? propertyKey
        : store_constant.DEFAULT_METADATA_PROPERTY_KEY;
    var property = definition.get(access);
    if (!property) {
        property = new Map();
        definition.set(access, property);
    }
    property.set(key, value);
    return;
}

exports.defineMetadata = defineMetadata;
//# sourceMappingURL=define-metadata.function.cjs.map
