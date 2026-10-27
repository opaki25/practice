// Exercise 0544: Clamp to a symmetric range (55).
// Predict each result before running: node exercises/0544-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-55, Math.min(55, value));
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
    56,
    55
  ],
  [
    -56,
    -55
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0544: all cases passed');
}
