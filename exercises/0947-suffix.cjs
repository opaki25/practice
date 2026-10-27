// Exercise 0947: Append a numbered suffix (95).
// Predict each result before running: node exercises/0947-suffix.cjs
'use strict';

function solve(value) {
  return value + '-95';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-95"
  ],
  [
    "",
    "-95"
  ],
  [
    "hello world",
    "hello world-95"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0947: all cases passed');
}
