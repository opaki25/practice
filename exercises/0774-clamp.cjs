// Exercise 0774: Clamp to a symmetric range (78).
// Predict each result before running: node exercises/0774-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-78, Math.min(78, value));
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    0
  ],
  [
    79,
    78
  ],
  [
    -79,
    -78
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0774: all cases passed');
}
