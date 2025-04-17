import { expect } from 'chai';
import { checkStudentKnowledge } from '../src/studentKnowledgeCheckerUtil.js';

describe('checkStudentKnowledge', () => {
  it('should return true when all answers are correct and keys match', () => {
    const student = { q1: 'a', q2: 'b', q3: 'c' };
    const correct = { q1: 'a', q2: 'b', q3: 'c' };
    expect(checkStudentKnowledge(student, correct)).to.be.true;
  });

  it('should return false when at least one answer is incorrect', () => {
    const student = { q1: 'a', q2: 'b', q3: 'wrong' };
    const correct = { q1: 'a', q2: 'b', q3: 'c' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('should return false when number of answers does not match', () => {
    const student = { q1: 'a', q2: 'b' };
    const correct = { q1: 'a', q2: 'b', q3: 'c' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('should return false when keys are different', () => {
    const student = { q1: 'a', qX: 'b', q3: 'c' };
    const correct = { q1: 'a', q2: 'b', q3: 'c' };
    expect(checkStudentKnowledge(student, correct)).to.be.false;
  });

  it('should return true for empty objects', () => {
    expect(checkStudentKnowledge({}, {})).to.be.true;
  });
});
