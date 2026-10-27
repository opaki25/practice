// Exercise 0085: Check divisibility (9).
// Predict each result before running: node exercises/0085-divisible.cjs
'use strict';

function solve(value) {
  return value % 9 === 0;
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
    27,
    true
  ],
  [
    10,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0085: all cases passed');
}
