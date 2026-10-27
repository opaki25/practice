// Exercise 0119: Filter numbers above a threshold (12).
// Predict each result before running: node exercises/0119-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 12);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      11,
      12,
      13
    ],
    [
      13
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      14,
      15
    ],
    [
      14,
      15
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0119: all cases passed');
}
