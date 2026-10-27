// Exercise 0823: Check a minimum threshold (83).
// Predict each result before running: node exercises/0823-at-least.cjs
'use strict';

function solve(value) {
  return value >= 83;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    83,
    true
  ],
  [
    82,
    false
  ],
  [
    84,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0823: all cases passed');
}
