import { defineMetadata } from './define-metadata.function.mjs';

function metadata(key, value) {
    function metaDecorator(target, propertyKey) {
        defineMetadata(key, value, target, propertyKey);
    }
    return metaDecorator;
}

export { metadata };
//# sourceMappingURL=metadata.decorator.mjs.map
