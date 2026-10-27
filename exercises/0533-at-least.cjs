// Exercise 0533: Check a minimum threshold (54).
// Predict each result before running: node exercises/0533-at-least.cjs
'use strict';

function solve(value) {
  return value >= 54;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    54,
    true
  ],
  [
    53,
    false
  ],
  [
    55,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0533: all cases passed');
}
