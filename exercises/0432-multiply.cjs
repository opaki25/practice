// Exercise 0432: Multiply by a fixed factor (44).
// Predict each result before running: node exercises/0432-multiply.cjs
'use strict';

function solve(value) {
  return value * 44;
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
    88
  ],
  [
    -1,
    -44
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0432: all cases passed');
}
