// Exercise 0264: Clamp to a symmetric range (27).
// Predict each result before running: node exercises/0264-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-27, Math.min(27, value));
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
    28,
    27
  ],
  [
    -28,
    -27
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0264: all cases passed');
}
