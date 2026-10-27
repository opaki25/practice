// Exercise 0495: Check divisibility (50).
// Predict each result before running: node exercises/0495-divisible.cjs
'use strict';

function solve(value) {
  return value % 50 === 0;
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
    150,
    true
  ],
  [
    51,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0495: all cases passed');
}
