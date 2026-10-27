// Exercise 0414: Clamp to a symmetric range (42).
// Predict each result before running: node exercises/0414-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-42, Math.min(42, value));
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
    43,
    42
  ],
  [
    -43,
    -42
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0414: all cases passed');
}
