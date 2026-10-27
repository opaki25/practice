// Exercise 0443: Check a minimum threshold (45).
// Predict each result before running: node exercises/0443-at-least.cjs
'use strict';

function solve(value) {
  return value >= 45;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    45,
    true
  ],
  [
    44,
    false
  ],
  [
    46,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0443: all cases passed');
}
