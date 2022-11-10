'use strict';

var typeof_constant = require('../validation/typeof.constant.cjs');
require('../validation/is.constant.cjs');
require('../validation/is-numeric.function.cjs');

function getGlobal() {
    if (typeof globalThis === typeof_constant.TYPEOF_OBJECT) {
        return globalThis;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof self === typeof_constant.TYPEOF_OBJECT) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return self;
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (typeof window === typeof_constant.TYPEOF_OBJECT) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        return window;
    }
    if (typeof global === typeof_constant.TYPEOF_OBJECT) {
        return global;
    }
    return new Function('return this')();
}

exports.getGlobal = getGlobal;
//# sourceMappingURL=get-global.function.cjs.map
