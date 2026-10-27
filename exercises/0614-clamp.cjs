// Exercise 0614: Clamp to a symmetric range (62).
// Predict each result before running: node exercises/0614-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-62, Math.min(62, value));
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
    63,
    62
  ],
  [
    -63,
    -62
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0614: all cases passed');
}
