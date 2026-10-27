// Exercise 0277: Append a numbered suffix (28).
// Predict each result before running: node exercises/0277-suffix.cjs
'use strict';

function solve(value) {
  return value + '-28';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-28"
  ],
  [
    "",
    "-28"
  ],
  [
    "hello world",
    "hello world-28"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0277: all cases passed');
}
