// Exercise 0918: Raise a value to an integer power (92).
// Predict each result before running: node exercises/0918-power.cjs
'use strict';

function solve(value) {
  return value ** 92;
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
    1
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0918: all cases passed');
}
