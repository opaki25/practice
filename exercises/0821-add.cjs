// Exercise 0821: Add a fixed amount (83).
// Predict each result before running: node exercises/0821-add.cjs
'use strict';

function solve(value) {
  return value + 83;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    83
  ],
  [
    2,
    85
  ],
  [
    -83,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0821: all cases passed');
}
