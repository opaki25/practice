// Exercise 0424: Clamp to a symmetric range (43).
// Predict each result before running: node exercises/0424-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-43, Math.min(43, value));
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
    44,
    43
  ],
  [
    -44,
    -43
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0424: all cases passed');
}
