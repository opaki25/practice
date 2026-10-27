// Exercise 0639: Filter numbers above a threshold (64).
// Predict each result before running: node exercises/0639-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 64);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      63,
      64,
      65
    ],
    [
      65
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      66,
      67
    ],
    [
      66,
      67
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0639: all cases passed');
}
