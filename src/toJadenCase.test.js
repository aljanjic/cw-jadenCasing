const toJadenCase = require('./toJadenCase');

describe('toJadenCase', () => {
  it('should return hello', () => {
    expect(toJadenCase()).toBe('hello');
  });
});
