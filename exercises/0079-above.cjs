// Exercise 0079: Filter numbers above a threshold (8).
// Predict each result before running: node exercises/0079-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 8);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      7,
      8,
      9
    ],
    [
      9
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      10,
      11
    ],
    [
      10,
      11
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0079: all cases passed');
}
