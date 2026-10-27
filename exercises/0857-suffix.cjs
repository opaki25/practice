// Exercise 0857: Append a numbered suffix (86).
// Predict each result before running: node exercises/0857-suffix.cjs
'use strict';

function solve(value) {
  return value + '-86';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-86"
  ],
  [
    "",
    "-86"
  ],
  [
    "hello world",
    "hello world-86"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0857: all cases passed');
}
