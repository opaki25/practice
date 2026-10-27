// Exercise 0929: Filter numbers above a threshold (93).
// Predict each result before running: node exercises/0929-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 93);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      92,
      93,
      94
    ],
    [
      94
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      95,
      96
    ],
    [
      95,
      96
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0929: all cases passed');
}
