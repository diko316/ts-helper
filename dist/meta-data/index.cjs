'use strict';

var polyfillMetadata_function = require('./polyfill-metadata.function.cjs');

var ref = polyfillMetadata_function.polyfillMetadata();
var metadata = ref.metadata;
var defineMetadata = ref.defineMetadata;
var getMetadata = ref.getMetadata;
var hasMetadata = ref.hasMetadata;
var getOwnMetadata = ref.getOwnMetadata;
var hasOwnMetadata = ref.hasOwnMetadata;

exports.defineMetadata = defineMetadata;
exports.getMetadata = getMetadata;
exports.getOwnMetadata = getOwnMetadata;
exports.hasMetadata = hasMetadata;
exports.hasOwnMetadata = hasOwnMetadata;
exports.metadata = metadata;
//# sourceMappingURL=index.cjs.map
