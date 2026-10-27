// Exercise 0377: Append a numbered suffix (38).
// Predict each result before running: node exercises/0377-suffix.cjs
'use strict';

function solve(value) {
  return value + '-38';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-38"
  ],
  [
    "",
    "-38"
  ],
  [
    "hello world",
    "hello world-38"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0377: all cases passed');
}
