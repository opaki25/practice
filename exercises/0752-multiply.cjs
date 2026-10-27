// Exercise 0752: Multiply by a fixed factor (76).
// Predict each result before running: node exercises/0752-multiply.cjs
'use strict';

function solve(value) {
  return value * 76;
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    0,
    0
  ],
  [
    2,
    152
  ],
  [
    -1,
    -76
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0752: all cases passed');
}
