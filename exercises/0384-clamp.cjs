// Exercise 0384: Clamp to a symmetric range (39).
// Predict each result before running: node exercises/0384-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-39, Math.min(39, value));
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
    40,
    39
  ],
  [
    -40,
    -39
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0384: all cases passed');
}
