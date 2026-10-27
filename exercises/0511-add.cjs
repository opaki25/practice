// Exercise 0511: Add a fixed amount (52).
// Predict each result before running: node exercises/0511-add.cjs
'use strict';

function solve(value) {
  return value + 52;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    52
  ],
  [
    2,
    54
  ],
  [
    -52,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0511: all cases passed');
}
