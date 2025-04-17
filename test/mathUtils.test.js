import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../src/mathUtils.js';

describe('mathUtils', () => {
  describe('add', () => {
    it('should return the sum of two numbers', () => {
      expect(add(2, 3)).to.equal(5);
    });
  });

  describe('subtract', () => {
    it('should return the difference of two numbers', () => {
      expect(subtract(10, 4)).to.equal(6);
    });
  });

  describe('multiply', () => {
    it('should return the product of two numbers', () => {
      expect(multiply(3, 4)).to.equal(12);
    });
  });

  describe('divide', () => {
    it('should return the quotient of two numbers', () => {
      expect(divide(20, 4)).to.equal(5);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(10, 0)).to.throw("Cannot divide by zero");
    });
  });
});
