// Exercise 0777: Append a numbered suffix (78).
// Predict each result before running: node exercises/0777-suffix.cjs
'use strict';

function solve(value) {
  return value + '-78';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-78"
  ],
  [
    "",
    "-78"
  ],
  [
    "hello world",
    "hello world-78"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0777: all cases passed');
}
