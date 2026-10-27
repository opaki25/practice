// Exercise 0107: Append a numbered suffix (11).
// Predict each result before running: node exercises/0107-suffix.cjs
'use strict';

function solve(value) {
  return value + '-11';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-11"
  ],
  [
    "",
    "-11"
  ],
  [
    "hello world",
    "hello world-11"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0107: all cases passed');
}
