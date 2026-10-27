// Exercise 0784: Clamp to a symmetric range (79).
// Predict each result before running: node exercises/0784-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-79, Math.min(79, value));
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
    80,
    79
  ],
  [
    -80,
    -79
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0784: all cases passed');
}
