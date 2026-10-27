// Exercise 0510: Map numbers to an offset (51).
// Predict each result before running: node exercises/0510-offset.cjs
'use strict';

function solve(value) {
  return value.map(item => item + 51);
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
      51,
      52
    ]
  ],
  [
    [],
    []
  ],
  [
    [
      -51,
      51
    ],
    [
      0,
      102
    ]
  ]
];
  for (const [input, expected] of cases) {
    const before = JSON.stringify(input);
    assert.deepEqual(solve(input), expected);
    assert.equal(JSON.stringify(input), before, 'Input must remain unchanged');
  }
  console.log('Exercise 0510: all cases passed');
}
