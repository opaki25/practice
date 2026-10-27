// Exercise 0455: Check divisibility (46).
// Predict each result before running: node exercises/0455-divisible.cjs
'use strict';

function solve(value) {
  return value % 46 === 0;
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
    138,
    true
  ],
  [
    47,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0455: all cases passed');
}
