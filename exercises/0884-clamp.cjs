// Exercise 0884: Clamp to a symmetric range (89).
// Predict each result before running: node exercises/0884-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-89, Math.min(89, value));
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
    90,
    89
  ],
  [
    -90,
    -89
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0884: all cases passed');
}
