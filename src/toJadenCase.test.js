const toJadenCase = require('./toJadenCase');

describe('toJadenCase', () => {
  it('"hello" should return "Hello"', () => {
    expect(toJadenCase()).toBe('Hello');
  });
});
