// Exercise 0844: Clamp to a symmetric range (85).
// Predict each result before running: node exercises/0844-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-85, Math.min(85, value));
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
    86,
    85
  ],
  [
    -86,
    -85
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0844: all cases passed');
}
