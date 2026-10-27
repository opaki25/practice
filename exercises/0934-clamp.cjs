// Exercise 0934: Clamp to a symmetric range (94).
// Predict each result before running: node exercises/0934-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-94, Math.min(94, value));
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
    95,
    94
  ],
  [
    -95,
    -94
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0934: all cases passed');
}
