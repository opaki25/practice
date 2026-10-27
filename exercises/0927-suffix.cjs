// Exercise 0927: Append a numbered suffix (93).
// Predict each result before running: node exercises/0927-suffix.cjs
'use strict';

function solve(value) {
  return value + '-93';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-93"
  ],
  [
    "",
    "-93"
  ],
  [
    "hello world",
    "hello world-93"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0927: all cases passed');
}
