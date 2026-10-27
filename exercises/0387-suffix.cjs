// Exercise 0387: Append a numbered suffix (39).
// Predict each result before running: node exercises/0387-suffix.cjs
'use strict';

function solve(value) {
  return value + '-39';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-39"
  ],
  [
    "",
    "-39"
  ],
  [
    "hello world",
    "hello world-39"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0387: all cases passed');
}
