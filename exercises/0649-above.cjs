// Exercise 0649: Filter numbers above a threshold (65).
// Predict each result before running: node exercises/0649-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 65);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      64,
      65,
      66
    ],
    [
      66
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      67,
      68
    ],
    [
      67,
      68
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0649: all cases passed');
}
