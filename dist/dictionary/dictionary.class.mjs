import { __decorate } from 'tslib';
import { is } from '../validation/is.function.mjs';
import '../validation/is-numeric.function.mjs';
import { ObjectToStringTag } from '../symbol/object-to-string-tag.decorator.mjs';
import { DictionaryIterator } from './dictionary-iterator.class.mjs';

let Dictionary = class Dictionary {
    constructor() {
        this.entryState = new Map();
        this.endStates = new Map();
    }
    get size() {
        return this.endStates.size;
    }
    [Symbol.iterator]() {
        return new DictionaryIterator(this);
    }
    list() {
        var _a;
        const ends = this.endStates;
        const found = [];
        let count = 0;
        const iterator = ends.keys();
        for (let { done, value } = iterator.next(); !done; { done, value } = iterator.next()) {
            found[count++] = ((_a = ends.get(value)) === null || _a === void 0 ? void 0 : _a.slice(0)) || [];
        }
        return found;
    }
    has(set) {
        if (!is(Array, set)) {
            return false;
        }
        let length = set.length;
        if (!length) {
            return false;
        }
        let state = this.entryState;
        // find until end of list
        for (let c = 0; length--; c++) {
            const value = set[c];
            if (!state.has(value)) {
                return false;
            }
            state = state.get(value);
        }
        return this.endStates.has(state);
    }
    add(set) {
        if (!is(Array, set)) {
            throw new TypeError();
        }
        let length = set.length;
        if (!length) {
            return this;
        }
        let state = this.entryState;
        for (let c = 0; length--; c++) {
            const value = set[c];
            if (state.has(value)) {
                state = state.get(value);
                continue;
            }
            state.set(value, (state = new Map()));
        }
        // register end state
        const ends = this.endStates;
        if (!ends.has(state)) {
            ends.set(state, [...set]);
        }
        return this;
    }
    remove(set) {
        if (!is(Array, set)) {
            return this;
        }
        let length = set.length;
        if (!length) {
            return this;
        }
        const buffer = [];
        let value;
        let bufferCount = 0;
        let failed = false;
        let state = this.entryState;
        // find until end of list
        for (let c = 0; length--; c++) {
            value = set[c];
            // not found
            if (!state.has(value)) {
                failed = true;
                break;
            }
            buffer[bufferCount++] = [state, value];
            state = state.get(value);
        }
        const ends = this.endStates;
        // end state not found!
        if (!ends.has(state) || failed) {
            buffer.splice(0, bufferCount);
            return this;
        }
        // unset buffer
        const endStateBuffer = ends.get(state);
        endStateBuffer === null || endStateBuffer === void 0 ? void 0 : endStateBuffer.splice(0, endStateBuffer.length);
        ends.delete(state);
        for (; bufferCount--;) {
            [state, value] = buffer[bufferCount];
            const target = state.get(value);
            if (target.size || ends.has(target)) {
                break;
            }
            // delete!
            state.delete(value);
        }
        buffer.splice(0, bufferCount);
        return this;
    }
    clear() {
        const buffer = [this.entryState];
        let bufferCount = 1;
        for (; bufferCount;) {
            const node = buffer[bufferCount - 1];
            if (!node.size) {
                buffer.length = --bufferCount;
                continue;
            }
            const nodeIterator = node.keys();
            for (let { done, value: key } = nodeIterator.next(); !done; { done, value: key } = nodeIterator.next()) {
                const value = node.get(key);
                if (value === null || value === void 0 ? void 0 : value.size) {
                    buffer[bufferCount++] = value;
                    continue;
                }
                node.delete(key);
            }
        }
        const ends = this.endStates;
        const endsIterator = ends.keys();
        for (let { done, value: state } = endsIterator.next(); !done; { done, value: state } = endsIterator.next()) {
            const item = ends.get(state);
            if (item) {
                item.splice(0, item.length);
            }
            ends.delete(state);
        }
        return this;
    }
    itemAt(index) {
        var _a;
        if (index < 0) {
            return;
        }
        const ends = this.endStates;
        if (index >= ends.size) {
            return;
        }
        const iterator = ends.keys();
        for (let c = 0, result = iterator.next(); !result.done; result = iterator.next()) {
            // found!
            if (c++ === index) {
                return ((_a = ends.get(result.value)) === null || _a === void 0 ? void 0 : _a.slice(0)) || [];
            }
        }
        return;
    }
    indexOf(set) {
        if (!is(Array, set)) {
            return -1;
        }
        let length = set.length;
        if (!length) {
            return -1;
        }
        let state = this.entryState;
        // find until end of list
        for (let c = 0; length--; c++) {
            const value = set[c];
            if (!state.has(value)) {
                return -1;
            }
            state = state.get(value);
        }
        // find index via ends Order
        const ends = this.endStates;
        const iterator = ends.keys();
        for (let index = 0, result = iterator.next(); !result.done; result = iterator.next()) {
            // found!
            if (result.value === state) {
                return index;
            }
            index++;
        }
        return -1;
    }
    toString() {
        return `Dictionary ${JSON.stringify(this.list())}`;
    }
    toJSON() {
        return `Dictionary ${JSON.stringify(this.list())}`;
    }
};
Dictionary = __decorate([
    ObjectToStringTag('Dictionary')
], Dictionary);

export { Dictionary };
//# sourceMappingURL=dictionary.class.mjs.map
