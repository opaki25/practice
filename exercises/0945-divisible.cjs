// Exercise 0945: Check divisibility (95).
// Predict each result before running: node exercises/0945-divisible.cjs
'use strict';

function solve(value) {
  return value % 95 === 0;
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
    285,
    true
  ],
  [
    96,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0945: all cases passed');
}
