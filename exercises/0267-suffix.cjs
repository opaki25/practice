// Exercise 0267: Append a numbered suffix (27).
// Predict each result before running: node exercises/0267-suffix.cjs
'use strict';

function solve(value) {
  return value + '-27';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-27"
  ],
  [
    "",
    "-27"
  ],
  [
    "hello world",
    "hello world-27"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0267: all cases passed');
}
