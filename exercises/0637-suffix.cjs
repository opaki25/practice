// Exercise 0637: Append a numbered suffix (64).
// Predict each result before running: node exercises/0637-suffix.cjs
'use strict';

function solve(value) {
  return value + '-64';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-64"
  ],
  [
    "",
    "-64"
  ],
  [
    "hello world",
    "hello world-64"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0637: all cases passed');
}
