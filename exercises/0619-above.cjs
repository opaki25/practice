// Exercise 0619: Filter numbers above a threshold (62).
// Predict each result before running: node exercises/0619-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 62);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      61,
      62,
      63
    ],
    [
      63
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      64,
      65
    ],
    [
      64,
      65
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0619: all cases passed');
}
