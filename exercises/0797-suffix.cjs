// Exercise 0797: Append a numbered suffix (80).
// Predict each result before running: node exercises/0797-suffix.cjs
'use strict';

function solve(value) {
  return value + '-80';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-80"
  ],
  [
    "",
    "-80"
  ],
  [
    "hello world",
    "hello world-80"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0797: all cases passed');
}
