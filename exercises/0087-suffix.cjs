// Exercise 0087: Append a numbered suffix (9).
// Predict each result before running: node exercises/0087-suffix.cjs
'use strict';

function solve(value) {
  return value + '-9';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-9"
  ],
  [
    "",
    "-9"
  ],
  [
    "hello world",
    "hello world-9"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0087: all cases passed');
}
