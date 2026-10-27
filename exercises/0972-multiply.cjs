// Exercise 0972: Multiply by a fixed factor (98).
// Predict each result before running: node exercises/0972-multiply.cjs
'use strict';

function solve(value) {
  return value * 98;
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
    196
  ],
  [
    -1,
    -98
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0972: all cases passed');
}
