// Exercise 0485: Check divisibility (49).
// Predict each result before running: node exercises/0485-divisible.cjs
'use strict';

function solve(value) {
  return value % 49 === 0;
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
    147,
    true
  ],
  [
    50,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0485: all cases passed');
}
