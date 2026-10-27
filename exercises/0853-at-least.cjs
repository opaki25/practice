// Exercise 0853: Check a minimum threshold (86).
// Predict each result before running: node exercises/0853-at-least.cjs
'use strict';

function solve(value) {
  return value >= 86;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    86,
    true
  ],
  [
    85,
    false
  ],
  [
    87,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0853: all cases passed');
}
