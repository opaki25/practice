// Exercise 0735: Check divisibility (74).
// Predict each result before running: node exercises/0735-divisible.cjs
'use strict';

function solve(value) {
  return value % 74 === 0;
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
    222,
    true
  ],
  [
    75,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0735: all cases passed');
}
