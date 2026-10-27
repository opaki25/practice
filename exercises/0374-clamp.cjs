// Exercise 0374: Clamp to a symmetric range (38).
// Predict each result before running: node exercises/0374-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-38, Math.min(38, value));
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
    39,
    38
  ],
  [
    -39,
    -38
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0374: all cases passed');
}
