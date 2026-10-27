// Exercise 0894: Clamp to a symmetric range (90).
// Predict each result before running: node exercises/0894-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-90, Math.min(90, value));
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
    91,
    90
  ],
  [
    -91,
    -90
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0894: all cases passed');
}
