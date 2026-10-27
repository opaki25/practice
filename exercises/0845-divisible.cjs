// Exercise 0845: Check divisibility (85).
// Predict each result before running: node exercises/0845-divisible.cjs
'use strict';

function solve(value) {
  return value % 85 === 0;
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
    255,
    true
  ],
  [
    86,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0845: all cases passed');
}
