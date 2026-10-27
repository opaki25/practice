// Exercise 0519: Filter numbers above a threshold (52).
// Predict each result before running: node exercises/0519-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 52);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      51,
      52,
      53
    ],
    [
      53
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      54,
      55
    ],
    [
      54,
      55
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0519: all cases passed');
}
