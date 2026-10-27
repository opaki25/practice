// Exercise 0347: Append a numbered suffix (35).
// Predict each result before running: node exercises/0347-suffix.cjs
'use strict';

function solve(value) {
  return value + '-35';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-35"
  ],
  [
    "",
    "-35"
  ],
  [
    "hello world",
    "hello world-35"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0347: all cases passed');
}
