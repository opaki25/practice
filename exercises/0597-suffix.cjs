// Exercise 0597: Append a numbered suffix (60).
// Predict each result before running: node exercises/0597-suffix.cjs
'use strict';

function solve(value) {
  return value + '-60';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-60"
  ],
  [
    "",
    "-60"
  ],
  [
    "hello world",
    "hello world-60"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0597: all cases passed');
}
