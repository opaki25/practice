// Exercise 0524: Clamp to a symmetric range (53).
// Predict each result before running: node exercises/0524-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-53, Math.min(53, value));
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
    54,
    53
  ],
  [
    -54,
    -53
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0524: all cases passed');
}
