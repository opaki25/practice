// Exercise 0707: Append a numbered suffix (71).
// Predict each result before running: node exercises/0707-suffix.cjs
'use strict';

function solve(value) {
  return value + '-71';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-71"
  ],
  [
    "",
    "-71"
  ],
  [
    "hello world",
    "hello world-71"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0707: all cases passed');
}
