// Exercise 0067: Append a numbered suffix (7).
// Predict each result before running: node exercises/0067-suffix.cjs
'use strict';

function solve(value) {
  return value + '-7';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-7"
  ],
  [
    "",
    "-7"
  ],
  [
    "hello world",
    "hello world-7"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0067: all cases passed');
}
