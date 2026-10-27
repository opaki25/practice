// Exercise 0891: Add a fixed amount (90).
// Predict each result before running: node exercises/0891-add.cjs
'use strict';

function solve(value) {
  return value + 90;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    90
  ],
  [
    2,
    92
  ],
  [
    -90,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0891: all cases passed');
}
