// Exercise 0761: Add a fixed amount (77).
// Predict each result before running: node exercises/0761-add.cjs
'use strict';

function solve(value) {
  return value + 77;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    77
  ],
  [
    2,
    79
  ],
  [
    -77,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0761: all cases passed');
}
