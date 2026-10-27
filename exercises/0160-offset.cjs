// Exercise 0160: Map numbers to an offset (16).
// Predict each result before running: node exercises/0160-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 16);
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
      16,
      17
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -16,
      16
    ],
    [
      0,
      32
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0160: all cases passed');
}
