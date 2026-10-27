// Exercise 0955: Check divisibility (96).
// Predict each result before running: node exercises/0955-divisible.cjs
'use strict';

function solve(value) {
  return value % 96 === 0;
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
    288,
    true
  ],
  [
    97,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0955: all cases passed');
}
