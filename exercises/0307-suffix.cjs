// Exercise 0307: Append a numbered suffix (31).
// Predict each result before running: node exercises/0307-suffix.cjs
'use strict';

function solve(value) {
  return value + '-31';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-31"
  ],
  [
    "",
    "-31"
  ],
  [
    "hello world",
    "hello world-31"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0307: all cases passed');
}
