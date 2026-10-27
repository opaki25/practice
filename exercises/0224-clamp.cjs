// Exercise 0224: Clamp to a symmetric range (23).
// Predict each result before running: node exercises/0224-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-23, Math.min(23, value));
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
    24,
    23
  ],
  [
    -24,
    -23
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0224: all cases passed');
}
