'use strict';

var tslib = require('tslib');
var weakIterable_constant = require('./weak-iterable.constant.cjs');
var objectToStringTag_decorator = require('../symbol/object-to-string-tag.decorator.cjs');

exports.WeakIterable = /*@__PURE__*/(function () {
    function WeakIterable(instance) {
        weakIterable_constant.WEAK_ITERABLE_LOOKUP.set(this, instance);
    }

    var prototypeAccessors = { instance: { configurable: true } };
    prototypeAccessors.instance.get = function () {
        return weakIterable_constant.WEAK_ITERABLE_LOOKUP.get(this);
    };

    WeakIterable.prototype.next = function next () {
        return {
            done: true,
            value: undefined,
        };
    };

    Object.defineProperties( WeakIterable.prototype, prototypeAccessors );

    return WeakIterable;
}());
exports.WeakIterable = tslib.__decorate([
    objectToStringTag_decorator.ObjectToStringTag('WeakIterable'),
    tslib.__metadata("design:paramtypes", [Object])
], exports.WeakIterable);
//# sourceMappingURL=weak-iterable.class.cjs.map
