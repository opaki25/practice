// Exercise 0080: Map numbers to an offset (8).
// Predict each result before running: node exercises/0080-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 8);
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
      8,
      9
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -8,
      8
    ],
    [
      0,
      16
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0080: all cases passed');
}
