// Exercise 0262: Multiply by a fixed factor (27).
// Predict each result before running: node exercises/0262-multiply.cjs
'use strict';

function solve(value) {
  return value * 27;
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
    54
  ],
  [
    -1,
    -27
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0262: all cases passed');
}
