// Exercise 0819: Filter numbers above a threshold (82).
// Predict each result before running: node exercises/0819-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 82);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      81,
      82,
      83
    ],
    [
      83
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      84,
      85
    ],
    [
      84,
      85
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0819: all cases passed');
}
