// Exercise 0832: Multiply by a fixed factor (84).
// Predict each result before running: node exercises/0832-multiply.cjs
'use strict';

function solve(value) {
  return value * 84;
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
    168
  ],
  [
    -1,
    -84
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0832: all cases passed');
}
