// Exercise 0225: Check divisibility (23).
// Predict each result before running: node exercises/0225-divisible.cjs
'use strict';

function solve(value) {
  return value % 23 === 0;
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
    69,
    true
  ],
  [
    24,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0225: all cases passed');
}
