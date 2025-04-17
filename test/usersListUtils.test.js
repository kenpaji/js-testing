import { expect } from 'chai';
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken,
} from '../src/usersListUtils.js';

const mockUsers = [
  { id: 1, name: 'Alice', age: 25, email: 'alice@example.com' },
  { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' },
  { id: 3, name: 'Charlie', age: 35, email: 'charlie@example.com' }
];

describe('usersListUtils', () => {
  describe('filterUsersByAge', () => {
    it('should filter users within the age range', () => {
      const result = filterUsersByAge(mockUsers, 26, 34);
      expect(result).to.deep.equal([
        { id: 2, name: 'Bob', age: 30, email: 'bob@example.com' }
      ]);
    });

    it('should return an empty array if no users match', () => {
      const result = filterUsersByAge(mockUsers, 50, 60);
      expect(result).to.deep.equal([]);
    });

    it('should throw an error if users is not an array', () => {
      expect(() => filterUsersByAge('invalid', 20, 30)).to.throw('Users must be an array');
    });
  });

  describe('sortUsersByName', () => {
    it('should sort users alphabetically by name', () => {
      const shuffled = [mockUsers[2], mockUsers[0], mockUsers[1]];
      const result = sortUsersByName(shuffled);
      expect(result.map(u => u.name)).to.deep.equal(['Alice', 'Bob', 'Charlie']);
    });

    it('should throw an error if users is not an array', () => {
      expect(() => sortUsersByName(null)).to.throw('Users must be an array');
    });
  });

  describe('findUserById', () => {
    it('should return the user with the given id', () => {
      const result = findUserById(mockUsers, 2);
      expect(result).to.deep.equal(mockUsers[1]);
    });

    it('should return null if no user is found', () => {
      const result = findUserById(mockUsers, 999);
      expect(result).to.be.null;
    });

    it('should throw an error if users is not an array', () => {
      expect(() => findUserById({}, 1)).to.throw('Users must be an array');
    });
  });

  describe('isEmailTaken', () => {
    it('should return true if email is found', () => {
      const result = isEmailTaken(mockUsers, 'alice@example.com');
      expect(result).to.be.true;
    });

    it('should return false if email is not found', () => {
      const result = isEmailTaken(mockUsers, 'nobody@example.com');
      expect(result).to.be.false;
    });

    it('should throw an error if users is not an array', () => {
      expect(() => isEmailTaken('string', 'test@example.com')).to.throw('Users must be an array');
    });
  });
});
