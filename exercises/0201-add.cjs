// Exercise 0201: Add a fixed amount (21).
// Predict each result before running: node exercises/0201-add.cjs
'use strict';

function solve(value) {
  return value + 21;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    21
  ],
  [
    2,
    23
  ],
  [
    -21,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0201: all cases passed');
}
