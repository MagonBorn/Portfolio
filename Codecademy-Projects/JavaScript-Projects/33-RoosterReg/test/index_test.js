const assert = require('assert');
const Rooster = require('../index.js');

// ----------Rooster Object Tests----------
describe('Rooster', function () {
  // -----.announceDawn function tests----------
  describe('.announceDawn', function () {
    it('returns a rooster call', function () {
      // Setup
      const expected = 'cock-a-doodle-doo!';

      // Exercise
      const result = Rooster.announceDawn();

      // Verify
      assert.strictEqual(result, expected);
    });
  });

  // ----------.timeAtDawn function tests----------
  describe('.timeAtDawn', function () {
    it('returns its argument as a string', function () {
      // Setup
      const expected = '12';
      const inputNumber = 12;

      // Exercise
      const result = Rooster.timeAtDawn(inputNumber);

      // Verify
      assert.strictEqual(result, expected);
    });

    it('throws an error if passed a number less than 0', function () {
      // Setup
      const inputNumber = -1;

      // Verify
      assert.throws(function () {
        Rooster.timeAtDawn(inputNumber)
      }, RangeError);
    });

    it('throws an error if passed a number more than 23', function () {
      // Setup
      const inputNumber = 25;

      // Verify
      assert.throws(function () {
        Rooster.timeAtDawn(inputNumber)
      }, RangeError);
    });
  });
})