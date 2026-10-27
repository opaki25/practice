// Exercise 0077: Append a numbered suffix (8).
// Predict each result before running: node exercises/0077-suffix.cjs
'use strict';

function solve(value) {
  return value + '-8';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-8"
  ],
  [
    "",
    "-8"
  ],
  [
    "hello world",
    "hello world-8"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0077: all cases passed');
}
