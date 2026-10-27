// Exercise 0505: Check divisibility (51).
// Predict each result before running: node exercises/0505-divisible.cjs
'use strict';

function solve(value) {
  return value % 51 === 0;
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
    153,
    true
  ],
  [
    52,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0505: all cases passed');
}
