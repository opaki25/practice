// Exercise 0594: Clamp to a symmetric range (60).
// Predict each result before running: node exercises/0594-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-60, Math.min(60, value));
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
    61,
    60
  ],
  [
    -61,
    -60
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0594: all cases passed');
}
