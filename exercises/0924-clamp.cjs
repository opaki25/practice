// Exercise 0924: Clamp to a symmetric range (93).
// Predict each result before running: node exercises/0924-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-93, Math.min(93, value));
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
    94,
    93
  ],
  [
    -94,
    -93
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0924: all cases passed');
}
