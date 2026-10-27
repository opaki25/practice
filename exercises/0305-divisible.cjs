// Exercise 0305: Check divisibility (31).
// Predict each result before running: node exercises/0305-divisible.cjs
'use strict';

function solve(value) {
  return value % 31 === 0;
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
    93,
    true
  ],
  [
    32,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0305: all cases passed');
}
