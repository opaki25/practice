// Exercise 0995: Check divisibility (100).
// Predict each result before running: node exercises/0995-divisible.cjs
'use strict';

function solve(value) {
  return value % 100 === 0;
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
    300,
    true
  ],
  [
    101,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0995: all cases passed');
}
