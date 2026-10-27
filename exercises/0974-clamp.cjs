// Exercise 0974: Clamp to a symmetric range (98).
// Predict each result before running: node exercises/0974-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-98, Math.min(98, value));
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
    99,
    98
  ],
  [
    -99,
    -98
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0974: all cases passed');
}
