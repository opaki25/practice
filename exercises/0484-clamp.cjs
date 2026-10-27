// Exercise 0484: Clamp to a symmetric range (49).
// Predict each result before running: node exercises/0484-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-49, Math.min(49, value));
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
    50,
    49
  ],
  [
    -50,
    -49
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0484: all cases passed');
}
