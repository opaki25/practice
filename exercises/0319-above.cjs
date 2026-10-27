// Exercise 0319: Filter numbers above a threshold (32).
// Predict each result before running: node exercises/0319-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 32);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      31,
      32,
      33
    ],
    [
      33
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      34,
      35
    ],
    [
      34,
      35
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0319: all cases passed');
}
