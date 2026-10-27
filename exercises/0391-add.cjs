// Exercise 0391: Add a fixed amount (40).
// Predict each result before running: node exercises/0391-add.cjs
'use strict';

function solve(value) {
  return value + 40;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    40
  ],
  [
    2,
    42
  ],
  [
    -40,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0391: all cases passed');
}
