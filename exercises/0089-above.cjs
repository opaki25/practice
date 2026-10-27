// Exercise 0089: Filter numbers above a threshold (9).
// Predict each result before running: node exercises/0089-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 9);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      8,
      9,
      10
    ],
    [
      10
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      11,
      12
    ],
    [
      11,
      12
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0089: all cases passed');
}
