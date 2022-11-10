'use strict';

var tslib = require('tslib');
var objectToStringTag_decorator = require('../symbol/object-to-string-tag.decorator.cjs');
var weakIterable_class = require('../weak-iterable/weak-iterable.class.cjs');
var dictionaryIterator_constant = require('./dictionary-iterator.constant.cjs');

var _a;
exports.DictionaryIterator = /*@__PURE__*/(function (WeakIterable) {
    function DictionaryIterator() {
        WeakIterable.apply(this, arguments);
        this[_a] = 0;
    }

    if ( WeakIterable ) DictionaryIterator.__proto__ = WeakIterable;
    DictionaryIterator.prototype = Object.create( WeakIterable && WeakIterable.prototype );
    DictionaryIterator.prototype.constructor = DictionaryIterator;
    DictionaryIterator.prototype.next = function next () {
        var instance = this.instance;
        var size = instance.size;
        var index = this[dictionaryIterator_constant.DICTIONARY_ITERATOR_STATE_KEY];
        this[dictionaryIterator_constant.DICTIONARY_ITERATOR_STATE_KEY] = Math.min(index + 1, size);
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
    };

    return DictionaryIterator;
}(weakIterable_class.WeakIterable));
_a = dictionaryIterator_constant.DICTIONARY_ITERATOR_STATE_KEY;
exports.DictionaryIterator = tslib.__decorate([
    objectToStringTag_decorator.ObjectToStringTag('DictionaryIterator')
], exports.DictionaryIterator);
//# sourceMappingURL=dictionary-iterator.class.cjs.map
