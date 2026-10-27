// Exercise 0017: Append a numbered suffix (2).
// Predict each result before running: node exercises/0017-suffix.cjs
'use strict';

function solve(value) {
  return value + '-2';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-2"
  ],
  [
    "",
    "-2"
  ],
  [
    "hello world",
    "hello world-2"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0017: all cases passed');
}
