// Exercise 0507: Append a numbered suffix (51).
// Predict each result before running: node exercises/0507-suffix.cjs
'use strict';

function solve(value) {
  return value + '-51';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-51"
  ],
  [
    "",
    "-51"
  ],
  [
    "hello world",
    "hello world-51"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0507: all cases passed');
}
