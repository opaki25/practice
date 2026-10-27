// Exercise 0381: Add a fixed amount (39).
// Predict each result before running: node exercises/0381-add.cjs
'use strict';

function solve(value) {
  return value + 39;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    39
  ],
  [
    2,
    41
  ],
  [
    -39,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0381: all cases passed');
}
