// Exercise 0009: Filter numbers above a threshold (1).
// Predict each result before running: node exercises/0009-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 1);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      0,
      1,
      2
    ],
    [
      2
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      3,
      4
    ],
    [
      3,
      4
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0009: all cases passed');
}
