// Exercise 0877: Append a numbered suffix (88).
// Predict each result before running: node exercises/0877-suffix.cjs
'use strict';

function solve(value) {
  return value + '-88';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-88"
  ],
  [
    "",
    "-88"
  ],
  [
    "hello world",
    "hello world-88"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0877: all cases passed');
}
