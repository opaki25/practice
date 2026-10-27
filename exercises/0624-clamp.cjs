// Exercise 0624: Clamp to a symmetric range (63).
// Predict each result before running: node exercises/0624-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-63, Math.min(63, value));
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
    64,
    63
  ],
  [
    -64,
    -63
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0624: all cases passed');
}
