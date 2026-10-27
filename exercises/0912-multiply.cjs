// Exercise 0912: Multiply by a fixed factor (92).
// Predict each result before running: node exercises/0912-multiply.cjs
'use strict';

function solve(value) {
  return value * 92;
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
    184
  ],
  [
    -1,
    -92
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0912: all cases passed');
}
