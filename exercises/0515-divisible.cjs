// Exercise 0515: Check divisibility (52).
// Predict each result before running: node exercises/0515-divisible.cjs
'use strict';

function solve(value) {
  return value % 52 === 0;
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
    156,
    true
  ],
  [
    53,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0515: all cases passed');
}
