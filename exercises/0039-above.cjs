// Exercise 0039: Filter numbers above a threshold (4).
// Predict each result before running: node exercises/0039-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 4);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      3,
      4,
      5
    ],
    [
      5
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      6,
      7
    ],
    [
      6,
      7
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0039: all cases passed');
}
