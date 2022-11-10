import { TYPEOF_OBJECT, TYPEOF_FUNCTION } from '../validation/typeof.constant.mjs';
import '../validation/is-numeric.function.mjs';
import { getGlobal } from '../misc/get-global.function.mjs';
import { defineMetadata } from './define-metadata.function.mjs';
import { getMetadata } from './get-metadata.function.mjs';
import { metadata } from './metadata.decorator.mjs';
import { getOwnMetadata } from './get-own-metadata.function.mjs';
import { hasMetadata } from './has-metadata.function.mjs';
import { hasOwnMetadata } from './has-own-metadata.function.mjs';

let APPLIED = false;
function getOrSetReflectObject(scope) {
    if (typeof scope.Reflect === TYPEOF_OBJECT) {
        return scope.Reflect;
    }
    const filler = {};
    scope.Reflect = filler;
    return filler;
}
function applyReflectMethodIf(methodName, polyfill, reflect, target) {
    if (typeof reflect[methodName] === TYPEOF_FUNCTION) {
        target[methodName] = reflect[methodName];
        return;
    }
    target[methodName] = reflect[methodName] = polyfill;
}
function polyfillMetadata() {
    if (APPLIED) {
        return APPLIED;
    }
    const reflect = getOrSetReflectObject(getGlobal());
    APPLIED = {};
    applyReflectMethodIf('metadata', metadata, reflect, APPLIED);
    applyReflectMethodIf('defineMetadata', defineMetadata, reflect, APPLIED);
    applyReflectMethodIf('getMetadata', getMetadata, reflect, APPLIED);
    applyReflectMethodIf('hasMetadata', hasMetadata, reflect, APPLIED);
    applyReflectMethodIf('getOwnMetadata', getOwnMetadata, reflect, APPLIED);
    applyReflectMethodIf('hasOwnMetadata', hasOwnMetadata, reflect, APPLIED);
    return APPLIED;
}

export { polyfillMetadata };
//# sourceMappingURL=polyfill-metadata.function.mjs.map
