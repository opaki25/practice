// Exercise 0060: Map numbers to an offset (6).
// Predict each result before running: node exercises/0060-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 6);
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
      6,
      7
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -6,
      6
    ],
    [
      0,
      12
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0060: all cases passed');
}
