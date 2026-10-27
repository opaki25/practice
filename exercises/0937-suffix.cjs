// Exercise 0937: Append a numbered suffix (94).
// Predict each result before running: node exercises/0937-suffix.cjs
'use strict';

function solve(value) {
  return value + '-94';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-94"
  ],
  [
    "",
    "-94"
  ],
  [
    "hello world",
    "hello world-94"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0937: all cases passed');
}
