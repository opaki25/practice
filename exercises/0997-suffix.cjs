// Exercise 0997: Append a numbered suffix (100).
// Predict each result before running: node exercises/0997-suffix.cjs
'use strict';

function solve(value) {
  return value + '-100';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-100"
  ],
  [
    "",
    "-100"
  ],
  [
    "hello world",
    "hello world-100"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0997: all cases passed');
}
