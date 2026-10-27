// Exercise 0737: Append a numbered suffix (74).
// Predict each result before running: node exercises/0737-suffix.cjs
'use strict';

function solve(value) {
  return value + '-74';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-74"
  ],
  [
    "",
    "-74"
  ],
  [
    "hello world",
    "hello world-74"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0737: all cases passed');
}
