// Exercise 0525: Check divisibility (53).
// Predict each result before running: node exercises/0525-divisible.cjs
'use strict';

function solve(value) {
  return value % 53 === 0;
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
    159,
    true
  ],
  [
    54,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0525: all cases passed');
}
