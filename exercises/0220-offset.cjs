// Exercise 0220: Map numbers to an offset (22).
// Predict each result before running: node exercises/0220-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 22);
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
      22,
      23
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -22,
      22
    ],
    [
      0,
      44
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0220: all cases passed');
}
