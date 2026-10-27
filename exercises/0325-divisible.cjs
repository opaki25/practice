// Exercise 0325: Check divisibility (33).
// Predict each result before running: node exercises/0325-divisible.cjs
'use strict';

function solve(value) {
  return value % 33 === 0;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    true
  ],
  [
    99,
    true
  ],
  [
    34,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0325: all cases passed');
}
