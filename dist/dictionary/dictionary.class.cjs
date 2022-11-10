'use strict';

var tslib = require('tslib');
var is_function = require('../validation/is.function.cjs');
require('../validation/is-numeric.function.cjs');
var objectToStringTag_decorator = require('../symbol/object-to-string-tag.decorator.cjs');
var dictionaryIterator_class = require('./dictionary-iterator.class.cjs');

exports.Dictionary = /*@__PURE__*/(function () {
    function Dictionary() {
        this.entryState = new Map();
        this.endStates = new Map();
    }

    var prototypeAccessors = { size: { configurable: true } };
    prototypeAccessors.size.get = function () {
        return this.endStates.size;
    };
    Dictionary.prototype[Symbol.iterator] = function () {
        return new dictionaryIterator_class.DictionaryIterator(this);
    };
    Dictionary.prototype.list = function list () {
        var assign;

        var _a;
        var ends = this.endStates;
        var found = [];
        var count = 0;
        var iterator = ends.keys();
        for (var ref = iterator.next(), done = ref.done, value = ref.value; !done; (assign = iterator.next(), done = assign.done, value = assign.value, assign)) {
            found[count++] = ((_a = ends.get(value)) === null || _a === void 0 ? void 0 : _a.slice(0)) || [];
        }
        return found;
    };
    Dictionary.prototype.has = function has (set) {
        if (!is_function.is(Array, set)) {
            return false;
        }
        var length = set.length;
        if (!length) {
            return false;
        }
        var state = this.entryState;
        // find until end of list
        for (var c = 0; length--; c++) {
            var value = set[c];
            if (!state.has(value)) {
                return false;
            }
            state = state.get(value);
        }
        return this.endStates.has(state);
    };
    Dictionary.prototype.add = function add (set) {
        if (!is_function.is(Array, set)) {
            throw new TypeError();
        }
        var length = set.length;
        if (!length) {
            return this;
        }
        var state = this.entryState;
        for (var c = 0; length--; c++) {
            var value = set[c];
            if (state.has(value)) {
                state = state.get(value);
                continue;
            }
            state.set(value, (state = new Map()));
        }
        // register end state
        var ends = this.endStates;
        if (!ends.has(state)) {
            ends.set(state, [].concat( set ));
        }
        return this;
    };
    Dictionary.prototype.remove = function remove (set) {
        var assign;

        if (!is_function.is(Array, set)) {
            return this;
        }
        var length = set.length;
        if (!length) {
            return this;
        }
        var buffer = [];
        var value;
        var bufferCount = 0;
        var failed = false;
        var state = this.entryState;
        // find until end of list
        for (var c = 0; length--; c++) {
            value = set[c];
            // not found
            if (!state.has(value)) {
                failed = true;
                break;
            }
            buffer[bufferCount++] = [state, value];
            state = state.get(value);
        }
        var ends = this.endStates;
        // end state not found!
        if (!ends.has(state) || failed) {
            buffer.splice(0, bufferCount);
            return this;
        }
        // unset buffer
        var endStateBuffer = ends.get(state);
        endStateBuffer === null || endStateBuffer === void 0 ? void 0 : endStateBuffer.splice(0, endStateBuffer.length);
        ends.delete(state);
        for (; bufferCount--;) {
            (assign = buffer[bufferCount], state = assign[0], value = assign[1]);
            var target = state.get(value);
            if (target.size || ends.has(target)) {
                break;
            }
            // delete!
            state.delete(value);
        }
        buffer.splice(0, bufferCount);
        return this;
    };
    Dictionary.prototype.clear = function clear () {
        var assign, assign$1;

        var buffer = [this.entryState];
        var bufferCount = 1;
        for (; bufferCount;) {
            var node = buffer[bufferCount - 1];
            if (!node.size) {
                buffer.length = --bufferCount;
                continue;
            }
            var nodeIterator = node.keys();
            for (var ref = nodeIterator.next(), done = ref.done, key = ref.value; !done; (assign = nodeIterator.next(), done = assign.done, key = assign.value, assign)) {
                var value = node.get(key);
                if (value === null || value === void 0 ? void 0 : value.size) {
                    buffer[bufferCount++] = value;
                    continue;
                }
                node.delete(key);
            }
        }
        var ends = this.endStates;
        var endsIterator = ends.keys();
        for (var ref$1 = endsIterator.next(), done$1 = ref$1.done, state = ref$1.value; !done$1; (assign$1 = endsIterator.next(), done$1 = assign$1.done, state = assign$1.value, assign$1)) {
            var item = ends.get(state);
            if (item) {
                item.splice(0, item.length);
            }
            ends.delete(state);
        }
        return this;
    };
    Dictionary.prototype.itemAt = function itemAt (index) {
        var _a;
        if (index < 0) {
            return;
        }
        var ends = this.endStates;
        if (index >= ends.size) {
            return;
        }
        var iterator = ends.keys();
        for (var c = 0, result = iterator.next(); !result.done; result = iterator.next()) {
            // found!
            if (c++ === index) {
                return ((_a = ends.get(result.value)) === null || _a === void 0 ? void 0 : _a.slice(0)) || [];
            }
        }
        return;
    };
    Dictionary.prototype.indexOf = function indexOf (set) {
        if (!is_function.is(Array, set)) {
            return -1;
        }
        var length = set.length;
        if (!length) {
            return -1;
        }
        var state = this.entryState;
        // find until end of list
        for (var c = 0; length--; c++) {
            var value = set[c];
            if (!state.has(value)) {
                return -1;
            }
            state = state.get(value);
        }
        // find index via ends Order
        var ends = this.endStates;
        var iterator = ends.keys();
        for (var index = 0, result = iterator.next(); !result.done; result = iterator.next()) {
            // found!
            if (result.value === state) {
                return index;
            }
            index++;
        }
        return -1;
    };
    Dictionary.prototype.toString = function toString () {
        return ("Dictionary " + (JSON.stringify(this.list())));
    };
    Dictionary.prototype.toJSON = function toJSON () {
        return ("Dictionary " + (JSON.stringify(this.list())));
    };

    Object.defineProperties( Dictionary.prototype, prototypeAccessors );

    return Dictionary;
}());
exports.Dictionary = tslib.__decorate([
    objectToStringTag_decorator.ObjectToStringTag('Dictionary')
], exports.Dictionary);
//# sourceMappingURL=dictionary.class.cjs.map
