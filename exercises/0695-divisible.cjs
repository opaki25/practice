// Exercise 0695: Check divisibility (70).
// Predict each result before running: node exercises/0695-divisible.cjs
'use strict';

function solve(value) {
  return value % 70 === 0;
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
    210,
    true
  ],
  [
    71,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0695: all cases passed');
}
