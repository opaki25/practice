// Exercise 0841: Add a fixed amount (85).
// Predict each result before running: node exercises/0841-add.cjs
'use strict';

function solve(value) {
  return value + 85;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    85
  ],
  [
    2,
    87
  ],
  [
    -85,
    0
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0841: all cases passed');
}
