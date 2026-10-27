// Exercise 0385: Check divisibility (39).
// Predict each result before running: node exercises/0385-divisible.cjs
'use strict';

function solve(value) {
  return value % 39 === 0;
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
    117,
    true
  ],
  [
    40,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0385: all cases passed');
}
