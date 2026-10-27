// Exercise 0076: Take the first items without mutation (8).
// Predict each result before running: node exercises/0076-take.cjs
'use strict';

function solve(value) {
  return value.slice(0, 8);
}

module.exports = solve;

if (require.main === module) {
  const assert = require('node:assert/strict');
  const cases = [
  [
    [
      1,
      2,
      3
    ],
    [
      1,
      2,
      3
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9
    ],
    [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0076: all cases passed');
}
