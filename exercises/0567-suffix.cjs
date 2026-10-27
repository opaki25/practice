// Exercise 0567: Append a numbered suffix (57).
// Predict each result before running: node exercises/0567-suffix.cjs
'use strict';

function solve(value) {
  return value + '-57';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-57"
  ],
  [
    "",
    "-57"
  ],
  [
    "hello world",
    "hello world-57"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0567: all cases passed');
}
