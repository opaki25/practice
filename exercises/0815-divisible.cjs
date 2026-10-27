// Exercise 0815: Check divisibility (82).
// Predict each result before running: node exercises/0815-divisible.cjs
'use strict';

function solve(value) {
  return value % 82 === 0;
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
    246,
    true
  ],
  [
    83,
    false
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0815: all cases passed');
}
