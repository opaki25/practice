// Exercise 0875: Check divisibility (88).
// Predict each result before running: node exercises/0875-divisible.cjs
'use strict';

function solve(value) {
  return value % 88 === 0;
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
    264,
    true
  ],
  [
    89,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0875: all cases passed');
}
