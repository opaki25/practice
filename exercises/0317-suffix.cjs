// Exercise 0317: Append a numbered suffix (32).
// Predict each result before running: node exercises/0317-suffix.cjs
'use strict';

function solve(value) {
  return value + '-32';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-32"
  ],
  [
    "",
    "-32"
  ],
  [
    "hello world",
    "hello world-32"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0317: all cases passed');
}
