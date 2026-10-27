// Exercise 0794: Clamp to a symmetric range (80).
// Predict each result before running: node exercises/0794-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-80, Math.min(80, value));
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
    81,
    80
  ],
  [
    -81,
    -80
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0794: all cases passed');
}
