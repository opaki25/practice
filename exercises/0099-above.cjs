// Exercise 0099: Filter numbers above a threshold (10).
// Predict each result before running: node exercises/0099-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 10);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      9,
      10,
      11
    ],
    [
      11
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      12,
      13
    ],
    [
      12,
      13
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0099: all cases passed');
}
