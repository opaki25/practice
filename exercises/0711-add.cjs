// Exercise 0711: Add a fixed amount (72).
// Predict each result before running: node exercises/0711-add.cjs
'use strict';

function solve(value) {
  return value + 72;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    72
  ],
  [
    2,
    74
  ],
  [
    -72,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0711: all cases passed');
}
