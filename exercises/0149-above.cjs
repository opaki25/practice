// Exercise 0149: Filter numbers above a threshold (15).
// Predict each result before running: node exercises/0149-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 15);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      14,
      15,
      16
    ],
    [
      16
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      17,
      18
    ],
    [
      17,
      18
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0149: all cases passed');
}
