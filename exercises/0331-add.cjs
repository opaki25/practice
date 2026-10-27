// Exercise 0331: Add a fixed amount (34).
// Predict each result before running: node exercises/0331-add.cjs
'use strict';

function solve(value) {
  return value + 34;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    34
  ],
  [
    2,
    36
  ],
  [
    -34,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0331: all cases passed');
}
