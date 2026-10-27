// Exercise 0679: Filter numbers above a threshold (68).
// Predict each result before running: node exercises/0679-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 68);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      67,
      68,
      69
    ],
    [
      69
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      70,
      71
    ],
    [
      70,
      71
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0679: all cases passed');
}
