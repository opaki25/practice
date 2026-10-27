// Exercise 0674: Clamp to a symmetric range (68).
// Predict each result before running: node exercises/0674-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-68, Math.min(68, value));
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
    69,
    68
  ],
  [
    -69,
    -68
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0674: all cases passed');
}
