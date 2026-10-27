// Exercise 0150: Map numbers to an offset (15).
// Predict each result before running: node exercises/0150-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 15);
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
      15,
      16
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -15,
      15
    ],
    [
      0,
      30
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0150: all cases passed');
}
