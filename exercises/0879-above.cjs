// Exercise 0879: Filter numbers above a threshold (88).
// Predict each result before running: node exercises/0879-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 88);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      87,
      88,
      89
    ],
    [
      89
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      90,
      91
    ],
    [
      90,
      91
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0879: all cases passed');
}
