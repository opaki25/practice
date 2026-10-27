// Exercise 0187: Append a numbered suffix (19).
// Predict each result before running: node exercises/0187-suffix.cjs
'use strict';

function solve(value) {
  return value + '-19';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-19"
  ],
  [
    "",
    "-19"
  ],
  [
    "hello world",
    "hello world-19"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0187: all cases passed');
}
