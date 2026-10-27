// Exercise 0584: Clamp to a symmetric range (59).
// Predict each result before running: node exercises/0584-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-59, Math.min(59, value));
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
    60,
    59
  ],
  [
    -60,
    -59
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0584: all cases passed');
}
