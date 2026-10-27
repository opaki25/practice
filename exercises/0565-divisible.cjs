// Exercise 0565: Check divisibility (57).
// Predict each result before running: node exercises/0565-divisible.cjs
'use strict';

function solve(value) {
  return value % 57 === 0;
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
    171,
    true
  ],
  [
    58,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0565: all cases passed');
}
