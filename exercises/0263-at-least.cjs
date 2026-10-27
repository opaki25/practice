// Exercise 0263: Check a minimum threshold (27).
// Predict each result before running: node exercises/0263-at-least.cjs
'use strict';

function solve(value) {
  return value >= 27;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    27,
    true
  ],
  [
    26,
    false
  ],
  [
    28,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0263: all cases passed');
}
