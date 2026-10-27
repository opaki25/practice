// Exercise 0056: Take the first items without mutation (6).
// Predict each result before running: node exercises/0056-take.cjs
'use strict';

function solve(value) {
  return value.slice(0, 6);
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
      7
    ],
    [
      0,
      1,
      2,
      3,
      4,
      5
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0056: all cases passed');
}
