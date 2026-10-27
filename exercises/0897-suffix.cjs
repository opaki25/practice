// Exercise 0897: Append a numbered suffix (90).
// Predict each result before running: node exercises/0897-suffix.cjs
'use strict';

function solve(value) {
  return value + '-90';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-90"
  ],
  [
    "",
    "-90"
  ],
  [
    "hello world",
    "hello world-90"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0897: all cases passed');
}
