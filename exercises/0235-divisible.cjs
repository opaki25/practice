// Exercise 0235: Check divisibility (24).
// Predict each result before running: node exercises/0235-divisible.cjs
'use strict';

function solve(value) {
  return value % 24 === 0;
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
    72,
    true
  ],
  [
    25,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0235: all cases passed');
}
