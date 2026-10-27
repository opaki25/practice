// Exercise 0095: Check divisibility (10).
// Predict each result before running: node exercises/0095-divisible.cjs
'use strict';

function solve(value) {
  return value % 10 === 0;
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
    30,
    true
  ],
  [
    11,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0095: all cases passed');
}
