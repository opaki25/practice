// Exercise 0562: Multiply by a fixed factor (57).
// Predict each result before running: node exercises/0562-multiply.cjs
'use strict';

function solve(value) {
  return value * 57;
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
    114
  ],
  [
    -1,
    -57
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0562: all cases passed');
}
