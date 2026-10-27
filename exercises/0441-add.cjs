// Exercise 0441: Add a fixed amount (45).
// Predict each result before running: node exercises/0441-add.cjs
'use strict';

function solve(value) {
  return value + 45;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    45
  ],
  [
    2,
    47
  ],
  [
    -45,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0441: all cases passed');
}
