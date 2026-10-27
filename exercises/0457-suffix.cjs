// Exercise 0457: Append a numbered suffix (46).
// Predict each result before running: node exercises/0457-suffix.cjs
'use strict';

function solve(value) {
  return value + '-46';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-46"
  ],
  [
    "",
    "-46"
  ],
  [
    "hello world",
    "hello world-46"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0457: all cases passed');
}
