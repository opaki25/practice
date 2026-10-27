// Exercise 0971: Add a fixed amount (98).
// Predict each result before running: node exercises/0971-add.cjs
'use strict';

function solve(value) {
  return value + 98;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    98
  ],
  [
    2,
    100
  ],
  [
    -98,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0971: all cases passed');
}
