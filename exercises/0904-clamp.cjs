// Exercise 0904: Clamp to a symmetric range (91).
// Predict each result before running: node exercises/0904-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-91, Math.min(91, value));
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
    92,
    91
  ],
  [
    -92,
    -91
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0904: all cases passed');
}
