// Exercise 0454: Clamp to a symmetric range (46).
// Predict each result before running: node exercises/0454-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-46, Math.min(46, value));
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
    47,
    46
  ],
  [
    -47,
    -46
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0454: all cases passed');
}
