// Exercise 0447: Append a numbered suffix (45).
// Predict each result before running: node exercises/0447-suffix.cjs
'use strict';

function solve(value) {
  return value + '-45';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-45"
  ],
  [
    "",
    "-45"
  ],
  [
    "hello world",
    "hello world-45"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0447: all cases passed');
}
