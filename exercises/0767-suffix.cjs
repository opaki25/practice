// Exercise 0767: Append a numbered suffix (77).
// Predict each result before running: node exercises/0767-suffix.cjs
'use strict';

function solve(value) {
  return value + '-77';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-77"
  ],
  [
    "",
    "-77"
  ],
  [
    "hello world",
    "hello world-77"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0767: all cases passed');
}
