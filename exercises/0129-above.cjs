// Exercise 0129: Filter numbers above a threshold (13).
// Predict each result before running: node exercises/0129-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 13);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      12,
      13,
      14
    ],
    [
      14
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      15,
      16
    ],
    [
      15,
      16
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0129: all cases passed');
}
