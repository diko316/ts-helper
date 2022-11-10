import { __decorate, __metadata } from 'tslib';
import { WEAK_ITERABLE_LOOKUP } from './weak-iterable.constant.mjs';
import { ObjectToStringTag } from '../symbol/object-to-string-tag.decorator.mjs';

let WeakIterable = class WeakIterable {
    get instance() {
        return WEAK_ITERABLE_LOOKUP.get(this);
    }
    constructor(instance) {
        WEAK_ITERABLE_LOOKUP.set(this, instance);
    }
    next() {
        return {
            done: true,
            value: undefined,
        };
    }
};
WeakIterable = __decorate([
    ObjectToStringTag('WeakIterable'),
    __metadata("design:paramtypes", [Object])
], WeakIterable);

export { WeakIterable };
//# sourceMappingURL=weak-iterable.class.mjs.map
