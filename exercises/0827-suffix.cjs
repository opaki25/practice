// Exercise 0827: Append a numbered suffix (83).
// Predict each result before running: node exercises/0827-suffix.cjs
'use strict';

function solve(value) {
  return value + '-83';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-83"
  ],
  [
    "",
    "-83"
  ],
  [
    "hello world",
    "hello world-83"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0827: all cases passed');
}
