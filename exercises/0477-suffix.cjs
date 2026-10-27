// Exercise 0477: Append a numbered suffix (48).
// Predict each result before running: node exercises/0477-suffix.cjs
'use strict';

function solve(value) {
  return value + '-48';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-48"
  ],
  [
    "",
    "-48"
  ],
  [
    "hello world",
    "hello world-48"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0477: all cases passed');
}
