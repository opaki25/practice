// Exercise 0817: Append a numbered suffix (82).
// Predict each result before running: node exercises/0817-suffix.cjs
'use strict';

function solve(value) {
  return value + '-82';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-82"
  ],
  [
    "",
    "-82"
  ],
  [
    "hello world",
    "hello world-82"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0817: all cases passed');
}
