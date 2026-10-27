// Exercise 0908: Raise a value to an integer power (91).
// Predict each result before running: node exercises/0908-power.cjs
'use strict';

function solve(value) {
  return value ** 91;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    1,
    1
  ],
  [
    0,
    0
  ],
  [
    -1,
    -1
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0908: all cases passed');
}
