// Exercise 0034: Clamp to a symmetric range (4).
// Predict each result before running: node exercises/0034-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-4, Math.min(4, value));
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
    5,
    4
  ],
  [
    -5,
    -4
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0034: all cases passed');
}
