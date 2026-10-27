// Exercise 0720: Map numbers to an offset (72).
// Predict each result before running: node exercises/0720-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 72);
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
      72,
      73
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -72,
      72
    ],
    [
      0,
      144
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0720: all cases passed');
}
