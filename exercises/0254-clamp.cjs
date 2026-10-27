// Exercise 0254: Clamp to a symmetric range (26).
// Predict each result before running: node exercises/0254-clamp.cjs
'use strict';

function solve(value) {
  return Math.max(-26, Math.min(26, value));
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
    27,
    26
  ],
  [
    -27,
    -26
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0254: all cases passed');
}
