import { is } from './is.function';

describe('validation/is(type: TypeofType, subject: AnyType): boolean', () => {
  // boolean
  it('BOOLEAN: should return true if passed subject is boolean.', () => {
    expect(is(Boolean, true)).toBe(true);
    expect(is(Boolean, false)).toBe(true);
  });
  it('BOOLEAN: should return false if passed subject is not boolean.', () => {
    expect(is(Boolean, 0)).toBe(false);
    expect(is(Boolean, '0')).toBe(false);
  });

  // string
  it('STRING: should return true if passed subject is string.', () => {
    expect(is(String, 'test')).toBe(true);
  });
  it('STRING: should return false if passed subject is not string.', () => {
    expect(is(String, 0)).toBe(false);
  });

  // symbol
  it('SYMBOL: should return true if passed subject is symbol.', () => {
    expect(is(Symbol, Symbol())).toBe(true);
    expect(is(Symbol, Symbol('test'))).toBe(true);
  });
  it('SYMBOL: should return false if passed subject is not symbol.', () => {
    expect(is(Symbol, 0)).toBe(false);
  });

  // number
  it('NUMBER: should return true if passed subject is number.', () => {
    expect(is(Number, 0)).toBe(true);
  });

  it('NUMBER: should return false if passed subject is not number.', () => {
    expect(is(Number, 'test')).toBe(false);
    expect(is(Number, 1 / 0)).toBe(false);
    expect(is(Number, BigInt(1))).toBe(false);
    expect(is(Number, 10n)).toBe(false);
  });

  // bigint
  it('BIGINT: should return true if passed subject is bigint.', () => {
    expect(is(BigInt, 3n)).toBe(true);
    expect(is(BigInt, BigInt(30))).toBe(true);
  });

  it('BIGINT: should return false if passed subject is not bigint.', () => {
    expect(is(BigInt, 3)).toBe(false);
    expect(is(BigInt, '30')).toBe(false);
    expect(is(BigInt, 1 / 0)).toBe(false);
  });

  // function
  it('FUNCTION: should return true if passed subject is function.', () => {
    expect(is(Function, () => 1)).toBe(true);
    expect(
      is(Function, function () {
        return 1;
      })
    ).toBe(true);
    expect(is(Function, is)).toBe(true);
  });

  it('FUNCTION: should return false if passed subject is not function.', () => {
    expect(is(Function, 3)).toBe(false);
    expect(is(Function, '30')).toBe(false);
    expect(is(Function, 1 / 0)).toBe(false);
  });

  // object
  it('OBJECT: should return true if passed subject is object.', () => {
    expect(is(Object, {})).toBe(true);
    expect(is(Object, [])).toBe(true);
    expect(is(Object, new Date())).toBe(true);
    expect(is(Object, /buang/)).toBe(true);
  });

  it('OBJECT: should return false if passed subject is not object.', () => {
    expect(is(Object, 3)).toBe(false);
    expect(is(Object, '30')).toBe(false);
    expect(is(Object, 1 / 0)).toBe(false);
    expect(is(Object, () => 1)).toBe(false);
    expect(
      is(Object, function () {
        return 1;
      })
    ).toBe(false);
    expect(is(Object, is)).toBe(false);
    expect(is(Object, null)).toBe(false);
    expect(is(Object, undefined)).toBe(false);
  });

  // RegExp
  it('REG_EXP: should return true if passed subject is RegExp.', () => {
    expect(is(RegExp, /buang/)).toBe(true);
    expect(is(RegExp, new RegExp('buang'))).toBe(true);
  });

  it('REG_EXP: should return false if passed subject is not RegExp.', () => {
    expect(is(RegExp, 3)).toBe(false);
    expect(is(RegExp, '30')).toBe(false);
    expect(is(RegExp, 1 / 0)).toBe(false);
    expect(is(RegExp, () => 1)).toBe(false);
    expect(
      is(RegExp, function () {
        return 1;
      })
    ).toBe(false);
    expect(is(RegExp, is)).toBe(false);
    expect(is(RegExp, null)).toBe(false);
    expect(is(RegExp, undefined)).toBe(false);
    expect(is(RegExp, {})).toBe(false);
    expect(is(RegExp, [])).toBe(false);
    expect(is(RegExp, new Date())).toBe(false);
  });

  // Date
  it('DATE: should return true if passed subject is Date.', () => {
    expect(is(Date, new Date())).toBe(true);
  });

  it('DATE: should return false if passed subject is not Date.', () => {
    expect(is(Date, 3)).toBe(false);
    expect(is(Date, '30')).toBe(false);
    expect(is(Date, 1 / 0)).toBe(false);
    expect(is(Date, () => 1)).toBe(false);
    expect(
      is(Date, function () {
        return 1;
      })
    ).toBe(false);
    expect(is(Date, is)).toBe(false);
    expect(is(Date, null)).toBe(false);
    expect(is(Date, undefined)).toBe(false);
    expect(is(Date, {})).toBe(false);
    expect(is(Date, [])).toBe(false);

    expect(is(Date, /buang/)).toBe(false);
    expect(is(Date, new RegExp('buang'))).toBe(false);
  });

  // Array
  it('ARRAY: should return true if passed subject is Array.', () => {
    expect(is(Array, [])).toBe(true);
  });

  it('ARRAY: should return false if passed subject is not Array.', () => {
    expect(is(Array, 3)).toBe(false);
    expect(is(Array, '30')).toBe(false);
    expect(is(Array, 1 / 0)).toBe(false);
    expect(is(Array, () => 1)).toBe(false);
    expect(
      is(Array, function () {
        return 1;
      })
    ).toBe(false);
    expect(is(Array, is)).toBe(false);
    expect(is(Array, null)).toBe(false);
    expect(is(Array, undefined)).toBe(false);
    expect(is(Array, {})).toBe(false);

    expect(is(Array, /buang/)).toBe(false);
    expect(is(Array, new RegExp('buang'))).toBe(false);

    expect(is(Array, new Date())).toBe(false);
  });

  // Error
  it('ERROR: should return true if passed subject is Error.', () => {
    expect(is(Error, new Error('buang!'))).toBe(true);
    try {
      JSON.parse('buang buang ka! animal!');
    } catch (error) {
      expect(is(Error, error)).toBe(true);
    }
  });

  it('ERROR: should return false if passed subject is not Error.', () => {
    expect(is(Error, 3)).toBe(false);
    expect(is(Error, '30')).toBe(false);
    expect(is(Error, 1 / 0)).toBe(false);
    expect(is(Error, () => 1)).toBe(false);
    expect(
      is(Error, function () {
        return 1;
      })
    ).toBe(false);
    expect(is(Error, is)).toBe(false);
    expect(is(Error, null)).toBe(false);
    expect(is(Error, undefined)).toBe(false);
    expect(is(Error, {})).toBe(false);

    expect(is(Error, /buang/)).toBe(false);
    expect(is(Error, new RegExp('buang'))).toBe(false);

    expect(is(Error, new Date())).toBe(false);
  });
});
