// Exercise 0848: Raise a value to an integer power (85).
// Predict each result before running: node exercises/0848-power.cjs
'use strict';

function solve(value) {
  return value ** 85;
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
  console.log('Exercise 0848: all cases passed');
}
