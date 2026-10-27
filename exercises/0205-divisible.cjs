// Exercise 0205: Check divisibility (21).
// Predict each result before running: node exercises/0205-divisible.cjs
'use strict';

function solve(value) {
  return value % 21 === 0;
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
    63,
    true
  ],
  [
    22,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0205: all cases passed');
}
