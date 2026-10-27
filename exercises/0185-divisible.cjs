// Exercise 0185: Check divisibility (19).
// Predict each result before running: node exercises/0185-divisible.cjs
'use strict';

function solve(value) {
  return value % 19 === 0;
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
    57,
    true
  ],
  [
    20,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0185: all cases passed');
}
