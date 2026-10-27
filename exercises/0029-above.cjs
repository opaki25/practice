// Exercise 0029: Filter numbers above a threshold (3).
// Predict each result before running: node exercises/0029-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 3);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      2,
      3,
      4
    ],
    [
      4
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      5,
      6
    ],
    [
      5,
      6
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0029: all cases passed');
}
