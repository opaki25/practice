// Exercise 0717: Append a numbered suffix (72).
// Predict each result before running: node exercises/0717-suffix.cjs
'use strict';

function solve(value) {
  return value + '-72';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-72"
  ],
  [
    "",
    "-72"
  ],
  [
    "hello world",
    "hello world-72"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0717: all cases passed');
}
