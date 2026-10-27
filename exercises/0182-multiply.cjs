// Exercise 0182: Multiply by a fixed factor (19).
// Predict each result before running: node exercises/0182-multiply.cjs
'use strict';

function solve(value) {
  return value * 19;
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
    38
  ],
  [
    -1,
    -19
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0182: all cases passed');
}
