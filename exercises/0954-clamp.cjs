// Exercise 0954: Clamp to a symmetric range (96).
// Predict each result before running: node exercises/0954-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-96, Math.min(96, value));
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
    97,
    96
  ],
  [
    -97,
    -96
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0954: all cases passed');
}
