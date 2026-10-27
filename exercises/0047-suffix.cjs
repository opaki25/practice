// Exercise 0047: Append a numbered suffix (5).
// Predict each result before running: node exercises/0047-suffix.cjs
'use strict';

function solve(value) {
  return value + '-5';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-5"
  ],
  [
    "",
    "-5"
  ],
  [
    "hello world",
    "hello world-5"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0047: all cases passed');
}
