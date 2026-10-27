// Exercise 0297: Append a numbered suffix (30).
// Predict each result before running: node exercises/0297-suffix.cjs
'use strict';

function solve(value) {
  return value + '-30';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-30"
  ],
  [
    "",
    "-30"
  ],
  [
    "hello world",
    "hello world-30"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0297: all cases passed');
}
