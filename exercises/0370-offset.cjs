// Exercise 0370: Map numbers to an offset (37).
// Predict each result before running: node exercises/0370-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 37);
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
      37,
      38
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -37,
      37
    ],
    [
      0,
      74
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0370: all cases passed');
}
