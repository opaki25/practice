// Exercise 0197: Append a numbered suffix (20).
// Predict each result before running: node exercises/0197-suffix.cjs
'use strict';

function solve(value) {
  return value + '-20';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-20"
  ],
  [
    "",
    "-20"
  ],
  [
    "hello world",
    "hello world-20"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0197: all cases passed');
}
