// Exercise 0969: Filter numbers above a threshold (97).
// Predict each result before running: node exercises/0969-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 97);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      96,
      97,
      98
    ],
    [
      98
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      99,
      100
    ],
    [
      99,
      100
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0969: all cases passed');
}
