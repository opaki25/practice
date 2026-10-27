// Exercise 0481: Add a fixed amount (49).
// Predict each result before running: node exercises/0481-add.cjs
'use strict';

function solve(value) {
  return value + 49;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    49
  ],
  [
    2,
    51
  ],
  [
    -49,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0481: all cases passed');
}
