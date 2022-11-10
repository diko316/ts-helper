import { createDictionary } from './create-dictionary.function';
import { Dictionary } from './dictionary.type';

describe('dictionary/Dictionary', () => {
  const objectElement = { name: 'diko' };
  const items = [
    [1],
    [1, 2],
    [1, null, 'test', objectElement],
    [2, 'test', 3],
    [4, null, 5],
    [2, undefined, 4],
  ];
  let dictionary: Dictionary<
    Array<number | string | null | undefined | typeof objectElement>
  >;

  beforeEach(() => {
    dictionary = createDictionary(items);
  });

  afterEach(() => dictionary.clear());

  it('should be able to add different types of input including undefined and null', () => {
    expect(dictionary.has([1])).toBe(true);
    expect(dictionary.has([1, 2])).toBe(true);
    expect(dictionary.has([1, null, 'test', objectElement])).toBe(true);
    expect(dictionary.has([2, 'test', 3])).toBe(true);
    expect(dictionary.has([4, null, 5])).toBe(true);
    expect(dictionary.has([2, undefined, 4])).toBe(true);

    expect(dictionary.list().length).toBe(items.length);
  });

  it('should be able to add additional items', () => {
    dictionary.add(['test', 3, objectElement]);

    expect(dictionary.has(['test', 3, objectElement])).toBe(true);
  });

  it('should retain order of items based on how items were added.', () => {
    expect(dictionary.indexOf([2, undefined, 4])).toBe(5);
    expect(dictionary.indexOf(['buang', null, objectElement])).toBe(-1);

    expect(dictionary.indexOf([2, 'test', 3])).toBe(3);
  });
});
