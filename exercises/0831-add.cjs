// Exercise 0831: Add a fixed amount (84).
// Predict each result before running: node exercises/0831-add.cjs
'use strict';

function solve(value) {
  return value + 84;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    84
  ],
  [
    2,
    86
  ],
  [
    -84,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0831: all cases passed');
}
