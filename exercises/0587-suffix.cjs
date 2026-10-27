// Exercise 0587: Append a numbered suffix (59).
// Predict each result before running: node exercises/0587-suffix.cjs
'use strict';

function solve(value) {
  return value + '-59';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-59"
  ],
  [
    "",
    "-59"
  ],
  [
    "hello world",
    "hello world-59"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0587: all cases passed');
}
