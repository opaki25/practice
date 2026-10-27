// Exercise 0627: Append a numbered suffix (63).
// Predict each result before running: node exercises/0627-suffix.cjs
'use strict';

function solve(value) {
  return value + '-63';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-63"
  ],
  [
    "",
    "-63"
  ],
  [
    "hello world",
    "hello world-63"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0627: all cases passed');
}
