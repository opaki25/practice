// Exercise 0125: Check divisibility (13).
// Predict each result before running: node exercises/0125-divisible.cjs
'use strict';

function solve(value) {
  return value % 13 === 0;
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
    39,
    true
  ],
  [
    14,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0125: all cases passed');
}
