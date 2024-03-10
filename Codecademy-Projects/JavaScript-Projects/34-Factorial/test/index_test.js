const assert = require("assert");
const Calculate = require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 for the factorial 5!, 5 * 4 * 3 * 2 * 1', () => {
      // Setup
      const expectedResult = 120;
      const inputNumber = 5;
      // Exercise
      const result = Calculate.factorial(inputNumber);
      // Verify
      assert.strictEqual(result, expectedResult);
    })

    it('returns 6 for the factorial 3! 3 * 2 * 1', () => {
      // Setup
      const expectedResult = 6;
      const inputNumber = 3;
      // Exercise
      const result = Calculate.factorial(inputNumber);
      // Verify
      assert.strictEqual(result, expectedResult);
    })

    it('returns 1 for the factorial 0!', () => {
      // Setup
      const expectedResult = 1;
      const inputNumber = 0;
      // Exercise
      const result = Calculate.factorial(inputNumber);
      // Verify
      assert.strictEqual(result, expectedResult);
    })
  });
});