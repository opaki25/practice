// Exercise 0967: Append a numbered suffix (97).
// Predict each result before running: node exercises/0967-suffix.cjs
'use strict';

function solve(value) {
  return value + '-97';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-97"
  ],
  [
    "",
    "-97"
  ],
  [
    "hello world",
    "hello world-97"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0967: all cases passed');
}
