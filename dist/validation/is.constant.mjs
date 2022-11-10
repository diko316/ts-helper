import { TYPEOF_STRING, TYPEOF_SYMBOL, TYPEOF_NUMBER, TYPEOF_BIGINT, TYPEOF_BOOLEAN, TYPEOF_FUNCTION, TYPEOF_OBJECT } from './typeof.constant.mjs';

const PRIMITIVE_TYPE_MAP = {
    [TYPEOF_STRING]: String,
    [TYPEOF_SYMBOL]: Symbol,
    [TYPEOF_NUMBER]: Number,
    [TYPEOF_BIGINT]: BigInt,
    [TYPEOF_BOOLEAN]: Boolean,
    [TYPEOF_FUNCTION]: Function,
    [TYPEOF_OBJECT]: Object,
};

export { PRIMITIVE_TYPE_MAP };
//# sourceMappingURL=is.constant.mjs.map
