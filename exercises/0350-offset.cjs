// Exercise 0350: Map numbers to an offset (35).
// Predict each result before running: node exercises/0350-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 35);
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
      35,
      36
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -35,
      35
    ],
    [
      0,
      70
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0350: all cases passed');
}
