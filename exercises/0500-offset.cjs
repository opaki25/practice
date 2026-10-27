// Exercise 0500: Map numbers to an offset (50).
// Predict each result before running: node exercises/0500-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 50);
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
      50,
      51
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -50,
      50
    ],
    [
      0,
      100
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0500: all cases passed');
}
