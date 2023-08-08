const toJadenCase = require('./toJadenCase');

describe('toJadenCase', () => {
  it('"hello" should return "Hello"', () => {
    expect(toJadenCase('hello')).toBe('Hello');
  });

  it('"hello world" should return "Hello World"', () => {
    expect(toJadenCase('hello world')).toBe('Hello World');
  });
});
