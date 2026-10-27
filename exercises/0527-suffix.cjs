// Exercise 0527: Append a numbered suffix (53).
// Predict each result before running: node exercises/0527-suffix.cjs
'use strict';

function solve(value) {
  return value + '-53';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-53"
  ],
  [
    "",
    "-53"
  ],
  [
    "hello world",
    "hello world-53"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0527: all cases passed');
}
