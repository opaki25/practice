// Exercise 0863: Check a minimum threshold (87).
// Predict each result before running: node exercises/0863-at-least.cjs
'use strict';

function solve(value) {
  return value >= 87;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    87,
    true
  ],
  [
    86,
    false
  ],
  [
    88,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0863: all cases passed');
}
