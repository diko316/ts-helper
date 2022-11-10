'use strict';

var typeof_constant = require('./typeof.constant.cjs');

var PRIMITIVE_TYPE_MAP = {};
PRIMITIVE_TYPE_MAP[typeof_constant.TYPEOF_STRING] = String;
PRIMITIVE_TYPE_MAP[typeof_constant.TYPEOF_SYMBOL] = Symbol;
PRIMITIVE_TYPE_MAP[typeof_constant.TYPEOF_NUMBER] = Number;
PRIMITIVE_TYPE_MAP[typeof_constant.TYPEOF_BIGINT] = BigInt;
PRIMITIVE_TYPE_MAP[typeof_constant.TYPEOF_BOOLEAN] = Boolean;
PRIMITIVE_TYPE_MAP[typeof_constant.TYPEOF_FUNCTION] = Function;
PRIMITIVE_TYPE_MAP[typeof_constant.TYPEOF_OBJECT] = Object;

exports.PRIMITIVE_TYPE_MAP = PRIMITIVE_TYPE_MAP;
//# sourceMappingURL=is.constant.cjs.map
