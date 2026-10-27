// Exercise 0557: Append a numbered suffix (56).
// Predict each result before running: node exercises/0557-suffix.cjs
'use strict';

function solve(value) {
  return value + '-56';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-56"
  ],
  [
    "",
    "-56"
  ],
  [
    "hello world",
    "hello world-56"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0557: all cases passed');
}
