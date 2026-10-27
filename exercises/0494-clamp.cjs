// Exercise 0494: Clamp to a symmetric range (50).
// Predict each result before running: node exercises/0494-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-50, Math.min(50, value));
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
    51,
    50
  ],
  [
    -51,
    -50
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0494: all cases passed');
}
