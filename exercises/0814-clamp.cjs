// Exercise 0814: Clamp to a symmetric range (82).
// Predict each result before running: node exercises/0814-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-82, Math.min(82, value));
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
    83,
    82
  ],
  [
    -83,
    -82
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0814: all cases passed');
}
