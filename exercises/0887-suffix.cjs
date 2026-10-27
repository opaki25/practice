// Exercise 0887: Append a numbered suffix (89).
// Predict each result before running: node exercises/0887-suffix.cjs
'use strict';

function solve(value) {
  return value + '-89';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-89"
  ],
  [
    "",
    "-89"
  ],
  [
    "hello world",
    "hello world-89"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0887: all cases passed');
}
