// Exercise 0824: Clamp to a symmetric range (83).
// Predict each result before running: node exercises/0824-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-83, Math.min(83, value));
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
    84,
    83
  ],
  [
    -84,
    -83
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0824: all cases passed');
}
