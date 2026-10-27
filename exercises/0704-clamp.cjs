// Exercise 0704: Clamp to a symmetric range (71).
// Predict each result before running: node exercises/0704-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-71, Math.min(71, value));
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
    72,
    71
  ],
  [
    -72,
    -71
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0704: all cases passed');
}
