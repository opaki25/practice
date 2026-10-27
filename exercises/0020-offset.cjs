// Exercise 0020: Map numbers to an offset (2).
// Predict each result before running: node exercises/0020-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 2);
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
      -2,
      2
    ],
    [
      0,
      4
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0020: all cases passed');
}
