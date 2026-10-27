// Exercise 0117: Append a numbered suffix (12).
// Predict each result before running: node exercises/0117-suffix.cjs
'use strict';

function solve(value) {
  return value + '-12';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-12"
  ],
  [
    "",
    "-12"
  ],
  [
    "hello world",
    "hello world-12"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0117: all cases passed');
}
