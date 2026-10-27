// Exercise 0030: Map numbers to an offset (3).
// Predict each result before running: node exercises/0030-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 3);
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
      3,
      4
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -3,
      3
    ],
    [
      0,
      6
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0030: all cases passed');
}
