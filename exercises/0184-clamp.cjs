// Exercise 0184: Clamp to a symmetric range (19).
// Predict each result before running: node exercises/0184-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-19, Math.min(19, value));
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
    20,
    19
  ],
  [
    -20,
    -19
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0184: all cases passed');
}
