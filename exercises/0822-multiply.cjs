// Exercise 0822: Multiply by a fixed factor (83).
// Predict each result before running: node exercises/0822-multiply.cjs
'use strict';

function solve(value) {
  return value * 83;
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
    166
  ],
  [
    -1,
    -83
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0822: all cases passed');
}
