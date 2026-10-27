// Exercise 0834: Clamp to a symmetric range (84).
// Predict each result before running: node exercises/0834-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-84, Math.min(84, value));
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
    85,
    84
  ],
  [
    -85,
    -84
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0834: all cases passed');
}
