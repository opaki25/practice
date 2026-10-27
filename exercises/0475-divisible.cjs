// Exercise 0475: Check divisibility (48).
// Predict each result before running: node exercises/0475-divisible.cjs
'use strict';

function solve(value) {
  return value % 48 === 0;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    true
  ],
  [
    144,
    true
  ],
  [
    49,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0475: all cases passed');
}
