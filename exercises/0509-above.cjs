// Exercise 0509: Filter numbers above a threshold (51).
// Predict each result before running: node exercises/0509-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 51);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      50,
      51,
      52
    ],
    [
      52
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      53,
      54
    ],
    [
      53,
      54
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0509: all cases passed');
}
