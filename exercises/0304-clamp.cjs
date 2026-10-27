// Exercise 0304: Clamp to a symmetric range (31).
// Predict each result before running: node exercises/0304-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-31, Math.min(31, value));
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
    32,
    31
  ],
  [
    -32,
    -31
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0304: all cases passed');
}
