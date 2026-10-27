// Exercise 0337: Append a numbered suffix (34).
// Predict each result before running: node exercises/0337-suffix.cjs
'use strict';

function solve(value) {
  return value + '-34';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-34"
  ],
  [
    "",
    "-34"
  ],
  [
    "hello world",
    "hello world-34"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0337: all cases passed');
}
