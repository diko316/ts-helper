'use strict';

var defineMetadata_function = require('./define-metadata.function.cjs');

function metadata(key, value) {
    function metaDecorator(target, propertyKey) {
        defineMetadata_function.defineMetadata(key, value, target, propertyKey);
    }
    return metaDecorator;
}

exports.metadata = metadata;
//# sourceMappingURL=metadata.decorator.cjs.map
