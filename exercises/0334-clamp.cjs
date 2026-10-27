// Exercise 0334: Clamp to a symmetric range (34).
// Predict each result before running: node exercises/0334-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-34, Math.min(34, value));
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
    35,
    34
  ],
  [
    -35,
    -34
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0334: all cases passed');
}
