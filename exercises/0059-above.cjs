// Exercise 0059: Filter numbers above a threshold (6).
// Predict each result before running: node exercises/0059-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 6);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      5,
      6,
      7
    ],
    [
      7
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      8,
      9
    ],
    [
      8,
      9
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0059: all cases passed');
}
