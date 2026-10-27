// Exercise 0825: Check divisibility (83).
// Predict each result before running: node exercises/0825-divisible.cjs
'use strict';

function solve(value) {
  return value % 83 === 0;
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
    249,
    true
  ],
  [
    84,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0825: all cases passed');
}
