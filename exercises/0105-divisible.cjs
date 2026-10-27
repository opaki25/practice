// Exercise 0105: Check divisibility (11).
// Predict each result before running: node exercises/0105-divisible.cjs
'use strict';

function solve(value) {
  return value % 11 === 0;
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
    33,
    true
  ],
  [
    12,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0105: all cases passed');
}
