// Exercise 0604: Clamp to a symmetric range (61).
// Predict each result before running: node exercises/0604-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-61, Math.min(61, value));
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
    62,
    61
  ],
  [
    -62,
    -61
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0604: all cases passed');
}
