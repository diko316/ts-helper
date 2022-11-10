'use strict';

var typeof_constant = require('../validation/typeof.constant.cjs');
require('../validation/is.constant.cjs');
require('../validation/is-numeric.function.cjs');
var getGlobal_function = require('../misc/get-global.function.cjs');
var defineMetadata_function = require('./define-metadata.function.cjs');
var getMetadata_function = require('./get-metadata.function.cjs');
var metadata_decorator = require('./metadata.decorator.cjs');
var getOwnMetadata_function = require('./get-own-metadata.function.cjs');
var hasMetadata_function = require('./has-metadata.function.cjs');
var hasOwnMetadata_function = require('./has-own-metadata.function.cjs');

var APPLIED = false;
function getOrSetReflectObject(scope) {
    if (typeof scope.Reflect === typeof_constant.TYPEOF_OBJECT) {
        return scope.Reflect;
    }
    var filler = {};
    scope.Reflect = filler;
    return filler;
}
function applyReflectMethodIf(methodName, polyfill, reflect, target) {
    if (typeof reflect[methodName] === typeof_constant.TYPEOF_FUNCTION) {
        target[methodName] = reflect[methodName];
        return;
    }
    target[methodName] = reflect[methodName] = polyfill;
}
function polyfillMetadata() {
    if (APPLIED) {
        return APPLIED;
    }
    var reflect = getOrSetReflectObject(getGlobal_function.getGlobal());
    APPLIED = {};
    applyReflectMethodIf('metadata', metadata_decorator.metadata, reflect, APPLIED);
    applyReflectMethodIf('defineMetadata', defineMetadata_function.defineMetadata, reflect, APPLIED);
    applyReflectMethodIf('getMetadata', getMetadata_function.getMetadata, reflect, APPLIED);
    applyReflectMethodIf('hasMetadata', hasMetadata_function.hasMetadata, reflect, APPLIED);
    applyReflectMethodIf('getOwnMetadata', getOwnMetadata_function.getOwnMetadata, reflect, APPLIED);
    applyReflectMethodIf('hasOwnMetadata', hasOwnMetadata_function.hasOwnMetadata, reflect, APPLIED);
    return APPLIED;
}

exports.polyfillMetadata = polyfillMetadata;
//# sourceMappingURL=polyfill-metadata.function.cjs.map
