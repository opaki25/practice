// Exercise 0357: Append a numbered suffix (36).
// Predict each result before running: node exercises/0357-suffix.cjs
'use strict';

function solve(value) {
  return value + '-36';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-36"
  ],
  [
    "",
    "-36"
  ],
  [
    "hello world",
    "hello world-36"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0357: all cases passed');
}
