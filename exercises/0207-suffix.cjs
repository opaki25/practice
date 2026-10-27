// Exercise 0207: Append a numbered suffix (21).
// Predict each result before running: node exercises/0207-suffix.cjs
'use strict';

function solve(value) {
  return value + '-21';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-21"
  ],
  [
    "",
    "-21"
  ],
  [
    "hello world",
    "hello world-21"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0207: all cases passed');
}
