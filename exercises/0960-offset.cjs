// Exercise 0960: Map numbers to an offset (96).
// Predict each result before running: node exercises/0960-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 96);
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
      96,
      97
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -96,
      96
    ],
    [
      0,
      192
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0960: all cases passed');
}
