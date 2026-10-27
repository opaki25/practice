// Exercise 0302: Multiply by a fixed factor (31).
// Predict each result before running: node exercises/0302-multiply.cjs
'use strict';

function solve(value) {
  return value * 31;
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
    62
  ],
  [
    -1,
    -31
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0302: all cases passed');
}
