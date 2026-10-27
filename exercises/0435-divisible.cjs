// Exercise 0435: Check divisibility (44).
// Predict each result before running: node exercises/0435-divisible.cjs
'use strict';

function solve(value) {
  return value % 44 === 0;
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
    132,
    true
  ],
  [
    45,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0435: all cases passed');
}
