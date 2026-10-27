// Exercise 0625: Check divisibility (63).
// Predict each result before running: node exercises/0625-divisible.cjs
'use strict';

function solve(value) {
  return value % 63 === 0;
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
    189,
    true
  ],
  [
    64,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0625: all cases passed');
}
