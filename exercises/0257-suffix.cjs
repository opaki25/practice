// Exercise 0257: Append a numbered suffix (26).
// Predict each result before running: node exercises/0257-suffix.cjs
'use strict';

function solve(value) {
  return value + '-26';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-26"
  ],
  [
    "",
    "-26"
  ],
  [
    "hello world",
    "hello world-26"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0257: all cases passed');
}
