// Exercise 0115: Check divisibility (12).
// Predict each result before running: node exercises/0115-divisible.cjs
'use strict';

function solve(value) {
  return value % 12 === 0;
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
    36,
    true
  ],
  [
    13,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0115: all cases passed');
}
