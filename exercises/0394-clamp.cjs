// Exercise 0394: Clamp to a symmetric range (40).
// Predict each result before running: node exercises/0394-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-40, Math.min(40, value));
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
    41,
    40
  ],
  [
    -41,
    -40
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0394: all cases passed');
}
