import { numberify } from './numberify.function';

describe('transform/nuberify(subject: AnyType, defaultValue?: AnyType): number | Any', () => {
  it('should transform integer string to number', () => {
    expect(numberify('100')).toBe(100);
  });
  it('should transform float string to number', () => {
    
    // expect(numberify('100.3', null)).toBe(100.3);

    // expect(numberify('100.3')).toBe(100.3);

    expect(numberify('100.3e-2')).toBe(100.3e-2);
    expect(numberify('100.3e+2')).toBe(100.3e+2);
    expect(numberify('100.3e3')).toBe(100.3e3);
  });
});
