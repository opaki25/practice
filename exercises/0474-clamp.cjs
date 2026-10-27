// Exercise 0474: Clamp to a symmetric range (48).
// Predict each result before running: node exercises/0474-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-48, Math.min(48, value));
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
    49,
    48
  ],
  [
    -49,
    -48
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0474: all cases passed');
}
