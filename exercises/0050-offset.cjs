// Exercise 0050: Map numbers to an offset (5).
// Predict each result before running: node exercises/0050-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 5);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      0,
      1
    ],
    [
      5,
      6
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -5,
      5
    ],
    [
      0,
      10
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0050: all cases passed');
}
