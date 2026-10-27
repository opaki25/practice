// Exercise 0139: Filter numbers above a threshold (14).
// Predict each result before running: node exercises/0139-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 14);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      13,
      14,
      15
    ],
    [
      15
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      16,
      17
    ],
    [
      16,
      17
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0139: all cases passed');
}
