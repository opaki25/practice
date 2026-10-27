// Exercise 0287: Append a numbered suffix (29).
// Predict each result before running: node exercises/0287-suffix.cjs
'use strict';

function solve(value) {
  return value + '-29';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-29"
  ],
  [
    "",
    "-29"
  ],
  [
    "hello world",
    "hello world-29"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0287: all cases passed');
}
