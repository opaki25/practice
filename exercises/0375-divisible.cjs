// Exercise 0375: Check divisibility (38).
// Predict each result before running: node exercises/0375-divisible.cjs
'use strict';

function solve(value) {
  return value % 38 === 0;
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
    114,
    true
  ],
  [
    39,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0375: all cases passed');
}
