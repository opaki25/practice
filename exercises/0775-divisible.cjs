// Exercise 0775: Check divisibility (78).
// Predict each result before running: node exercises/0775-divisible.cjs
'use strict';

function solve(value) {
  return value % 78 === 0;
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
    234,
    true
  ],
  [
    79,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0775: all cases passed');
}
