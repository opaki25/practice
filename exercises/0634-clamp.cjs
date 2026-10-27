// Exercise 0634: Clamp to a symmetric range (64).
// Predict each result before running: node exercises/0634-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-64, Math.min(64, value));
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
    65,
    64
  ],
  [
    -65,
    -64
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0634: all cases passed');
}
