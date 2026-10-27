// Exercise 0134: Clamp to a symmetric range (14).
// Predict each result before running: node exercises/0134-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-14, Math.min(14, value));
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
    15,
    14
  ],
  [
    -15,
    -14
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0134: all cases passed');
}
