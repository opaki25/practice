// Exercise 0843: Check a minimum threshold (85).
// Predict each result before running: node exercises/0843-at-least.cjs
'use strict';

function solve(value) {
  return value >= 85;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    85,
    true
  ],
  [
    84,
    false
  ],
  [
    86,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0843: all cases passed');
}
