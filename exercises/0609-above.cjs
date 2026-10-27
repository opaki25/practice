// Exercise 0609: Filter numbers above a threshold (61).
// Predict each result before running: node exercises/0609-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 61);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      60,
      61,
      62
    ],
    [
      62
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      63,
      64
    ],
    [
      63,
      64
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0609: all cases passed');
}
