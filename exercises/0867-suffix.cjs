// Exercise 0867: Append a numbered suffix (87).
// Predict each result before running: node exercises/0867-suffix.cjs
'use strict';

function solve(value) {
  return value + '-87';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-87"
  ],
  [
    "",
    "-87"
  ],
  [
    "hello world",
    "hello world-87"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0867: all cases passed');
}
