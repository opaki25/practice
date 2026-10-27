// Exercise 0805: Check divisibility (81).
// Predict each result before running: node exercises/0805-divisible.cjs
'use strict';

function solve(value) {
  return value % 81 === 0;
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
    243,
    true
  ],
  [
    82,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0805: all cases passed');
}
