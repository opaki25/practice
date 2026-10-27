// Exercise 0069: Filter numbers above a threshold (7).
// Predict each result before running: node exercises/0069-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 7);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      6,
      7,
      8
    ],
    [
      8
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      9,
      10
    ],
    [
      9,
      10
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0069: all cases passed');
}
