const toJadenCase = require('./toJadenCase');

describe('toJadenCase', () => {
  it('"hello" should return "Hello"', () => {
    expect(toJadenCase('hello')).toBe('Hello');
  });

  it('"hello world" should return "Hello World"', () => {
    expect(toJadenCase('hello world')).toBe('Hello World');
  });

  it('"How can mirrors be real if our eyes arent real" should return "How Can Mirrors Be Real If Our Eyes Arent Real"', () => {
    expect(toJadenCase('How can mirrors be real if our eyes arent real')).toBe('How Can Mirrors Be Real If Our Eyes Arent Real');
  });
});
