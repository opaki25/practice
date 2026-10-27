// Exercise 0895: Check divisibility (90).
// Predict each result before running: node exercises/0895-divisible.cjs
'use strict';

function solve(value) {
  return value % 90 === 0;
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
    270,
    true
  ],
  [
    91,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0895: all cases passed');
}
