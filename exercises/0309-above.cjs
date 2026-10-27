// Exercise 0309: Filter numbers above a threshold (31).
// Predict each result before running: node exercises/0309-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 31);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      30,
      31,
      32
    ],
    [
      32
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      33,
      34
    ],
    [
      33,
      34
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0309: all cases passed');
}
