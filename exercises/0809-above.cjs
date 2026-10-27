// Exercise 0809: Filter numbers above a threshold (81).
// Predict each result before running: node exercises/0809-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 81);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      80,
      81,
      82
    ],
    [
      82
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      83,
      84
    ],
    [
      83,
      84
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0809: all cases passed');
}
