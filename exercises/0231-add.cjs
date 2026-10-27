// Exercise 0231: Add a fixed amount (24).
// Predict each result before running: node exercises/0231-add.cjs
'use strict';

function solve(value) {
  return value + 24;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    24
  ],
  [
    2,
    26
  ],
  [
    -24,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0231: all cases passed');
}
