// Exercise 0244: Clamp to a symmetric range (25).
// Predict each result before running: node exercises/0244-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-25, Math.min(25, value));
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
    26,
    25
  ],
  [
    -26,
    -25
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0244: all cases passed');
}
