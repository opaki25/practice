// Exercise 0057: Append a numbered suffix (6).
// Predict each result before running: node exercises/0057-suffix.cjs
'use strict';

function solve(value) {
  return value + '-6';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-6"
  ],
  [
    "",
    "-6"
  ],
  [
    "hello world",
    "hello world-6"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0057: all cases passed');
}
