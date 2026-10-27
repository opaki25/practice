// Exercise 0764: Clamp to a symmetric range (77).
// Predict each result before running: node exercises/0764-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-77, Math.min(77, value));
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
    78,
    77
  ],
  [
    -78,
    -77
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0764: all cases passed');
}
