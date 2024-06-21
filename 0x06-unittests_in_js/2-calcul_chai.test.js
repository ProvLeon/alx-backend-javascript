const chai = require('chai');
const expert = chai.expert;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', () => {
  describe('SUM', () => {
    it('should return  6 when inputs are 1.4 and 4.5', () => {
      expert(calculateNumber('SUM', 1.4, 4.5)).to.equal(6)
    })

    it('should return 0 when inputs are -1.4 and 1.4', () => {
      expert(calculateNumber('SUM', -1.4, 1.4)).to.equal(0)
    })
  })

    describe('SUBTRACT', () => {
      it('should return -4 when inputs are 1.4 and 4.5', () => {
        expert(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4)
      })

      it('should return 1 when inputs are 1.5 and 0.5', () => {
        expert(calculateNumber('SUBTRACT', 1.5, 0.5)).to.equal(1)
      })
    })

    describe('DIVIDE', () => {
      it('should return 0.2 when inputs are 1.4 and 4.5', () => {
        expert(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2)
      })

      it('should return Error when dividing by 0', () => {
        expert(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error')
      })

      it('should return -1 when  inputes are -4.5 and 4.5', () => {
        expert(calculateNumber('DIVIDE', -4.5, 4.4)).to.equal(-1)
      })
    })

    describe('Invalid operation type', () => {
      it('should throw an error for invalid operation type', () => {
        expert(() => calculateNumber('MULTIPLY', 1.4, 4.5)).to.throw('Invalid operation type')
      })
    })
})
