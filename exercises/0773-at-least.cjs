// Exercise 0773: Check a minimum threshold (78).
// Predict each result before running: node exercises/0773-at-least.cjs
'use strict';

function solve(value) {
  return value >= 78;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    78,
    true
  ],
  [
    77,
    false
  ],
  [
    79,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0773: all cases passed');
}
