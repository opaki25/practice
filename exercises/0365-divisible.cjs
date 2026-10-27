// Exercise 0365: Check divisibility (37).
// Predict each result before running: node exercises/0365-divisible.cjs
'use strict';

function solve(value) {
  return value % 37 === 0;
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
    111,
    true
  ],
  [
    38,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0365: all cases passed');
}
