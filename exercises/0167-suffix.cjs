// Exercise 0167: Append a numbered suffix (17).
// Predict each result before running: node exercises/0167-suffix.cjs
'use strict';

function solve(value) {
  return value + '-17';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-17"
  ],
  [
    "",
    "-17"
  ],
  [
    "hello world",
    "hello world-17"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0167: all cases passed');
}
