// Exercise 0949: Filter numbers above a threshold (95).
// Predict each result before running: node exercises/0949-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 95);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      94,
      95,
      96
    ],
    [
      96
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      97,
      98
    ],
    [
      97,
      98
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0949: all cases passed');
}
