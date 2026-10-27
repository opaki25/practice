// Exercise 0411: Add a fixed amount (42).
// Predict each result before running: node exercises/0411-add.cjs
'use strict';

function solve(value) {
  return value + 42;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    42
  ],
  [
    2,
    44
  ],
  [
    -42,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0411: all cases passed');
}
