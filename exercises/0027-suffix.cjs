// Exercise 0027: Append a numbered suffix (3).
// Predict each result before running: node exercises/0027-suffix.cjs
'use strict';

function solve(value) {
  return value + '-3';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-3"
  ],
  [
    "",
    "-3"
  ],
  [
    "hello world",
    "hello world-3"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0027: all cases passed');
}
