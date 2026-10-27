// Exercise 0217: Append a numbered suffix (22).
// Predict each result before running: node exercises/0217-suffix.cjs
'use strict';

function solve(value) {
  return value + '-22';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-22"
  ],
  [
    "",
    "-22"
  ],
  [
    "hello world",
    "hello world-22"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0217: all cases passed');
}
