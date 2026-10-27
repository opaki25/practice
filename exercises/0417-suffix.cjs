// Exercise 0417: Append a numbered suffix (42).
// Predict each result before running: node exercises/0417-suffix.cjs
'use strict';

function solve(value) {
  return value + '-42';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-42"
  ],
  [
    "",
    "-42"
  ],
  [
    "hello world",
    "hello world-42"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0417: all cases passed');
}
