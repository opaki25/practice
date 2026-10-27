// Exercise 0684: Clamp to a symmetric range (69).
// Predict each result before running: node exercises/0684-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-69, Math.min(69, value));
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
    70,
    69
  ],
  [
    -70,
    -69
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0684: all cases passed');
}
