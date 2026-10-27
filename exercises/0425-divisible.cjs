// Exercise 0425: Check divisibility (43).
// Predict each result before running: node exercises/0425-divisible.cjs
'use strict';

function solve(value) {
  return value % 43 === 0;
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
    129,
    true
  ],
  [
    44,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0425: all cases passed');
}
