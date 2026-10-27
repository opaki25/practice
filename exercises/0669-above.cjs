// Exercise 0669: Filter numbers above a threshold (67).
// Predict each result before running: node exercises/0669-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 67);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      66,
      67,
      68
    ],
    [
      68
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      69,
      70
    ],
    [
      69,
      70
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0669: all cases passed');
}
