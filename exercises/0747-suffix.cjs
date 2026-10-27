// Exercise 0747: Append a numbered suffix (75).
// Predict each result before running: node exercises/0747-suffix.cjs
'use strict';

function solve(value) {
  return value + '-75';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-75"
  ],
  [
    "",
    "-75"
  ],
  [
    "hello world",
    "hello world-75"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0747: all cases passed');
}
