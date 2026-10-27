// Exercise 0907: Append a numbered suffix (91).
// Predict each result before running: node exercises/0907-suffix.cjs
'use strict';

function solve(value) {
  return value + '-91';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-91"
  ],
  [
    "",
    "-91"
  ],
  [
    "hello world",
    "hello world-91"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0907: all cases passed');
}
