// Exercise 0487: Append a numbered suffix (49).
// Predict each result before running: node exercises/0487-suffix.cjs
'use strict';

function solve(value) {
  return value + '-49';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-49"
  ],
  [
    "",
    "-49"
  ],
  [
    "hello world",
    "hello world-49"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0487: all cases passed');
}
