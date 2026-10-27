// Exercise 0902: Multiply by a fixed factor (91).
// Predict each result before running: node exercises/0902-multiply.cjs
'use strict';

function solve(value) {
  return value * 91;
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
    182
  ],
  [
    -1,
    -91
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0902: all cases passed');
}
