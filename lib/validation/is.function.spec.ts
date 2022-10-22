import { is } from './is.function';
import {
  TYPEOF_ARRAY,
  TYPEOF_BIGINT,
  TYPEOF_BOOLEAN,
  TYPEOF_DATE,
  TYPEOF_ERROR,
  TYPEOF_FUNCTION,
  TYPEOF_NUMBER,
  TYPEOF_OBJECT,
  TYPEOF_REG_EXP,
  TYPEOF_STRING,
  TYPEOF_SYMBOL,
  TYPEOF_UNDEFINED,
} from './typeof.constant';

describe('validation/is(type: TypeofType, subject: AnyType): boolean', () => {
  // undefined
  it('UNDEFINED: should return true if passed subject is undefined.', () => {
    expect(is(TYPEOF_UNDEFINED)).toBe(true);
    expect(is(TYPEOF_UNDEFINED, undefined)).toBe(true);
  });
  it('UNDEFINED: should return false if passed subject is not undefined.', () => {
    expect(is(TYPEOF_UNDEFINED, 0)).toBe(false);
  });

  // boolean
  it('BOOLEAN: should return true if passed subject is boolean.', () => {
    expect(is(TYPEOF_BOOLEAN, true)).toBe(true);
    expect(is(TYPEOF_BOOLEAN, false)).toBe(true);
  });
  it('BOOLEAN: should return false if passed subject is not boolean.', () => {
    expect(is(TYPEOF_BOOLEAN, 0)).toBe(false);
    expect(is(TYPEOF_BOOLEAN, '0')).toBe(false);
  });

  // string
  it('STRING: should return true if passed subject is string.', () => {
    expect(is(TYPEOF_STRING, 'test')).toBe(true);
  });
  it('STRING: should return false if passed subject is not string.', () => {
    expect(is(TYPEOF_STRING, 0)).toBe(false);
  });

  // symbol
  it('SYMBOL: should return true if passed subject is symbol.', () => {
    expect(is(TYPEOF_SYMBOL, Symbol())).toBe(true);
    expect(is(TYPEOF_SYMBOL, Symbol('test'))).toBe(true);
  });
  it('SYMBOL: should return false if passed subject is not symbol.', () => {
    expect(is(TYPEOF_SYMBOL, 0)).toBe(false);
  });

  // number
  it('NUMBER: should return true if passed subject is number.', () => {
    expect(is(TYPEOF_NUMBER, 0)).toBe(true);
  });

  it('NUMBER: should return false if passed subject is not number.', () => {
    expect(is(TYPEOF_NUMBER, 'test')).toBe(false);
    expect(is(TYPEOF_NUMBER, 1 / 0)).toBe(false);
    expect(is(TYPEOF_NUMBER, BigInt(1))).toBe(false);
    expect(is(TYPEOF_NUMBER, 10n)).toBe(false);
  });

  // bigint
  it('BIGINT: should return true if passed subject is bigint.', () => {
    expect(is(TYPEOF_BIGINT, 3n)).toBe(true);
    expect(is(TYPEOF_BIGINT, BigInt(30))).toBe(true);
  });

  it('BIGINT: should return false if passed subject is not bigint.', () => {
    expect(is(TYPEOF_BIGINT, 3)).toBe(false);
    expect(is(TYPEOF_BIGINT, '30')).toBe(false);
    expect(is(TYPEOF_BIGINT, 1 / 0)).toBe(false);
  });

  // function
  it('FUNCTION: should return true if passed subject is function.', () => {
    expect(is(TYPEOF_FUNCTION, () => 1)).toBe(true);
    expect(
      is(TYPEOF_FUNCTION, function () {
        return 1;
      })
    ).toBe(true);
    expect(is(TYPEOF_FUNCTION, is)).toBe(true);
  });

  it('FUNCTION: should return false if passed subject is not function.', () => {
    expect(is(TYPEOF_FUNCTION, 3)).toBe(false);
    expect(is(TYPEOF_FUNCTION, '30')).toBe(false);
    expect(is(TYPEOF_FUNCTION, 1 / 0)).toBe(false);
  });

  // object
  it('OBJECT: should return true if passed subject is object.', () => {
    expect(is(TYPEOF_OBJECT, {})).toBe(true);
    expect(is(TYPEOF_OBJECT, [])).toBe(true);
    expect(is(TYPEOF_OBJECT, new Date())).toBe(true);
    expect(is(TYPEOF_OBJECT, /buang/)).toBe(true);
  });

  it('OBJECT: should return false if passed subject is not object.', () => {
    expect(is(TYPEOF_OBJECT, 3)).toBe(false);
    expect(is(TYPEOF_OBJECT, '30')).toBe(false);
    expect(is(TYPEOF_OBJECT, 1 / 0)).toBe(false);
    expect(is(TYPEOF_OBJECT, () => 1)).toBe(false);
    expect(
      is(TYPEOF_OBJECT, function () {
        return 1;
      })
    ).toBe(false);
    expect(is(TYPEOF_OBJECT, is)).toBe(false);
    expect(is(TYPEOF_OBJECT, null)).toBe(false);
    expect(is(TYPEOF_OBJECT, undefined)).toBe(false);
  });

  // RegExp
  it('REG_EXP: should return true if passed subject is RegExp.', () => {
    expect(is(TYPEOF_REG_EXP, /buang/)).toBe(true);
    expect(is(TYPEOF_REG_EXP, new RegExp('buang'))).toBe(true);
  });

  it('REG_EXP: should return false if passed subject is not RegExp.', () => {
    expect(is(TYPEOF_REG_EXP, 3)).toBe(false);
    expect(is(TYPEOF_REG_EXP, '30')).toBe(false);
    expect(is(TYPEOF_REG_EXP, 1 / 0)).toBe(false);
    expect(is(TYPEOF_REG_EXP, () => 1)).toBe(false);
    expect(
      is(TYPEOF_REG_EXP, function () {
        return 1;
      })
    ).toBe(false);
    expect(is(TYPEOF_REG_EXP, is)).toBe(false);
    expect(is(TYPEOF_REG_EXP, null)).toBe(false);
    expect(is(TYPEOF_REG_EXP, undefined)).toBe(false);
    expect(is(TYPEOF_REG_EXP, {})).toBe(false);
    expect(is(TYPEOF_REG_EXP, [])).toBe(false);
    expect(is(TYPEOF_REG_EXP, new Date())).toBe(false);
  });

  // Date
  it('DATE: should return true if passed subject is Date.', () => {
    expect(is(TYPEOF_DATE, new Date())).toBe(true);
  });

  it('DATE: should return false if passed subject is not Date.', () => {
    expect(is(TYPEOF_DATE, 3)).toBe(false);
    expect(is(TYPEOF_DATE, '30')).toBe(false);
    expect(is(TYPEOF_DATE, 1 / 0)).toBe(false);
    expect(is(TYPEOF_DATE, () => 1)).toBe(false);
    expect(
      is(TYPEOF_DATE, function () {
        return 1;
      })
    ).toBe(false);
    expect(is(TYPEOF_DATE, is)).toBe(false);
    expect(is(TYPEOF_DATE, null)).toBe(false);
    expect(is(TYPEOF_DATE, undefined)).toBe(false);
    expect(is(TYPEOF_DATE, {})).toBe(false);
    expect(is(TYPEOF_DATE, [])).toBe(false);

    expect(is(TYPEOF_DATE, /buang/)).toBe(false);
    expect(is(TYPEOF_DATE, new RegExp('buang'))).toBe(false);
  });

  // Array
  it('ARRAY: should return true if passed subject is Array.', () => {
    expect(is(TYPEOF_ARRAY, [])).toBe(true);
  });

  it('ARRAY: should return false if passed subject is not Array.', () => {
    expect(is(TYPEOF_ARRAY, 3)).toBe(false);
    expect(is(TYPEOF_ARRAY, '30')).toBe(false);
    expect(is(TYPEOF_ARRAY, 1 / 0)).toBe(false);
    expect(is(TYPEOF_ARRAY, () => 1)).toBe(false);
    expect(
      is(TYPEOF_ARRAY, function () {
        return 1;
      })
    ).toBe(false);
    expect(is(TYPEOF_ARRAY, is)).toBe(false);
    expect(is(TYPEOF_ARRAY, null)).toBe(false);
    expect(is(TYPEOF_ARRAY, undefined)).toBe(false);
    expect(is(TYPEOF_ARRAY, {})).toBe(false);

    expect(is(TYPEOF_ARRAY, /buang/)).toBe(false);
    expect(is(TYPEOF_ARRAY, new RegExp('buang'))).toBe(false);

    expect(is(TYPEOF_ARRAY, new Date())).toBe(false);
  });

  // Error
  it('ERROR: should return true if passed subject is Error.', () => {
    expect(is(TYPEOF_ERROR, new Error('buang!'))).toBe(true);
    try {
      JSON.parse('buang buang ka! animal!');
    } catch (error) {
      expect(is(TYPEOF_ERROR, error)).toBe(true);
    }
  });

  it('ERROR: should return false if passed subject is not Error.', () => {
    expect(is(TYPEOF_ERROR, 3)).toBe(false);
    expect(is(TYPEOF_ERROR, '30')).toBe(false);
    expect(is(TYPEOF_ERROR, 1 / 0)).toBe(false);
    expect(is(TYPEOF_ERROR, () => 1)).toBe(false);
    expect(
      is(TYPEOF_ERROR, function () {
        return 1;
      })
    ).toBe(false);
    expect(is(TYPEOF_ERROR, is)).toBe(false);
    expect(is(TYPEOF_ERROR, null)).toBe(false);
    expect(is(TYPEOF_ERROR, undefined)).toBe(false);
    expect(is(TYPEOF_ERROR, {})).toBe(false);

    expect(is(TYPEOF_ERROR, /buang/)).toBe(false);
    expect(is(TYPEOF_ERROR, new RegExp('buang'))).toBe(false);

    expect(is(TYPEOF_ERROR, new Date())).toBe(false);
  });
});
