import { __decorate } from 'tslib';
import { ObjectToStringTag } from '../symbol/object-to-string-tag.decorator.mjs';
import { WeakIterable } from '../weak-iterable/weak-iterable.class.mjs';
import { DICTIONARY_ITERATOR_STATE_KEY } from './dictionary-iterator.constant.mjs';

var _a;
let DictionaryIterator = class DictionaryIterator extends WeakIterable {
    constructor() {
        super(...arguments);
        this[_a] = 0;
    }
    next() {
        const instance = this.instance;
        const size = instance.size;
        const index = this[DICTIONARY_ITERATOR_STATE_KEY];
        this[DICTIONARY_ITERATOR_STATE_KEY] = Math.min(index + 1, size);
        if (index < size) {
            return {
                done: false,
                value: instance.itemAt(index),
            };
        }
        return {
            done: true,
            value: instance.itemAt(index),
        };
    }
};
_a = DICTIONARY_ITERATOR_STATE_KEY;
DictionaryIterator = __decorate([
    ObjectToStringTag('DictionaryIterator')
], DictionaryIterator);

export { DictionaryIterator };
//# sourceMappingURL=dictionary-iterator.class.mjs.map
