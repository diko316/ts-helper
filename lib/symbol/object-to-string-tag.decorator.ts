import { createDecoratorFactory } from '../decorator';
import { is } from '../validation';

export const ObjectToStringTag = createDecoratorFactory({
  initialize(name: string): string {
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
