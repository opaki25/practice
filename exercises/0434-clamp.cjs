// Exercise 0434: Clamp to a symmetric range (44).
// Predict each result before running: node exercises/0434-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-44, Math.min(44, value));
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
    45,
    44
  ],
  [
    -45,
    -44
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0434: all cases passed');
}
