// Exercise 0427: Append a numbered suffix (43).
// Predict each result before running: node exercises/0427-suffix.cjs
'use strict';

function solve(value) {
  return value + '-43';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-43"
  ],
  [
    "",
    "-43"
  ],
  [
    "hello world",
    "hello world-43"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0427: all cases passed');
}
