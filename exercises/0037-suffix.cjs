// Exercise 0037: Append a numbered suffix (4).
// Predict each result before running: node exercises/0037-suffix.cjs
'use strict';

function solve(value) {
  return value + '-4';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-4"
  ],
  [
    "",
    "-4"
  ],
  [
    "hello world",
    "hello world-4"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0037: all cases passed');
}
