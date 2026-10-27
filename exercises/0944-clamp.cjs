// Exercise 0944: Clamp to a symmetric range (95).
// Predict each result before running: node exercises/0944-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-95, Math.min(95, value));
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
    96,
    95
  ],
  [
    -96,
    -95
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0944: all cases passed');
}
