// Exercise 0561: Add a fixed amount (57).
// Predict each result before running: node exercises/0561-add.cjs
'use strict';

function solve(value) {
  return value + 57;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    57
  ],
  [
    2,
    59
  ],
  [
    -57,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0561: all cases passed');
}
