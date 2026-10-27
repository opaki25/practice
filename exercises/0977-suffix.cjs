// Exercise 0977: Append a numbered suffix (98).
// Predict each result before running: node exercises/0977-suffix.cjs
'use strict';

function solve(value) {
  return value + '-98';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-98"
  ],
  [
    "",
    "-98"
  ],
  [
    "hello world",
    "hello world-98"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0977: all cases passed');
}
