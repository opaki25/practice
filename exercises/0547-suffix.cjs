// Exercise 0547: Append a numbered suffix (55).
// Predict each result before running: node exercises/0547-suffix.cjs
'use strict';

function solve(value) {
  return value + '-55';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-55"
  ],
  [
    "",
    "-55"
  ],
  [
    "hello world",
    "hello world-55"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0547: all cases passed');
}
