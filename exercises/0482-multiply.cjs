// Exercise 0482: Multiply by a fixed factor (49).
// Predict each result before running: node exercises/0482-multiply.cjs
'use strict';

function solve(value) {
  return value * 49;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    0
  ],
  [
    2,
    98
  ],
  [
    -1,
    -49
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0482: all cases passed');
}
