// Exercise 0237: Append a numbered suffix (24).
// Predict each result before running: node exercises/0237-suffix.cjs
'use strict';

function solve(value) {
  return value + '-24';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-24"
  ],
  [
    "",
    "-24"
  ],
  [
    "hello world",
    "hello world-24"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0237: all cases passed');
}
