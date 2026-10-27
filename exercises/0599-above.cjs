// Exercise 0599: Filter numbers above a threshold (60).
// Predict each result before running: node exercises/0599-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 60);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      59,
      60,
      61
    ],
    [
      61
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      62,
      63
    ],
    [
      62,
      63
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0599: all cases passed');
}
