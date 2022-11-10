import { createDecorator } from './create-decorator.function.mjs';

function createDecoratorFactory({ initialize, ...options }) {
    function factory(...args) {
        return createDecorator({
            ...options,
            settings: initialize(...args),
        });
    }
    return factory;
}

export { createDecoratorFactory };
//# sourceMappingURL=create-decorator-factory.function.mjs.map
