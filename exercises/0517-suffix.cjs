// Exercise 0517: Append a numbered suffix (52).
// Predict each result before running: node exercises/0517-suffix.cjs
'use strict';

function solve(value) {
  return value + '-52';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-52"
  ],
  [
    "",
    "-52"
  ],
  [
    "hello world",
    "hello world-52"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0517: all cases passed');
}
