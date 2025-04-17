import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../src/arrayUtils.js';

describe('arrayUtils', () => {
  describe('findMax', () => {
    it('should return the maximum number in the array', () => {
      expect(findMax([1, 2, 3, 4, 5])).to.equal(5);
    });

    it('should throw an error if input is not an array', () => {
      expect(() => findMax('not an array')).to.throw("Input must be an array");
    });
  });

  describe('findMin', () => {
    it('should return the minimum number in the array', () => {
      expect(findMin([1, 2, 3, -5, 0])).to.equal(-5);
    });

    it('should throw an error if input is not an array', () => {
      expect(() => findMin(null)).to.throw("Input must be an array");
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicate values from the array', () => {
      expect(removeDuplicates([1, 2, 2, 3, 3, 3])).to.deep.equal([1, 2, 3]);
    });

    it('should work with an empty array', () => {
      expect(removeDuplicates([])).to.deep.equal([]);
    });

    it('should throw an error if input is not an array', () => {
      expect(() => removeDuplicates({})).to.throw("Input must be an array");
    });
  });
});
