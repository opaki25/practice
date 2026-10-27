// Exercise 0807: Append a numbered suffix (81).
// Predict each result before running: node exercises/0807-suffix.cjs
'use strict';

function solve(value) {
  return value + '-81';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-81"
  ],
  [
    "",
    "-81"
  ],
  [
    "hello world",
    "hello world-81"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0807: all cases passed');
}
