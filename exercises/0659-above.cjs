// Exercise 0659: Filter numbers above a threshold (66).
// Predict each result before running: node exercises/0659-above.cjs
'use strict';

function solve(value) {
  return value.filter(item => item > 66);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      65,
      66,
      67
    ],
    [
      67
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      68,
      69
    ],
    [
      68,
      69
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0659: all cases passed');
}
