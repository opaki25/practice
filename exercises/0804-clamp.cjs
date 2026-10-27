// Exercise 0804: Clamp to a symmetric range (81).
// Predict each result before running: node exercises/0804-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-81, Math.min(81, value));
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
    82,
    81
  ],
  [
    -82,
    -81
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0804: all cases passed');
}
