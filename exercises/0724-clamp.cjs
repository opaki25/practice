// Exercise 0724: Clamp to a symmetric range (73).
// Predict each result before running: node exercises/0724-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-73, Math.min(73, value));
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
    74,
    73
  ],
  [
    -74,
    -73
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0724: all cases passed');
}
