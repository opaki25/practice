// Exercise 0699: Filter numbers above a threshold (70).
// Predict each result before running: node exercises/0699-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 70);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      69,
      70,
      71
    ],
    [
      71
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      72,
      73
    ],
    [
      72,
      73
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0699: all cases passed');
}
