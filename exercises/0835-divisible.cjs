// Exercise 0835: Check divisibility (84).
// Predict each result before running: node exercises/0835-divisible.cjs
'use strict';

function solve(value) {
  return value % 84 === 0;
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
    252,
    true
  ],
  [
    85,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0835: all cases passed');
}
