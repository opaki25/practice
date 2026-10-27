// Exercise 0137: Append a numbered suffix (14).
// Predict each result before running: node exercises/0137-suffix.cjs
'use strict';

function solve(value) {
  return value + '-14';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-14"
  ],
  [
    "",
    "-14"
  ],
  [
    "hello world",
    "hello world-14"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0137: all cases passed');
}
