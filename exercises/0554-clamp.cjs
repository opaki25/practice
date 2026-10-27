// Exercise 0554: Clamp to a symmetric range (56).
// Predict each result before running: node exercises/0554-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-56, Math.min(56, value));
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
    57,
    56
  ],
  [
    -57,
    -56
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0554: all cases passed');
}
