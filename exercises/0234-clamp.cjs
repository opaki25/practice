// Exercise 0234: Clamp to a symmetric range (24).
// Predict each result before running: node exercises/0234-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-24, Math.min(24, value));
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
    25,
    24
  ],
  [
    -25,
    -24
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0234: all cases passed');
}
