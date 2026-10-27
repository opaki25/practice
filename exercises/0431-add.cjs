// Exercise 0431: Add a fixed amount (44).
// Predict each result before running: node exercises/0431-add.cjs
'use strict';

function solve(value) {
  return value + 44;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    44
  ],
  [
    2,
    46
  ],
  [
    -44,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0431: all cases passed');
}
