// Exercise 0363: Check a minimum threshold (37).
// Predict each result before running: node exercises/0363-at-least.cjs
'use strict';

function solve(value) {
  return value >= 37;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    37,
    true
  ],
  [
    36,
    false
  ],
  [
    38,
    true
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0363: all cases passed');
}
