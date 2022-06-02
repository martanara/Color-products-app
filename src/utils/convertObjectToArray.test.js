import { convertObjectToArray } from './convertObjectToArray';

describe('convertObjectToArray', () => {
  it('should return array from array', () => {
    expect(convertObjectToArray([1, 2, 3])).toEqual([1, 2, 3]);
    expect(convertObjectToArray(['abc'])).toEqual(['abc']);
    expect(convertObjectToArray([{ foo: 'bar' }])).toEqual([{ foo: 'bar' }]);
    expect(convertObjectToArray([])).toEqual([]);
  });
  it('should return array from object', () => {
    expect(convertObjectToArray({ foo: 'bar' })).toEqual([{ foo: 'bar' }]);
    expect(convertObjectToArray({ foo: [1, 2, 3] })).toEqual([{ foo: [1, 2, 3] }]);
    expect(convertObjectToArray({})).toEqual([{}]);
  });
  it('should return array from string', () => {
    expect(convertObjectToArray('foo')).toEqual(['foo']);
    expect(convertObjectToArray('123')).toEqual(['123']);
    expect(convertObjectToArray('')).toEqual(['']);
  });
  it('should return array from number', () => {
    expect(convertObjectToArray(0)).toEqual([0]);
    expect(convertObjectToArray(1)).toEqual([1]);
    expect(convertObjectToArray(123)).toEqual([123]);
  });
});