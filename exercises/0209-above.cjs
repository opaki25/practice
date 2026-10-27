// Exercise 0209: Filter numbers above a threshold (21).
// Predict each result before running: node exercises/0209-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 21);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      20,
      21,
      22
    ],
    [
      22
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      23,
      24
    ],
    [
      23,
      24
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0209: all cases passed');
}
