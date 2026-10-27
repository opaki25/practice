// Exercise 0869: Filter numbers above a threshold (87).
// Predict each result before running: node exercises/0869-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 87);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      86,
      87,
      88
    ],
    [
      88
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      89,
      90
    ],
    [
      89,
      90
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0869: all cases passed');
}
