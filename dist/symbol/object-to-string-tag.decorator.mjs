import { is } from '../validation/is.function.mjs';
import '../validation/is-numeric.function.mjs';
import { createDecoratorFactory } from '../decorator/create-decorator-factory.function.mjs';

const ObjectToStringTag = createDecoratorFactory({
    initialize(name) {
        if (!name || !is(String, name)) {
            throw new TypeError();
        }
        return name;
    },
    classDecorator({ settings: name, target }) {
        Object.defineProperty(target.prototype, Symbol.toStringTag, {
            value: name,
            configurable: true,
            enumerable: false,
            writable: false,
        });
    },
});

export { ObjectToStringTag };
//# sourceMappingURL=object-to-string-tag.decorator.mjs.map
