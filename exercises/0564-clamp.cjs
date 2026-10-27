// Exercise 0564: Clamp to a symmetric range (57).
// Predict each result before running: node exercises/0564-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-57, Math.min(57, value));
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
    58,
    57
  ],
  [
    -58,
    -57
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0564: all cases passed');
}
