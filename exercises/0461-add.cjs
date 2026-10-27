// Exercise 0461: Add a fixed amount (47).
// Predict each result before running: node exercises/0461-add.cjs
'use strict';

function solve(value) {
  return value + 47;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    47
  ],
  [
    2,
    49
  ],
  [
    -47,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0461: all cases passed');
}
