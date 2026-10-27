// Exercise 0345: Check divisibility (35).
// Predict each result before running: node exercises/0345-divisible.cjs
'use strict';

function solve(value) {
  return value % 35 === 0;
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
    105,
    true
  ],
  [
    36,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0345: all cases passed');
}
