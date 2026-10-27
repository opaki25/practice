// Exercise 0694: Clamp to a symmetric range (70).
// Predict each result before running: node exercises/0694-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-70, Math.min(70, value));
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
    71,
    70
  ],
  [
    -71,
    -70
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0694: all cases passed');
}
