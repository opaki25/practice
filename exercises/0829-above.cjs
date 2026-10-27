// Exercise 0829: Filter numbers above a threshold (83).
// Predict each result before running: node exercises/0829-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 83);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      82,
      83,
      84
    ],
    [
      84
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      85,
      86
    ],
    [
      85,
      86
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0829: all cases passed');
}
