// Exercise 0957: Append a numbered suffix (96).
// Predict each result before running: node exercises/0957-suffix.cjs
'use strict';

function solve(value) {
  return value + '-96';
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    "item",
    "item-96"
  ],
  [
    "",
    "-96"
  ],
  [
    "hello world",
    "hello world-96"
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0957: all cases passed');
}
