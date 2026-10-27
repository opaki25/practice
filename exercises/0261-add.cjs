// Exercise 0261: Add a fixed amount (27).
// Predict each result before running: node exercises/0261-add.cjs
'use strict';

function solve(value) {
  return value + 27;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    27
  ],
  [
    2,
    29
  ],
  [
    -27,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0261: all cases passed');
}
