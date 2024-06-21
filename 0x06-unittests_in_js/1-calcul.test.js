const assert = require('assert')
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return  6 when inputs are 1.4 and 4.5', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6)
    })

    it('should return 0 when inputs are -1.4 and 1.4', () => {
      assert.strictEqual(calculateNumber('SUM', -1.4, 1.4), 0)
    })
  })

    describe('SUBTRACT', () => {
      it('should return -4 when inputs are 1.4 and 4.5', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4)
      })

      it('should return 1 when inputs are 1.5 and 0.5', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.5, 0.5), 1)
      })
    })

    describe('DIVIDE', () => {
      it('should return 0.2 when inputs are 1.4 and 4.5', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2)
      })

      it('should return Error when dividing by 0', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error')
      })

      it('should return -1 when  inputes are -4.5 and 4.5', () => {
        assert.strictEqual(calculateNumber('DIVIDE', -4.5, 4.4), -1)
      })
    })

    describe('Invalid operation type', () => {
      it('should throw an error for invalid operation type', () => {
        assert.throws(() => {
          calculateNumber('MULTIPLY', 1.4, 4.5)
        }, /Invalid operation type/)
      })
    })
})
