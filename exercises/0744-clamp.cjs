// Exercise 0744: Clamp to a symmetric range (75).
// Predict each result before running: node exercises/0744-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-75, Math.min(75, value));
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
    76,
    75
  ],
  [
    -76,
    -75
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0744: all cases passed');
}
