// Exercise 0847: Append a numbered suffix (85).
// Predict each result before running: node exercises/0847-suffix.cjs
'use strict';

function solve(value) {
  return value + '-85';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-85"
  ],
  [
    "",
    "-85"
  ],
  [
    "hello world",
    "hello world-85"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0847: all cases passed');
}
