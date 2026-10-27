// Exercise 0289: Filter numbers above a threshold (29).
// Predict each result before running: node exercises/0289-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 29);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      28,
      29,
      30
    ],
    [
      30
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      31,
      32
    ],
    [
      31,
      32
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0289: all cases passed');
}
