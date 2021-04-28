import { createTestBody } from '../client/helpers/createAlgo';

test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
});

describe('createTestBody tests', () => {
  it('should return undefined if inputs or outputs are missing', () => {
    expect(createTestBody('(1,2)')).toBe(undefined);
    expect(createTestBody('5,6')).toBe(undefined);
  });
});
