// Exercise 0284: Clamp to a symmetric range (29).
// Predict each result before running: node exercises/0284-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-29, Math.min(29, value));
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
    30,
    29
  ],
  [
    -30,
    -29
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0284: all cases passed');
}
