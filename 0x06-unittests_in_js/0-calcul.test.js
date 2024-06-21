const assert = require('assert');

const calculateNumber = require('./0-calcul');

describe('sum', () => {
  it('sum of 1 and 4 should 4', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });
  it('sum of 1 and 3.7 should 5', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });
  it('sum of 1.2 and 3.7 should be 5', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });
  it('sum of 1.5 and 3.7 should be 6', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  })
});

