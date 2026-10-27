// Exercise 0655: Check divisibility (66).
// Predict each result before running: node exercises/0655-divisible.cjs
'use strict';

function solve(value) {
  return value % 66 === 0;
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
    198,
    true
  ],
  [
    67,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0655: all cases passed');
}
