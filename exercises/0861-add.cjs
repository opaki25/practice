// Exercise 0861: Add a fixed amount (87).
// Predict each result before running: node exercises/0861-add.cjs
'use strict';

function solve(value) {
  return value + 87;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    87
  ],
  [
    2,
    89
  ],
  [
    -87,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0861: all cases passed');
}
