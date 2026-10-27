// Exercise 0324: Clamp to a symmetric range (33).
// Predict each result before running: node exercises/0324-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-33, Math.min(33, value));
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
    34,
    33
  ],
  [
    -34,
    -33
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0324: all cases passed');
}
